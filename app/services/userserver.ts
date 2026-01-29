import { getConnection } from '~/db/connection';

export const getUsers = async () => {
  const conn = await getConnection();
  const rows = await conn.query('SELECT * FROM users');
  conn.release();
  return rows;
};
