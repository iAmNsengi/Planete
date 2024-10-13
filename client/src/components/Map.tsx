import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Map: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      id="findUs"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Find Us Here
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div className="w-full lg:w-1/2" variants={infoVariants}>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  <p className="text-gray-600">Rubavu / Rugerero / Kabarora</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-500 text-xl" />
                  <p className="text-gray-600">+(250) 78-8426737</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <p className="text-gray-600">maplanetehotel@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2 relative">
            <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d310.9191818294759!2d29.30858253802569!3d-1.6942915926406843!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1728817321543!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Map;
