"""The AsciaHomeSense integration."""
import logging
import voluptuous as vol

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.typing import ConfigType
import homeassistant.helpers.config_validation as cv
from homeassistant.components.hassio.coordinator import get_addons_info

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

# Basic configuration schema accepting an empty dictionary for the domain
CONFIG_SCHEMA = vol.Schema(
    {DOMAIN: vol.Schema({})},
    extra=vol.ALLOW_EXTRA,
)

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
