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

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <Activities />
      <Testimonials />
      <BookingForm />
      <Map />
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
