import { getConnection } from "~/db/connection.server";
import { hashPassword } from "./auth.server";

export async function createUser(
  name: string,
  email: string,
  password: string,
  role_id: number
) {
  const conn = await getConnection();

  try {
    const password_hash = await hashPassword(password);

    const result = await conn.query(
      "INSERT INTO users (name, email, password_hash, role_id) VALUES (?, ?, ?, ?)",
      [name, email, password_hash, role_id]
    );

    return result;
  } finally {
    conn.release();
  }
}

export async function findUserByEmail(email: string) {
  const conn = await getConnection();

  try {
    const rows = await conn.query(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    return rows[0] ?? null;
  } finally {
    conn.release();
  }
}
