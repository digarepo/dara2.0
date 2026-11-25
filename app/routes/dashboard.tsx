import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import { requireRole } from "~/services/auth.server";
import { ROLES } from "~/constants/roles";

/**
 * Protects ALL /dashboard routes
 * - User must be logged in
 * - Role must be USER or ADMIN
 */
export async function loader({ request }: { request: Request }) {
  await requireRole(request, [ROLES.USER, ROLES.ADMIN]);
  return null;
}

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}