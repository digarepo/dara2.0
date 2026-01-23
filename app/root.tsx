import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

export function meta() {
  return [
    { title: "My App" },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
