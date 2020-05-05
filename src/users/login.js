const fetch = require('node-fetch');

const SHOT_BOT_URL = process.env.SHOT_BOT_URL;
const SHOT_BOT_EMAIL = process.env.SHOT_BOT_EMAIL;
const SHOT_BOT_PASSWORD = process.env.SHOT_BOT_PASSWORD;

const login = async () => {
  const payload = {
    email: SHOT_BOT_EMAIL,
    password: SHOT_BOT_PASSWORD,
  };

  const request = {
    host: SHOT_BOT_URL,
    path: '/users/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(SHOT_BOT_URL, request);
  const body = await response.text();

  console.log('response body: ', JSON.stringify(body));

  return body;
};

module.exports = login;
