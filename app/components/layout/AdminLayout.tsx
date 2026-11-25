// app/components/layout/AdminLayout.tsx
import Sidebar from '~/components/layout/Sidebar';
import { Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grow p-8">
        <Outlet />
      </main>
    </div>
  );
}
