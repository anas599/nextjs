import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://postgres:walkman@localhost:5432/nextjs',
});

export default client;
