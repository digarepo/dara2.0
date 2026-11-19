// db/index.ts
import { pool } from './connection';

/**
 * Executes a SQL query and returns the results.
 * @param sql - The SQL query string
 * @param params - Optional parameters for the query
 * @returns The query results
 */
export async function query<T = any>(sql: string, params?: any[]): Promise<T> {
  const [rows] = await pool.execute(sql, params);
  return rows as T;
}

/**
 * Executes a SQL query that returns a single row.
 * @param sql - The SQL query string
 * @param params - Optional parameters for the query
 * @returns The single row or null
 */
export async function queryOne<T = any>(
  sql: string,
  params?: any[],
): Promise<T | null> {
  const rows = await query<T[]>(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

/**
 * Executes a SQL query that modifies data (INSERT, UPDATE, DELETE).
 * @param sql - The SQL query string
 * @param params - Optional parameters for the query
 * @returns The result of the operation
 */
export async function execute(sql: string, params?: any[]): Promise<any> {
  const [result] = await pool.execute(sql, params);
  return result;
}

/**
 * Executes a transaction with multiple queries.
 * @param callback - A function that receives a connection and performs queries
 */
export async function transaction<T>(
  callback: (conn: any) => Promise<T>,
): Promise<T> {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const result = await callback(conn);
    await conn.commit();
    return result;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

export { pool };
