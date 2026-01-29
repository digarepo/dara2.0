import { getConnection } from './connection';

async function test() {
  const conn = await getConnection();
  const rows = await conn.query('SELECT NOW() AS now');
  console.log(rows);
  conn.release();
}

test();
