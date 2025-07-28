import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery/Gallery";
import Navbar from "./Navbar";
import Activities from "./Activities";
import Testimonials from "./Testimonials";
import BookingForm from "./BookingForm";
import Map from "./Map";
import Footer from "./Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import OurRooms from "./OurRooms";
import { PatternOverlay } from "./ui/pattern-overlay";
import SocialMediaSidebar from "./SocialMediaSidebar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white relative">
      <PatternOverlay />
      <SocialMediaSidebar />
      <Navbar />
      <Hero />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <AboutUs />
      </div>
      <div className="bg-gradient-to-b from-gray-50 to-cyan-900">
        <OurRooms />
      </div>
      <div className="bg-white">
        <Activities />
      </div>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Gallery />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-100">
        <Testimonials />
      </div>
      <div className="bg-gradient-to-b from-gray-100 to-cyan-900">
        <BookingForm />
      </div>
      <div className="bg-white">
        <Map />
      </div>
      <FloatingWhatsApp
        accountName="Planete Hotel"
        phoneNumber="250785512860"
        statusMessage="Online"
        chatMessage="Welcome to Planete Hotel! How can we help you?"
        avatar="/logo_bg.jpeg"
      />
      <Footer />
    </div>
  );
};

export default Layout;
