import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
