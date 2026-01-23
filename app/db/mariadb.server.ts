import mariadb from "mariadb";

export const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1221", // change this
  database: "my_app_db",
  port: 3307,
  connectionLimit: 5,
});

export async function dbQuery<T = any>(sql: string, params?: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, params);
    return rows as T;
  } finally {
    if (conn) conn.release();
  }
}
