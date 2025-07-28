"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconDashboard,
  IconLogin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import axios from "axios";
import { theme } from "../utils/theme";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Rooms" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/booking", label: "Book Now", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkAuthentication = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/getUser`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsAuthenticated(response.data.success);
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-lg`}
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Planete Hotel"
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
              <Link to="/">
                <p className="text-blue-600 text-md font-bold">
                  PLANETE <span className="text-red-500">HOTEL</span>
                </p>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${
                    item.isButton
                      ? "text-white px-6 py-2 rounded-full transition-colors"
                      : `text-gray-800 transition-colors`
                  }`}
                  style={
                    {
                      backgroundColor: item.isButton
                        ? theme.colors.primary[800]
                        : "transparent",
                      color: item.isButton
                        ? "white"
                        : theme.colors.neutral[800],
                      "--tw-hover-bg-opacity": item.isButton ? "0.9" : "1",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    if (item.isButton) {
                      e.currentTarget.style.backgroundColor =
                        theme.colors.primary[900];
                    } else {
                      e.currentTarget.style.color = theme.colors.primary[800];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (item.isButton) {
                      e.currentTarget.style.backgroundColor =
                        theme.colors.primary[800];
                    } else {
                      e.currentTarget.style.color = theme.colors.neutral[800];
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 transition-colors"
                  style={{ color: theme.colors.primary[800] }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.colors.primary[900];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.primary[800];
                  }}
                >
                  <IconDashboard size={20} />
                  <span>Dashboard</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <IconX size={24} />
                ) : (
                  <IconMenu2 size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block w-full text-left px-4 py-2 transition-colors ${
                      item.isButton
                        ? "text-white rounded-full text-center"
                        : "text-gray-800"
                    }`}
                    style={{
                      backgroundColor: item.isButton
                        ? theme.colors.primary[800]
                        : "transparent",
                      color: item.isButton
                        ? "white"
                        : theme.colors.neutral[800],
                    }}
                    onMouseEnter={(e) => {
                      if (item.isButton) {
                        e.currentTarget.style.backgroundColor =
                          theme.colors.primary[900];
                      } else {
                        e.currentTarget.style.color = theme.colors.primary[800];
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.isButton) {
                        e.currentTarget.style.backgroundColor =
                          theme.colors.primary[800];
                      } else {
                        e.currentTarget.style.color = theme.colors.neutral[800];
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                {isAuthenticated ? (
                  <Link
                    to="dashboard"
                    className="flex items-center space-x-2 px-4 py-2 w-full transition-colors"
                    style={{ color: theme.colors.primary[800] }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.primary[900];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.primary[800];
                    }}
                  >
                    <IconDashboard size={20} />
                    <span>Dashboard</span>
                  </Link>
                ) : (
                  <Link
                    to="login"
                    className="flex items-center space-x-2 px-4 py-2 w-full transition-colors"
                    style={{ color: theme.colors.primary[800] }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.primary[900];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.primary[800];
                    }}
                  >
                    <IconLogin size={20} />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
