import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { theme } from "../utils/theme";
import {
  FaBinoculars,
  FaHotel,
  FaUtensils,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

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

  const stats = [
    { number: "18", label: "Rooms", icon: FaHotel },
    { number: "5", label: "Star Service", icon: FaStar },
    { number: "24/7", label: "Support", icon: FaPhone },
  ];

  return (
    <div
      id="about"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 lg:py-32 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About
            <Highlight> Us</Highlight>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of Rwanda's beautiful
            landscape
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon
                className="text-4xl mx-auto mb-4"
                style={{ color: theme.colors.primary[800] }}
              />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Planete Hotel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Planete Hotel, we believe in creating an experience that goes
                beyond just a place to stay. Nestled in the heart of Rwanda's
                beautiful landscape, our hotel offers a perfect blend of luxury,
                comfort, and impeccable service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our beautiful terrace with infinity views of the thousand hills
                provides an unparalleled experience. Planete is where everyone
                wants to be, with a location second to none - just a short drive
                to Lake Kivu and 2 minutes away from the Rubavu-Karongi road.
              </p>
            </div>

            <motion.div
              className={`bg-gradient-to-r from-blue-800/90 to-blue-900/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Unique Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaBinoculars className="text-2xl text-cyan-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Terrace Experience
                    </h4>
                    <p className="text-cyan-100">
                      Unique bird singing and sightings with panoramic views
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaUtensils className="text-2xl text-cyan-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Culinary Excellence
                    </h4>
                    <p className="text-cyan-100">
                      International favorites and fusion dishes with African
                      flavors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaHotel className="text-2xl text-cyan-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Accommodation
                    </h4>
                    <p className="text-cyan-100">
                      18 rooms: 15 guest rooms and 3 for tour operators or
                      drivers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <img
                src="/landing2.JPG"
                alt="Planete Hotel"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Experience Luxury
                </h3>
                <p className="text-lg text-gray-200 mb-4">
                  Unforgettable stays in the heart of Rwanda
                </p>
                <div className="flex items-center space-x-4 text-white">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>Rubavu, Rwanda</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-bold text-gray-800">4.9/5</div>
                  <div className="text-sm text-gray-600">Guest Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <a
            href="/booking"
            className="inline-block text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            style={
              {
                backgroundColor: theme.colors.primary[800],
                "--tw-hover-bg-opacity": "0.9",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary[900];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary[800];
            }}
          >
            Book Your Stay Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
