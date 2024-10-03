import { motion } from "framer-motion";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Card image="https://planete.onrender.com/img/outside(7).JPG" />
      <motion.div
        className="w-2/5 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-white dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About Us
          <br />
        </h2>
        <p className="text-lg text-neutral-400 leading-relaxed text-left px-4">
          At Planete Hotel, we believe in creating an experience that goes
          beyond just a place to stay. Nestled in the heart of the city, our
          hotel offers a perfect blend of luxury, comfort, and impeccable
          service. Whether you're visiting for business or leisure, our elegant
          rooms, world-class amenities, and warm hospitality promise to make
          your stay truly unforgettable.
          <br />
          Our dedicated staff is here to ensure that your every need is met,
          making you feel at home from the moment you arrive. Discover the best
          of the city while enjoying the serene ambiance of our hotel. At
          Planete Hotel, your satisfaction is our priority, and we look forward
          to welcoming you to a world of sophistication and relaxation.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
