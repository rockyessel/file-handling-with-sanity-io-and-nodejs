const { createClient } = require('@sanity/client');

const config = {
  projectId: 'l4h1g3vt',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-02-17',
  token: process.env.SANITY_SECRET_TOKEN,
};
const Client = createClient(config);

module.exports = { Client };
