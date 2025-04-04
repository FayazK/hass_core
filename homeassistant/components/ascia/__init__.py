"""The ASCIA integration."""

import asyncio
import logging

import aiohttp

from homeassistant.config_entries import ConfigEntry, ConfigEntryNotReady
from homeassistant.const import CONF_URL
from homeassistant.core import HomeAssistant
from homeassistant.helpers import discovery

from .const import CONF_SUPERVISOR_TOKEN, DOMAIN, SUPERVISOR_PORT

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the ASCIA component from YAML."""
    if DOMAIN not in config:
        return True

    # Make sure hassio integration is loaded
    if "hassio" not in hass.data:
        _LOGGER.error(
            "ASCIA integration requires the Supervisor integration to be loaded. "
            "Make sure you're running Home Assistant on a supported installation "
            "method with Supervisor (like Home Assistant OS or Supervised)."
        )
        return False

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

    # Try to get the supervisor token with retries
    supervisor_token = hass.data.get("hassio_token", "")
    retry_count = 0
    max_retries = 3

    while not supervisor_token and retry_count < max_retries:
        _LOGGER.info(
            "Supervisor token not available yet, waiting for hassio integration to fully initialize..."
        )
        await asyncio.sleep(2)
        supervisor_token = hass.data.get("hassio_token", "")
        retry_count += 1

    if not supervisor_token:
        _LOGGER.error(
            "No supervisor token available. Make sure the hassio integration is "
            "loaded and you're running on a system with Supervisor."
        )
        return False

    # Check if already set up via config entry to avoid duplicated resources
    if DOMAIN in hass.data:
        _LOGGER.info("ASCIA already configured via config entry")
        return True

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
                    return False
    except (TimeoutError, aiohttp.ClientError) as err:
        _LOGGER.error("Error connecting to supervisor API: %s", err)
        return False

    # Store configuration in hass.data
    hass.data[DOMAIN] = {
        CONF_URL: supervisor_url,
        CONF_SUPERVISOR_TOKEN: supervisor_token,
        "setup_from_yaml": True,
    }

    # Load sensor platform
    hass.async_create_task(
        discovery.async_load_platform(hass, "sensor", DOMAIN, {}, config)
    )

    _LOGGER.info("ASCIA integration successfully set up via YAML configuration")
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up ASCIA from a config entry."""
    # Check if already set up via YAML
    if DOMAIN in hass.data and hass.data[DOMAIN].get("setup_from_yaml"):
        entry.runtime_data = {
            "is_connected": True,
            "last_connection": hass.loop.time(),
        }
        return True

    # Make sure hassio integration is loaded
    if "hassio" not in hass.data:
        _LOGGER.error(
            "ASCIA integration requires the Supervisor integration to be loaded. "
            "Make sure you're running Home Assistant on a supported installation "
            "method with Supervisor (like Home Assistant OS or Supervised)."
        )
        raise ConfigEntryNotReady(
            "Supervisor integration not loaded, required for ASCIA integration"
        )

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

    # Try to get the supervisor token with retries if not available
    retry_count = 0
    max_retries = 3

    while not supervisor_token and retry_count < max_retries:
        _LOGGER.info(
            "Supervisor token not available yet, waiting for hassio integration to fully initialize..."
        )
        await asyncio.sleep(2)
        supervisor_token = hass.data.get("hassio_token", "")
        retry_count += 1

    if not supervisor_token:
        _LOGGER.error(
            "No supervisor token available. Make sure the hassio integration is "
            "loaded and you're running on a system with Supervisor."
        )
        raise ConfigEntryNotReady("No supervisor token available")

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
    except (TimeoutError, aiohttp.ClientError) as err:
        _LOGGER.error("Error connecting to supervisor API: %s", err)
        raise ConfigEntryNotReady(f"Error connecting to supervisor API: {err}")

    hass.data[DOMAIN] = {
        CONF_URL: supervisor_url,
        CONF_SUPERVISOR_TOKEN: supervisor_token,
    }

    await hass.config_entries.async_forward_entry_setups(entry, ["sensor"])
    _LOGGER.info("ASCIA integration successfully set up via config entry")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    # If set up from YAML, don't unload data on config entry unload
    if DOMAIN in hass.data and hass.data[DOMAIN].get("setup_from_yaml"):
        return True

    unload_ok = await hass.config_entries.async_unload_platforms(entry, ["sensor"])
    if unload_ok:
        hass.data.pop(DOMAIN)

    return unload_ok
