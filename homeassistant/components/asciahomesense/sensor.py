from homeassistant.components.sensor import SensorEntity
from homeassistant.const import DEVICE_CLASS_TEMPERATURE, TEMP_CELSIUS
from homeassistant.core import callback

from .const import DOMAIN


async def async_setup_entry(hass, config_entry, async_add_entities):
    """Set up the sensor platform."""
    # TODO Add sensors based on the configuration entry
    async_add_entities([AsciaHomeSenseTemperatureSensor()], True)


class AsciaHomeSenseTemperatureSensor(SensorEntity):
    """Representation of a AsciaHomeSense Temperature sensor."""

    _attr_name = "AsciaHomeSense Temperature"
    _attr_device_class = DEVICE_CLASS_TEMPERATURE
    _attr_native_unit_of_measurement = TEMP_CELSIUS

    @property
    def native_value(self):
        """Return the native value of the sensor."""
        # TODO: Fetch the actual temperature value from the device or service
        return 25.5

