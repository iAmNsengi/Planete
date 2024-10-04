import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutUs />
      <Gallery />
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default Layout;
