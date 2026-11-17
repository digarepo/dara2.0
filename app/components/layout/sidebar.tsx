import { Link } from 'react-router';

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 border-r min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/admin" className="hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/blogs" className="hover:text-blue-500">
            Manage Blogs
          </Link>
        </li>
        <li>
          <Link to="/admin/portfolio" className="hover:text-blue-500">
            Manage Portfolio
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:text-blue-500">
            Manage Users
          </Link>
        </li>
      </ul>
    </aside>
  );
}
