"""The AsciaHomeSense integration."""

import logging

from aiohasupervisor import SupervisorError
import voluptuous as vol

from homeassistant.components.hassio.addon_manager import (
    AddonError,
    AddonManager as HassioAddonManager,
)
from homeassistant.components.hassio.coordinator import get_addons_info
from homeassistant.components.hassio.handler import (
    HassioAPIError,
    get_supervisor_client,
)
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED
from homeassistant.core import HomeAssistant
from homeassistant.helpers.hassio import is_hassio
from homeassistant.helpers.typing import ConfigType

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

# Basic configuration schema accepting an empty dictionary for the domain
CONFIG_SCHEMA = vol.Schema(
    {DOMAIN: vol.Schema({})},
    extra=vol.ALLOW_EXTRA,
)



class AsciaAddonManager:
    """Manages addon installation for the AsciaHomeSense component."""

    def __init__(self, hass: HomeAssistant):
        """Initialize the addon manager."""
        self.hass = hass
        self._supervisor_client = None  # Lazy load supervisor client

    @property
    def supervisor_client(self):
        """Return the supervisor client, initializing if needed."""
        if self._supervisor_client is None and is_hassio(self.hass):
            self._supervisor_client = get_supervisor_client(self.hass)
        return self._supervisor_client

    def _is_addon_installed(self, addon_slug: str) -> bool:
        """Check if the addon is already installed."""
        addons_info = get_addons_info(self.hass)
        if addons_info and addon_slug in addons_info:
            _LOGGER.info(
                "Addon '%s' is already installed, skipping installation.", addon_slug
            )
            return True
        return False

    async def async_install_addon(self, addon_slug: str) -> bool:
        """Install the addon using the Supervisor API via HassioAddonManager."""
        _LOGGER.info("Attempting to install addon '%s' via Supervisor API", addon_slug)

        if not is_hassio(self.hass):
            _LOGGER.warning(
                "Supervisor integration not detected. Skipping addon installation for '%s'.",
                addon_slug,
            )
            return False

        if self._is_addon_installed(addon_slug):
            return True

        try:
            # Use the renamed HassioAddonManager
            addon_manager = HassioAddonManager(
                self.hass,
                _LOGGER,
                addon_name=addon_slug,  # Using slug as name for simplicity
                addon_slug=addon_slug,
            )
            _LOGGER.debug("Using HassioAddonManager to install '%s'", addon_slug)
            await addon_manager.async_install_addon()
            _LOGGER.info(
                "Successfully initiated installation for addon '%s' via Supervisor API",
                addon_slug,
            )
            return True
        except AddonError as e:
            _LOGGER.error(
                "Failed to install addon '%s' via Supervisor API: %s", addon_slug, e
            )
            return False
        except HassioAPIError as e:
            _LOGGER.error(
                "Hassio API error during installation of addon '%s': %s", addon_slug, e
            )
            return False
        except SupervisorError as e:
            _LOGGER.error(
                "Supervisor error during installation of addon '%s': %s", addon_slug, e
            )
            return False
        except Exception as e:
            _LOGGER.exception(
                "Unexpected error during installation of addon '%s': %s", addon_slug, e
            )
            return False

    async def async_install_addon_alternative(self, addon_slug: str) -> bool:
        """Alternative method using the Supervisor client directly."""
        _LOGGER.info("Attempting to install addon '%s' via Supervisor client", addon_slug)

        if not is_hassio(self.hass):
            _LOGGER.warning(
                "Supervisor integration not detected. Skipping addon installation for '%s'.",
                addon_slug,
            )
            return False

        if self._is_addon_installed(addon_slug):
            return True

        if not self.supervisor_client:
             _LOGGER.error("Could not get Supervisor client for alternative installation.")
             return False

        try:
            _LOGGER.debug("Using Supervisor client directly to install '%s'", addon_slug)
            await self.supervisor_client.store.install_addon(addon_slug)
            _LOGGER.info(
                "Successfully initiated installation for addon '%s' via Supervisor client",
                addon_slug,
            )
            return True
        except HassioAPIError as e:
            _LOGGER.error(
                "Hassio API error during alternative installation of addon '%s': %s", addon_slug, e
            )
            return False
        except SupervisorError as e:
            _LOGGER.error(
                "Supervisor error during alternative installation of addon '%s': %s", addon_slug, e
            )
            return False
        except Exception as e:
            _LOGGER.exception(
                "Unexpected error during alternative installation of addon '%s': %s", addon_slug, e
            )
            return False

    def _list_installed_addons(self):
        """List all installed addons and log them."""
        _LOGGER.info("Listing all installed add-ons")
        addons_info = get_addons_info(self.hass)

        if addons_info:
            addon_list = []
            for addon_slug, addon_data in addons_info.items():
                addon_name = addon_data.get("name", addon_slug)
                addon_version = addon_data.get("version", "unknown")
                addon_state = addon_data.get("state", "unknown")
                addon_list.append(
                    f"{addon_name} ({addon_slug}, v{addon_version}, {addon_state})"
                )
            _LOGGER.info(
                "Installed add-ons (%s): %s", len(addon_list), ", ".join(addon_list)
            )
        else:
            _LOGGER.info("No add-ons information available or Supervisor not detected")

    async def _async_check_and_install_addon_on_start(self, event):
        """Check for and install required addons after HA starts."""
        # Note: 'event' parameter is kept as it's passed by the listener.
        _LOGGER.info(
            "Home Assistant started, checking required addon installations."
        )

        addons_to_install = [
            {"slug": "core_mosquitto", "name": "Mosquitto Broker", "options": {"log_level": "info"}},
            {"slug": "d5369777_music_assistant", "name": "Music Assistant Server", "options": {}},
            {"slug": "core_ssh", "name": "Terminal & SSH", "options": {}},
            {"slug": "a0d7b954_tailscale", "name": "Tailscale", "options": {}},
            {"slug": "core_samba", "name": "Samba share", "options": {}},
        ]

        for addon_info in addons_to_install:
            addon_slug = addon_info["slug"]
            addon_name = addon_info["name"] # Name and options currently unused, but kept for potential future use
            _LOGGER.info("Checking installation requirement for addon '%s' (%s)", addon_name, addon_slug)

            # Attempt installation using the primary method
            success = await self.async_install_addon(addon_slug)

            # If primary method fails, try the alternative method
            if not success:
                _LOGGER.info(
                    "Primary installation method failed, trying alternative method for '%s'",
                    addon_slug,
                )
                await self.async_install_addon_alternative(addon_slug)



# Removed _async_install_addon and _async_install_addon_alternative functions.
# Their logic is now encapsulated in the AsciaAddonManager class below (to be inserted).



# _delayed_install_task removed as installation is now triggered by EVENT_HOMEASSISTANT_STARTED
async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the AsciaHomeSense component from configuration.yaml."""
    _LOGGER.info("Setting up AsciaHomeSense integration")

    # Check if the domain configuration exists; it should due to CONFIG_SCHEMA
    if DOMAIN not in config:
        _LOGGER.debug("AsciaHomeSense domain not found in configuration.yaml")
        return True  # Should not happen if schema is applied correctly

    hass.data.setdefault(DOMAIN, {})
    conf = config[DOMAIN]  # Get the specific config for this domain (currently empty)

    # --- Placeholder for actual setup logic ---
    # Example: Initialize a connection, discover devices, etc.
    # hass.data[DOMAIN]['coordinator'] = MyCoordinator(hass, conf)
    # await hass.data[DOMAIN]['coordinator'].async_config_entry_first_refresh()
    #
    # await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    # --- End Placeholder ---

    # Instantiate the addon manager
    addon_manager = AsciaAddonManager(hass)

    # List installed addons using the manager
    addon_manager._list_installed_addons()
    # --- Addon Installation Logic ---
    # _async_check_and_install_addon_on_start moved into AsciaAddonManager class
    # Listen for Home Assistant started event to trigger the check for multiple addons

    # Check if Supervisor integration is available using the helper function
    if is_hassio(hass):
        _LOGGER.info(
            "Supervisor integration detected. Scheduling required addon installation check."
        )
        hass.bus.async_listen_once(
            EVENT_HOMEASSISTANT_STARTED, addon_manager._async_check_and_install_addon_on_start
        )
        _LOGGER.info(
            "Scheduled required addon installation check upon Home Assistant start."
        )
    else:
        _LOGGER.warning(
            "Supervisor integration not available. Addon installation will be skipped."
        )
    # --- End Addon Installation Logic ---

    _LOGGER.info("AsciaHomeSense setup complete")

    # Return True to indicate successful setup
    return True


#Optional: If you need cleanup when Home Assistant stops
async def async_unload(hass: HomeAssistant) -> bool:
    """Unload the AsciaHomeSense component."""
    _LOGGER.info("Unloading AsciaHomeSense integration")
    # Perform cleanup here, like closing connections
    # Example: await hass.data[DOMAIN]['coordinator'].shutdown()
    # hass.data.pop(DOMAIN)
    return True
