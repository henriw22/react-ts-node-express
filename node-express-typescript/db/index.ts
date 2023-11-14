import PG from 'pg';

const client = new PG.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
