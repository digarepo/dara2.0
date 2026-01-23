import { Outlet } from "react-router";
import { requireUser } from "~/services/auth.server";

export async function loader({ request }: { request: Request }) {
  await requireUser(request);
  return null;
}

export default function DashboardLayout() {
  return <Outlet />;
}
