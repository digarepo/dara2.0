import { json } from "@react-router/node";
import { getConnection } from "~/db/connection.server";
import { requireUser, requireRole } from "~/services/auth.server";

export async function loader({ request }: { request: Request }) {
  const user = await requireUser(request);
  requireRole(user, "ADMIN");

  const conn = await getConnection();
  const users = await conn.query(
    "SELECT id, name, email FROM users"
  );
  conn.release();

  return json(users);
}

export default function AdminUsers() {
  return <h1>Admin Users</h1>;
}