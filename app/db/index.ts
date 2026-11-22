// app/db/index.ts
import { pool } from './connection';

export async function query<T = any>(sql: string, params?: any[]): Promise<T> {
  const [rows] = await pool.execute(sql, params);
  return rows as T;
}

export async function queryOne<T = any>(
  sql: string,
  params?: any[],
): Promise<T | null> {
  const rows = await query<T[]>(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

export async function execute(sql: string, params?: any[]): Promise<any> {
  const [result] = await pool.execute(sql, params);
  return result;
}

export { pool };
