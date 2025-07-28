import React from "react";
import Navbar from "./Navbar";
import SocialMediaSidebar from "./SocialMediaSidebar";
import { PatternOverlay } from "./ui/pattern-overlay";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
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
