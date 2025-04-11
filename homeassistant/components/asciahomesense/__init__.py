"""The AsciaHomeSense integration."""
import logging

from aiohasupervisor import SupervisorError
import voluptuous as vol

from homeassistant.components.hassio.addon_manager import AddonError, AddonManager
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

async def _async_install_addon(hass: HomeAssistant, addon_slug: str):
    """Install the addon using the Supervisor API."""
    _LOGGER.info("Attempting to install addon '%s' via Supervisor API", addon_slug)

    # Check if Supervisor is available using the helper function
    if not is_hassio(hass):
        _LOGGER.warning("Supervisor integration not detected. Skipping addon installation for '%s'.", addon_slug)
        return False

    # Check if addon is already installed
    addons_info = get_addons_info(hass)
    if addons_info and addon_slug in addons_info:
        _LOGGER.info("Addon '%s' is already installed, skipping installation.", addon_slug)
        return True

    try:
        # Create an AddonManager instance for this addon
        addon_manager = AddonManager(
            hass,
            _LOGGER,
            addon_name=addon_slug,  # Using slug as name for simplicity
            addon_slug=addon_slug
        )

        # Install the addon
        _LOGGER.debug("Using AddonManager to install '%s'", addon_slug)
        await addon_manager.async_install_addon()

        _LOGGER.info("Successfully initiated installation for addon '%s' via Supervisor API", addon_slug)
        # Note: Installation happens in the background. This confirms the API call succeeded.
        return True

    except AddonError as e:
        _LOGGER.error("Failed to install addon '%s' via Supervisor API: %s", addon_slug, e)
        return False
    except HassioAPIError as e:
        _LOGGER.error("Hassio API error during installation of addon '%s': %s", addon_slug, e)
        return False
    except SupervisorError as e:
        _LOGGER.error("Supervisor error during installation of addon '%s': %s", addon_slug, e)
        return False
    except Exception as e:
        _LOGGER.exception("Unexpected error during installation of addon '%s': %s", addon_slug, e)
        return False



async def _async_install_addon_alternative(hass: HomeAssistant, addon_slug: str):
    """Alternative method to install the addon using the Supervisor client directly."""
    _LOGGER.info("Attempting to install addon '%s' via Supervisor client", addon_slug)

    # Check if Supervisor is available using the helper function
    if not is_hassio(hass):
        _LOGGER.warning("Supervisor integration not detected. Skipping addon installation for '%s'.", addon_slug)
        return False

    # Check if addon is already installed
    addons_info = get_addons_info(hass)
    if addons_info and addon_slug in addons_info:
        _LOGGER.info("Addon '%s' is already installed, skipping installation.", addon_slug)
        return True

    try:
        # Get the supervisor client
        supervisor_client = get_supervisor_client(hass)

        # Install the addon using the store API
        _LOGGER.debug("Using Supervisor client to install '%s'", addon_slug)
        await supervisor_client.store.install_addon(addon_slug)

        _LOGGER.info("Successfully initiated installation for addon '%s' via Supervisor client", addon_slug)
        return True
    except HassioAPIError as e:
        _LOGGER.error("Hassio API error during installation of addon '%s': %s", addon_slug, e)
        return False
    except SupervisorError as e:
        _LOGGER.error("Supervisor error during installation of addon '%s': %s", addon_slug, e)
        return False
    except Exception as e:
        _LOGGER.exception("Unexpected error during installation of addon '%s': %s", addon_slug, e)
        return False


# _delayed_install_task removed as installation is now triggered by EVENT_HOMEASSISTANT_STARTED
async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the AsciaHomeSense component from configuration.yaml."""
    _LOGGER.info("Setting up AsciaHomeSense integration")

    # Check if the domain configuration exists; it should due to CONFIG_SCHEMA
    if DOMAIN not in config:
        _LOGGER.debug("AsciaHomeSense domain not found in configuration.yaml")
        return True # Should not happen if schema is applied correctly

    hass.data.setdefault(DOMAIN, {})
    conf = config[DOMAIN] # Get the specific config for this domain (currently empty)

    # --- Placeholder for actual setup logic ---
    # Example: Initialize a connection, discover devices, etc.
    # hass.data[DOMAIN]['coordinator'] = MyCoordinator(hass, conf)
    # await hass.data[DOMAIN]['coordinator'].async_config_entry_first_refresh()
    #
    # await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    # --- End Placeholder ---

    # List all installed add-ons
    _LOGGER.info("Listing all installed add-ons")

    # Get the dictionary of installed add-ons
    addons_info = get_addons_info(hass)

    if addons_info:
        # Extract add-on names and slugs
        addon_list = []
        for addon_slug, addon_data in addons_info.items():
            addon_name = addon_data.get("name", addon_slug)
            addon_version = addon_data.get("version", "unknown")
            addon_state = addon_data.get("state", "unknown")
            addon_list.append(f"{addon_name} ({addon_slug}, v{addon_version}, {addon_state})")

        # Log the list of add-ons
        _LOGGER.info("Installed add-ons (%s): %s",
                    len(addon_list),
                    ", ".join(addon_list))
    else:
        _LOGGER.info("No add-ons information available or Supervisor not detected")


    # --- Addon Installation Logic ---
    async def _async_check_and_install_addon_on_start(event):
        """Check for and install the required addon after HA starts."""
        addon_slug = "core_samba"
        _LOGGER.info("Home Assistant started, checking addon installation requirement for '%s'.", addon_slug)

        # Attempt installation using the primary method (AddonManager)
        # The method already checks if the addon is installed
        success = await _async_install_addon(hass, addon_slug)

        # If primary method fails, try the alternative method
        if not success:
            _LOGGER.info("Primary installation method failed, trying alternative method for '%s'", addon_slug)
            await _async_install_addon_alternative(hass, addon_slug)

    # Listen for Home Assistant started event to trigger the check
    addon_slug = "core_samba"

    # Check if Supervisor integration is available using the helper function
    if is_hassio(hass):
        _LOGGER.info("Supervisor integration detected. Scheduling '%s' addon installation check.", addon_slug)
        hass.bus.async_listen_once(
            EVENT_HOMEASSISTANT_STARTED, _async_check_and_install_addon_on_start
        )
        _LOGGER.info("Scheduled addon '%s' installation check upon Home Assistant start.", addon_slug)
    else:
        _LOGGER.warning(
            "Supervisor integration not available. Addon '%s' installation will be skipped.",
            addon_slug
        )
    # --- End Addon Installation Logic ---

    _LOGGER.info("AsciaHomeSense setup complete")

    # Return True to indicate successful setup
    return True

# Optional: If you need cleanup when Home Assistant stops
# async def async_unload(hass: HomeAssistant) -> bool:
#     """Unload the AsciaHomeSense component."""
#     _LOGGER.info("Unloading AsciaHomeSense integration")
#     # Perform cleanup here, like closing connections
#     # Example: await hass.data[DOMAIN]['coordinator'].shutdown()
#     # hass.data.pop(DOMAIN)
#     return True
