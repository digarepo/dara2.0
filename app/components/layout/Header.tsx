// app/components/layout/Header.tsx
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="text-xl font-bold">Dara 2.0</div>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>{' '}
        {/* <-- ይህ መኖር አለበት */}
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
    </header>
  );
}
