# Twitch Bot

## Overview

A server-side application which listens for bot commands. Currently the bot actions are:
- `!help` - returns a list of bot commands
- `!shots` - send an API request to a server on a microcontroller and pours a shot

## Pre-requisites

### NodeJS & npm
Current versions used: `npm 6.13.4` & `node.js 12.16.1`

Install with [nvm](https://github.com/creationix/nvm)

### Twitch OAuth token
To generate an OAuth token (used for authorising bot to access your Twitch channel), [visit here](https://twitchapps.com/tmi/). 

**Note**: The token value is currently stored in AWS SSM for security (protip: avoid secrets as env vars).
 
## Dependencies
To install NPM dependencies:

```bash
npm install
```

## Linting
To ensure the linting of Typescript files, run:

```bash
npm run lint
```

## Deploying

To build and deploy the service to Heroku, run:
```bash
make package deploy
```

## Running locally

First ensure you have the environment variables populated in `.env` file before running. These can be retrieved from SSM.

To spin up the local service, run:
```bash
node src/twitch/index.js
```
