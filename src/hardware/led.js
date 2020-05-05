const fetch = require('node-fetch');

const SHOT_BOT_URL = process.env.SHOT_BOT_URL;

const toggleLed = async (token) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${SHOT_BOT_URL}/hardware/led`, request);
};

module.exports = toggleLed;
