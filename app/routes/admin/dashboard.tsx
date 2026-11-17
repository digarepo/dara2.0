import Sidebar from '~/components/layout/Sidebar';

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 grow">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Manage your content here.</p>
      </div>
    </div>
  );
}
