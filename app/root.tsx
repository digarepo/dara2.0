import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { LinksFunction } from 'react-router';
import stylesheet from './app.css?url';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">{children}</main>{' '}
        {/* 'flex-grow' ወደ 'grow' ተቀይሯል */}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
