import Layout from "./components/Layout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  // {
  //   path: "/admin",
  //   element: <Card />,
  // },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
