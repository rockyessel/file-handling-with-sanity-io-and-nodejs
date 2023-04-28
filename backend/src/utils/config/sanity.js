import { createClient } from '@sanity/client';

const config = {
  projectId: 'ut3w84xx',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-02-17',
  token: process.env.SANITY_SECRET_TOKEN,
};
export const Client = createClient(config);
