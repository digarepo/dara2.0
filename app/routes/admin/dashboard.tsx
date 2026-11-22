// app/routes/admin/dashboard.tsx
import { type LoaderFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const { userId, roleId } = await requireAuth(request);
  return { userId, roleId };
}

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Blogs</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Portfolio</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li>New blog post created</li>
          <li>Portfolio item updated</li>
          <li>New user registered</li>
        </ul>
      </div>
    </div>
  );
}
