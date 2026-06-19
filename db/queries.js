import pool from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added_at DESC"
  );
  return rows;
}

export async function getMessageById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [id]
  );
  return rows[0];
}

export async function insertMessage(user, text) {
  await pool.query(
    "INSERT INTO messages (author, text) VALUES ($1, $2)",
    [user, text]
  );
}
