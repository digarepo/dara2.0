import { requireRole } from "~/services/auth.server";
import { ROLES } from "~/constants/roles";

export async function loader({ request }: { request: Request }) {
  await requireRole(request, [ROLES.ADMIN]);
  return null;
}

export default function AdminPage() {
  return <h1>Admin Panel </h1>;
}