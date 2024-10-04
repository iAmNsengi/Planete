import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Layout />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
