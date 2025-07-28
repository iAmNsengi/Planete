import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import PageLayout from "./components/PageLayout";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/getUser`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    return (
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    );
  }
  return isAuthenticated ? <>{children}</> : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "about",
        element: (
          <PageLayout>
            <About />
          </PageLayout>
        ),
      },
      {
        path: "rooms",
        element: (
          <PageLayout>
            <Rooms />
          </PageLayout>
        ),
      },
      {
        path: "services",
        element: (
          <PageLayout>
            <Services />
          </PageLayout>
        ),
      },
      {
        path: "gallery",
        element: (
          <PageLayout>
            <Gallery />
          </PageLayout>
        ),
      },
      {
        path: "contact",
        element: (
          <PageLayout>
            <Contact />
          </PageLayout>
        ),
      },
      {
        path: "booking",
        element: (
          <PageLayout>
            <Booking />
          </PageLayout>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <AuthChecker>
            <Dashboard />
          </AuthChecker>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
