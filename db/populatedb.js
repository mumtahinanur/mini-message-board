import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255) NOT NULL,
  text VARCHAR(255) NOT NULL,
  added_at TIMESTAMP DEFAULT NOW()
);
`;

async function main() {
  const connectionString = process.argv[2];
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
