import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SocialMediaSidebar from "./SocialMediaSidebar";
import { PatternOverlay } from "./ui/pattern-overlay";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white relative min-h-screen">
      <PatternOverlay />
      <SocialMediaSidebar />
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default PageLayout;
