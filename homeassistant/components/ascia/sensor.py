"""Support for ASCIA sensors."""

import json
import logging
from typing import Any

import aiohttp

from homeassistant.components.sensor import SensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_URL
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType

from .const import CONF_SUPERVISOR_TOKEN, DOMAIN

REQUIRED_ADDONS = [
    {
        "slug": "core_mosquitto",
        "name": "Mosquitto Broker",
        "options": {"log_level": "info"},
    },
    {
        "slug": "d5369777_music_assistant",
        "name": "Music Assistant Server",
        "options": {},
    },
    {"slug": "core_ssh", "name": "Terminal & SSH", "options": {}},
    {"slug": "a0d7b954_tailscale", "name": "Tailscale", "options": {}},
    {"slug": "core_samba", "name": "Samba share", "options": {}},
]

_LOGGER = logging.getLogger(__name__)


async def async_setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    async_add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """Set up the sensor platform from YAML configuration."""
    if discovery_info is None:
        return

    # Get data from hass.data set up in async_setup
    if DOMAIN not in hass.data:
        _LOGGER.error("ASCIA integration not initialized")
        return

    domain_data = hass.data[DOMAIN]
    supervisor_url = domain_data.get(CONF_URL)
    supervisor_token = domain_data.get(CONF_SUPERVISOR_TOKEN)

    if not supervisor_url or not supervisor_token:
        _LOGGER.error("Missing required ASCIA configuration")
        return

    # Create and add sensor entity
    async_add_entities([AddonManagerSensor(hass, supervisor_url, supervisor_token)])

    # Automatically install required addons if configured via YAML
    await auto_install_addons(hass, supervisor_url, supervisor_token)


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback
) -> None:
    """Set up ASCIA sensor based on a config entry."""
    # Get data from hass.data set up in async_setup_entry
    domain_data = hass.data.get(DOMAIN, {})
    supervisor_url = domain_data.get(CONF_URL)
    supervisor_token = domain_data.get(CONF_SUPERVISOR_TOKEN)

    if not supervisor_url or not supervisor_token:
        _LOGGER.error("Missing required ASCIA configuration in config entry")
        return

    # Create and add sensor entity
    async_add_entities([AddonManagerSensor(hass, supervisor_url, supervisor_token)])

    # Only auto-install if not already set up from YAML
    if not domain_data.get("setup_from_yaml", False):
        await auto_install_addons(hass, supervisor_url, supervisor_token)


async def auto_install_addons(
    hass: HomeAssistant, supervisor_url: str, supervisor_token: str
) -> None:
    """Automatically install required addons."""
    _LOGGER.info("Checking for required addons")

    sensor = AddonManagerSensor(hass, supervisor_url, supervisor_token)
    installed_addons = await sensor._fetch_installed_addons()
    installed_slugs = [addon.get("slug") for addon in installed_addons]

    for addon in REQUIRED_ADDONS:
        if addon["slug"] not in installed_slugs:
            _LOGGER.info("Installing required addon: %s", addon["name"])
            success = await sensor.async_install_addon(addon["slug"])
            if success:
                _LOGGER.info("Successfully installed addon: %s", addon["name"])
            else:
                _LOGGER.error("Failed to install addon: %s", addon["name"])


class AddonManagerSensor(SensorEntity):
    """Representation of an Add-on Manager sensor."""

    def __init__(
        self, hass: HomeAssistant, supervisor_url: str, supervisor_token: str
    ) -> None:
        """Initialize the sensor."""
        self.hass = hass
        self._supervisor_url = supervisor_url
        self._headers = {
            "Authorization": f"Bearer {supervisor_token}",
            "Content-Type": "application/json",
        }
        self._attr_name = "Add-on Manager"
        self._attr_unique_id = f"{DOMAIN}_addon_manager"
        self._attr_native_value = 0
        self._attr_extra_state_attributes = {"addons": []}

    async def async_update(self) -> None:
        """Fetch new state data for the sensor."""
        try:
            addons = await self._fetch_installed_addons()
            self._attr_native_value = len(addons)
            self._attr_extra_state_attributes = {"addons": addons}
        except (aiohttp.ClientError, json.JSONDecodeError, ValueError) as error:
            _LOGGER.error("Error updating addon manager: %s", error)

    async def _fetch_installed_addons(self) -> list[dict[str, Any]]:
        """Fetch installed add-ons asynchronously."""
        session = async_get_clientsession(self.hass)
        try:
            async with session.get(
                f"{self._supervisor_url}/addons",
                headers=self._headers,
            ) as response:
                if response.status == 200:
                    data = await response.json()
                    return data.get("data", {}).get("addons", [])
                _LOGGER.error("Failed to fetch addons: %s", response.status)
        except aiohttp.ClientError as error:
            _LOGGER.error("Error accessing supervisor API: %s", error)
        except json.JSONDecodeError as error:
            _LOGGER.error("Error parsing supervisor API response: %s", error)
        return []

    async def async_install_addon(self, slug: str) -> bool:
        """Install an add-on asynchronously."""
        session = async_get_clientsession(self.hass)
        try:
            async with session.post(
                f"{self._supervisor_url}/store/addons/{slug}/install",
                headers=self._headers,
            ) as response:
                return response.status == 200
        except aiohttp.ClientError as error:
            _LOGGER.error("Error installing addon %s: %s", slug, error)
            return False
