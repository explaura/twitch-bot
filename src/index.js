const tmi = require('tmi.js');
const { parse } = require('path');
const { createLogger } = require('bunyan');

const OAUTH_TOKEN = process.env.OAUTH_TOKEN;
const STREAMER_CHANNEL = process.env.STREAMER_CHANNEL;
const HELP_COMMAND = '!help';
const SHOTS_COMMAND = '!shots';

const logger = createLogger({
  name: parse(__filename).name,
  level: process.env.LOG_LEVEL || 'info',
});

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: 'simpmasta-3000',
    password: OAUTH_TOKEN,
  },
  channels: [STREAMER_CHANNEL],
});

client.connect();

client.on('message', async (channel, tags, message, self) => {
  // ignore echoed messages
  if (self) return;

  if (message.toLowerCase() === HELP_COMMAND) {
    try {
      client.say(
        channel,
        `@${tags.username}, use the command !shots to pour ${STREAMER_CHANNEL} a shot`
      );
    } catch (err) {
      logger.err({
        err,
        message: `failed to handle ${HELP_COMMAND} command`,
      });
    }
  } else if (message.toLowerCase() === SHOTS_COMMAND) {
    try {
      // TODO: call microcontroller API to kick off pour process
      client.say(
        channel,
        `@${tags.username}, pouring ${STREAMER_CHANNEL} a shot`
      );
    } catch (err) {
      logger.err({
        err,
        message: `failed to handle ${SHOTS_COMMAND} command`,
      });
    }
  }
});
