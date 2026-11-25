// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { LinksFunction, MetaFunction } from 'react-router';
import stylesheet from './app.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Dara 2.0 - Media Company' },
    {
      name: 'description',
      content:
        'Dara 2.0 is a leading media company offering video production, photography, and digital marketing services.',
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children} {/* Header እና Footer በMainLayout ውስጥ ስለሚገኙ እዚህ አያስፈልጉም */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
