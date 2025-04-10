import logging

import voluptuous as vol

from homeassistant import config_entries

from .const import DOMAIN  # Import the domain constant

_LOGGER = logging.getLogger(__name__)


class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for AsciaHomeSense."""

    VERSION = 1
    CONNECTION_CLASS = config_entries.CONN_CLASS_LOCAL_PUSH

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        errors = {}
        if user_input is not None:
            # TODO: Validate the user input
            # if not valid:
            #     errors["base"] = "invalid_input"
            # else:
            return self.async_create_entry(title="AsciaHomeSense", data=user_input)

        # Show the form to the user
        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({vol.Required("host"): str}),
            errors=errors,
        )

    async def async_step_import(self, user_input):
        """Handle import from config file."""
        # This implementation is optional but useful for YAML based config
        return await self.async_step_user(user_input)
