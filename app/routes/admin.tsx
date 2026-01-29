import { Outlet, redirect } from "react-router";
import Navbar from "~/components/Navbar";


function requireAdmin() {
  const userRole = "USER"; // replace with session
  if (userRole !== "ADMIN") throw redirect("/dashboard");
}

export default function AdminLayout() {
  requireAdmin();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet /> {/* renders nested admin routes */}
      </main>
    </div>
  );
}