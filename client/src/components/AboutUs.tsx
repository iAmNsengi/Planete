import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { FaBinoculars, FaHotel, FaUtensils } from "react-icons/fa";

const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-12"
        >
          About
          <Highlight className="text-white"> Us</Highlight>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              At Planete Hotel, we believe in creating an experience that goes
              beyond just a place to stay. Nestled in the heart of the city, our
              hotel offers a perfect blend of luxury, comfort, and impeccable
              service.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Beautiful terrace with an infinity unparalleled views of thousand
              hills, Planete is where everyone wants to be. The location is
              second to none, a short drive to Lake Kivu and 2 minutes away from
              the Rubavu-Karongi road.
            </p>

            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Our Unique Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-white">
                  <FaBinoculars className="mr-2" /> Terrace with unique bird
                  singing and sightings
                </li>
                <li className="flex items-center text-white">
                  <FaUtensils className="mr-2" /> International favorites and
                  fusion dishes with African flavors
                </li>
                <li className="flex items-center text-white">
                  <FaHotel className="mr-2" /> 18 rooms: 15 guest rooms and 3
                  for tour operators or drivers
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://planete.onrender.com/img/outside(7).JPG"
              alt="Planete Hotel"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Experience Luxury
              </h3>
              <p className="text-sm text-gray-300">
                Unforgettable stays in the heart of Rwanda
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Book Your Stay Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
