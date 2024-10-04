import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default Layout;
