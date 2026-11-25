import type { LoaderFunctionArgs } from "react-router";
import { requireRole } from "~/services/auth.server";
import { Role } from "~/constants/roles";
import { getConnection } from "~/db/connection";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireRole(request, [Role.ADMIN]);

  const conn = await getConnection();
  const [users] = await conn.query(
    "SELECT id, name, email FROM users"
  );
  conn.release();

  return Response.json(users);
}

export default function AdminUsers() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <p>User management will go here.</p>
    </div>
  );
}
