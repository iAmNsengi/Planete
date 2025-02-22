"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconDashboard,
  IconLogin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import axios from "axios";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#rooms", label: "Rooms" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#activities", label: "Activities" },
    { href: "/#findUs", label: "Contact" },
    { href: "/#bookARoom", label: "Book Now", isButton: true },
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

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.substring(2));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Planete Hotel"
                className="h-12 w-auto cursor-pointer"
                onClick={() => handleNavigation("/")}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`${
                    item.isButton
                      ? "bg-cyan-800 text-white px-6 py-2 rounded-full hover:bg-cyan-900 transition-colors"
                      : `text-${
                          isScrolled ? "gray-800" : "white"
                        } hover:text-cyan-800 transition-colors`
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={() => handleNavigation("/dashboard")}
                  className="flex items-center space-x-1 text-cyan-800"
                >
                  <IconDashboard size={20} />
                  <span>Dashboard</span>
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation("/login")}
                  className="text-cyan-800"
                >
                  <IconLogin size={24} />
                </button>
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
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className={`block w-full text-left px-4 py-2 ${
                      item.isButton
                        ? "bg-cyan-800 text-white rounded-full text-center"
                        : "text-gray-800 hover:text-cyan-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {isAuthenticated ? (
                  <button
                    onClick={() => handleNavigation("/dashboard")}
                    className="flex items-center space-x-2 px-4 py-2 text-cyan-800 w-full"
                  >
                    <IconDashboard size={20} />
                    <span>Dashboard</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="flex items-center space-x-2 px-4 py-2 text-cyan-800 w-full"
                  >
                    <IconLogin size={20} />
                    <span>Login</span>
                  </button>
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
