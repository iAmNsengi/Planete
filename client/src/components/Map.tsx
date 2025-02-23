import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Highlight } from "./ui/hero-highlight";

const Map: React.FC = () => {
  return (
    <motion.div
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      id="findUs"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight">
          Find Us {"  "}
          <Highlight className="bg-cyan-800 text-white">Here</Highlight>
          <br />
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          <motion.div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-cyan-800 text-xl" />
                  <p className="text-gray-600">Rubavu / Rugerero / Kabarora</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-cyan-800 text-xl" />
                  <p className="text-gray-600">
                    +(250) 78-3584816 Or +(250) 78-8426737
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-cyan-800 text-xl" />
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
