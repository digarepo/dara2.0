import { requireRole } from "~/services/auth.server";
import { Role } from "~/constants/roles";

/**
 * ADMIN dashboard home
 * URL: /admin
 */
export async function loader({ request }: { request: Request }) {
  await requireRole(request, [Role.ADMIN]);
  return null;
}

export default function AdminIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard </h1>
      <p className="text-gray-600 mt-2">
        Welcome to the admin control panel.
      </p>
    </div>
  );
}