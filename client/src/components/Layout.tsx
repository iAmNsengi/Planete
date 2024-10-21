import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Map from "./Map";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import OurRooms from "./OurRooms";


const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <AboutUs />
      <Gallery />
      <OurRooms />
      <Map />
      <ContactUs />
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
