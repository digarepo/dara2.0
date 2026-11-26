// app/components/layout/Sidebar.tsx
import { Link } from 'react-router';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-4 border-b w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Admin Menu
      </button>
      <aside
        className={`${isOpen ? 'block' : 'hidden'} md:block w-64 p-4 border-r min-h-screen bg-gray-50`}
      >
        <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/admin" className="block p-2 hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/blogs"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Manage Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/admin/portfolio"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Manage Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/media"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Media Library
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
