// app/components/layout/Header.tsx
import { Link } from 'react-router';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">Dara 2.0</div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
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
      </div>
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-2 p-4 border-t">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
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
      )}
    </header>
  );
}
