import { requireRole } from "~/services/auth.server";
import { Role } from "~/constants/roles";

/**
 * Loader – ADMIN only
 */
export async function loader({ request }: { request: Request }) {
  const user = await requireRole(request, [Role.ADMIN]);
  return { user };
}

/**
 * Admin Settings Page
 */
export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Settings ⚙️</h1>

      <section className="space-y-4">
        <div className="p-4 border rounded bg-white">
          <h2 className="font-semibold">System Settings</h2>
          <p className="text-sm text-gray-600">
            Manage application-wide configuration.
          </p>
        </div>

        <div className="p-4 border rounded bg-white">
          <h2 className="font-semibold">User Management</h2>
          <p className="text-sm text-gray-600">
            Control user roles, permissions, and access.
          </p>
        </div>

        <div className="p-4 border rounded bg-white">
          <h2 className="font-semibold">Security</h2>
          <p className="text-sm text-gray-600">
            Password policies, sessions, and authentication rules.
          </p>
        </div>
      </section>
    </div>
  );
}