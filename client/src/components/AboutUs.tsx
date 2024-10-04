import { motion } from "framer-motion";
import Card from "./Card";
import { Highlight } from "./ui/hero-highlight";

const AboutUs = () => {
  return (
    <div
      id={"about"}
      className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col lg:flex-row items-center justify-center py-12 px-4 md:px-3 lg:px-32"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        className="w-full md:w-3/4 lg:w-2/5 text-center md:text-left mb-8 md:mb-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-white dark:from-neutral-600 dark:to-white text-4xl sm:text-5xl lg:text-6xl font-sans py-4 md:py-6 relative z-20 font-bold tracking-tight"
        >
          About
          <Highlight className="text-black dark:text-white"> Us</Highlight>
        </motion.h1>
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mt-4">
          At Planete Hotel, we believe in creating an experience that goes
          beyond just a place to stay. Nestled in the heart of the city, our
          hotel offers a perfect blend of luxury, comfort, and impeccable
          service. Whether you're visiting for business or leisure, our elegant
          rooms, world-class amenities, and warm hospitality promise to make
          your stay truly unforgettable.
        </p>
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mt-4">
          Our dedicated staff is here to ensure that your every need is met,
          making you feel at home from the moment you arrive. Discover the best
          of the city while enjoying the serene ambiance of our hotel. At
          Planete Hotel, your satisfaction is our priority, and we look forward
          to welcoming you to a world of sophistication and relaxation.
        </p>
      </motion.div>

      <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center items-center">
        <Card image="https://planete.onrender.com/img/outside(7).JPG" />
      </div>
    </div>
  );
};

export default AboutUs;
