"""Config flow for AsciaHomeSense integration."""
import logging
from typing import Any

from homeassistant.config_entries import ConfigFlow
from homeassistant.data_entry_flow import FlowResult

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

class AsciaHomeSenseConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for AsciaHomeSense."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        # Check if already configured
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()

        if user_input is not None:
            _LOGGER.info("Creating AsciaHomeSense config entry")
            return self.async_create_entry(title="AsciaHomeSense", data={})

        _LOGGER.info("Showing AsciaHomeSense configuration form (no input required)")
        # Show form with no fields, just confirmation
        return self.async_show_form(step_id="user")
