import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { IconDashboard, IconLogin } from "@tabler/icons-react";
import axios from "axios";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const checkAuthentication = useCallback(async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      const tokenIsValid = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/getUser`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (tokenIsValid) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  }, []);
  const location = useLocation();

  useEffect(() => {
    checkAuthentication();

    // Check if there's a hash in the URL and scroll to the corresponding section
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div
      className={cn(
        "fixed top-3 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent backdrop-blur-sm border-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center gap-3">
          <MenuItem
            setActive={setActive}
            href="/#about"
            active={active}
            item="About"
          />
          <MenuItem
            setActive={setActive}
            href="/#gallery"
            active={active}
            item="Gallery"
          />
          <MenuItem
            setActive={setActive}
            href="/#findUs"
            active={active}
            item="Contact"
          />
          <MenuItem
            setActive={setActive}
            href="/#contact"
            active={active}
            item="Book a Room"
          />
        </div>
        {isAuthenticated ? (
          <MenuItem
            setActive={setActive}
            href="/dashboard"
            active={active}
            item={
              <div className="flex items-center  gap-1">
                <IconDashboard className="text-blue-600" />
                <span>Dashboard</span>
              </div>
            }
          />
        ) : (
          <MenuItem
            setActive={setActive}
            href="/login"
            active={active}
            item={<IconLogin className="text-orange-500 hover:scale-150" />}
            onClick={handleLoginClick}
          />
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
