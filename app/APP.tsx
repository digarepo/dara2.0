import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage, { action as loginAction } from "~/routes/login";
import DashboardPage from "~/routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction, // connects the POST form submission to the API
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

