import Card from "./components/Card";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Landing />
        <Card />
      </div>
    ),
  },
  {
    path: "/admin",
    element: <Card />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
