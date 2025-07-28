"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import HeroSlideshow from "./ui/hero-slideshow";
import { theme } from "../utils/theme";

const Hero = () => {
  const heroImages = ["/landing1.JPG", "/landing2.JPG", "/landing3.JPG"];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeroSlideshow images={heroImages} interval={5000}>
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Planete Hotel
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
            Experience luxury and tranquility in the heart of Rwanda's thousand
            hills
          </p>
          <div className="flex gap-4">
            <motion.button
              className="bg-blue-800 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-900 transition-colors"
              style={{ backgroundColor: theme.colors.primary[800] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("bookARoom")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Your Stay
            </motion.button>
            <motion.button
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("rooms")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Rooms
            </motion.button>
          </div>
        </motion.div>
      </HeroSlideshow>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
