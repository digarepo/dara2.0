import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1221",
  database: "dara_db",
  port: 3307, // or 3307 if you changed it
  connectionLimit: 5,
});

export async function getConnection() {
  return pool.getConnection();
}

