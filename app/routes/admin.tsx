import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import { requireRole } from "~/services/auth.server";
import { Role } from "~/constants/roles";

/**
 * Protect ALL /admin routes (ADMIN only)
 */
export async function loader({ request }: { request: Request }) {
  await requireRole(request, [Role.ADMIN]);
  return null;
}

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}