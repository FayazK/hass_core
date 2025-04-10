# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.
YYYY-MM-DD HH:MM:SS - Log of updates made will be appended as footnotes to the end of this file.

*

## Project Goal

*
## Integration Name

AsciaHomeSense

## Overview

The Home Assistant Addon Manager with Advanced Notifications is a comprehensive integration that provides automated addon management and a sophisticated notification system for Home Assistant installations. This integration runs in the background to ensure critical addons are always installed and provides a powerful notification framework to keep users informed of important events.

## Target Users

- Home Assistant administrators who want to ensure critical addons are always installed
- Users who need reliable notifications for important home events
- Developers building Home Assistant configurations for less technical users
- Home automation enthusiasts who want to improve the stability of their system

## Features

### Addon Management System

#### Automatic Addon Installation

- Maintain a configuration list of required addons
- Automatically check for missing addons on Home Assistant boot
- Install missing addons without user intervention
- Periodically verify addon status and repair as needed

#### Addon Management API

- Expose REST API endpoints for addon status information
- Provide websocket events for real-time addon status updates
- Support frontend interactions for monitoring and manual operations

#### Addon Installation Logging

- Maintain detailed logs of installation attempts
- Record success/failure status for each addon
- Log detailed error information for failed installations
- Expose log data through API for frontend display

#### Addon Configuration

- Support default configuration options for each addon
- Allow overriding default configurations
- Support the following required addons with default configurations:
  - Mosquitto Broker (core_mosquitto)
  - Music Assistant Server (d5369777_music_assistant)
  - Terminal & SSH (core_ssh)
  - Tailscale (a0d7b954_tailscale)
  - Samba share (core_samba)

### Advanced Notification System

#### Notification Types

- Automatic pop-up notifications for critical events
- Persistent notifications that remain until resolved
- Background notifications for less critical information
- Event-driven notifications with configurable triggers

#### Notification Management

- Dedicated notification history/log section
- Status panel showing home state and major events
- Sidebar listing with filtering, search, and date range options
- Detailed logging of all notification events

#### Interactive Notifications

- Pop-up notifications for events like intercom calls
- Configurable actions for notifications (similar to automations)
- User-defined response options for interactive events
- Ability to snooze or dismiss notifications

#### Notification API

- Expose websocket events for real-time notification delivery
- REST API endpoints for notification history and management
- Support frontend interactions for notification configuration


## Domain

asciahomesense

## Version

1.0.0

## Description

This integration provides support for AsciaHomeSense devices.

## Architecture

The AsciaHomeSense integration consists of the following files:

*   `__init__.py`: Marks the directory as a Python package and handles the setup of the integration.
*   `config_flow.py`: Handles the configuration of the integration through the UI.
*   `const.py`: Defines constants used throughout the integration.
*   `coordinator.py`: Handles data fetching and updates for the integration.
*   `sensor.py`, `switch.py`, `climate.py`, `device_tracker.py`: Define the entities for the integration.
*   `manifest.json`: Contains metadata about the integration.
*   `services.yaml`: Defines custom services for the integration.

YYYY-MM-DD HH:MM:SS - Added initial context from asciahomesense_architecture.md and manifest.json

## Key Features

*   

## Overall Architecture

*