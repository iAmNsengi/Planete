"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="hero-tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
          Planete Hotel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto px-4">
          Experience luxury and comfort in the heart of Rwanda's thousand hills
        </p>
        <motion.button
          className="bg-cyan-800 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Stay
        </motion.button>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
