"""The ASCIA integration."""

import logging
import asyncio
import aiohttp

from homeassistant.config_entries import ConfigEntry, ConfigEntryNotReady
from homeassistant.const import CONF_URL
from homeassistant.core import HomeAssistant

from .const import CONF_SUPERVISOR_TOKEN, DOMAIN, SUPERVISOR_PORT

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up ASCIA from a config entry."""
    # Get Supervisor URL from Home Assistant
    supervisor_url = "http://supervisor/api/hassio"  # Default fallback

    # Check if api config exists and has a host attribute
    if (
        hasattr(hass, "config")
        and hasattr(hass.config, "api")
        and hass.config.api is not None
    ):
        if hasattr(hass.config.api, "host") and hass.config.api.host is not None:
            supervisor_url = (
                f"http://{hass.config.api.host}:{SUPERVISOR_PORT}/api/hassio"
            )

    # Get Supervisor token from config or Home Assistant
    supervisor_token = entry.data.get(
        CONF_SUPERVISOR_TOKEN, hass.data.get("hassio_token", "")
    )

    if not supervisor_token:
        _LOGGER.error("No supervisor token available")
        return False

    # Test the connection before setting up
    try:
        session = hass.helpers.aiohttp_client.async_get_clientsession(hass)
        headers = {
            "Authorization": f"Bearer {supervisor_token}",
            "Content-Type": "application/json",
        }
        
        async with asyncio.timeout(10):
            async with session.get(
                f"{supervisor_url}/info",
                headers=headers,
            ) as response:
                if response.status != 200:
                    _LOGGER.error(
                        "Error connecting to supervisor API: %s", response.status
                    )
                    raise ConfigEntryNotReady(
                        f"Error connecting to supervisor API: {response.status}"
                    )
                
                # Store the connection data for runtime use
                entry.runtime_data = {
                    "is_connected": True,
                    "last_connection": hass.loop.time(),
                }
    except (aiohttp.ClientError, asyncio.TimeoutError) as err:
        _LOGGER.error("Error connecting to supervisor API: %s", err)
        raise ConfigEntryNotReady(f"Error connecting to supervisor API: {err}")

    hass.data[DOMAIN] = {
        CONF_URL: supervisor_url,
        CONF_SUPERVISOR_TOKEN: supervisor_token,
    }

    await hass.config_entries.async_forward_entry_setups(entry, ["sensor"])
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, ["sensor"])
    if unload_ok:
        hass.data.pop(DOMAIN)

    return unload_ok
