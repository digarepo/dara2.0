import { dbQuery } from "~/db/mariadb.server";

export async function loader() {
  const result = await dbQuery("SELECT 1 AS connected");
  console.log(result);
  return null;
}

export default function Home() {
  return <h1>MariaDB Connected ✅</h1>;
}
