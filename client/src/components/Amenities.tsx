import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";

import {
  FaWifi,
  FaUtensils,
  FaParking,
  FaConciergeBell,
  FaBusinessTime,
  FaDog,
  FaCoffee,
  FaKey,
  FaClock,
} from "react-icons/fa";

const Amenities: React.FC = () => {
  return (
    <div
      id="amenities"
      className="relative min-h-screen bg-cyan-800 py-20 px-4 sm:px-6 lg:px-8 lg:py-40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 pb-20">
          Our Amenities
          <Highlight className="text-cyan-800 bg-white"> & Services</Highlight>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          {[
            {
              icon: <FaWifi />,
              title: "Free Wi-Fi",
              description: "Stay connected with high-speed internet.",
            },
            {
              icon: <FaUtensils />,
              title: "On-site Restaurant",
              description: "Enjoy delicious meals at our restaurant.",
            },
            {
              icon: <FaParking />,
              title: "Free Parking",
              description: "Convenient parking for all guests.",
            },
            {
              icon: <FaConciergeBell />,
              title: "24/7 Concierge",
              description: "We're here to assist you anytime.",
            },
            {
              icon: <FaBusinessTime />,
              title: "Business Center",
              description: "Fully equipped for your business needs.",
            },
            {
              icon: <FaDog />,
              title: "Pet-Friendly",
              description: "Bring your furry friends along for the stay.",
            },
            {
              icon: <FaCoffee />,
              title: "Complimentary Coffee",
              description: "Start your day with a fresh cup of coffee.",
            },
            {
              icon: <FaKey />,
              title: "Secure Access",
              description: "Feel safe with key card access to your room.",
            },
            {
              icon: <FaClock />,
              title: "Flexible Check-in/Check-out",
              description: "Convenient times to suit your travel plans.",
            },
          ].map((amenity, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer hover:scale-110  shadow-lg p-6 flex flex-col items-center transition-transform transform"
            >
              <div className="text-4xl text-cyan-800 mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
              <p className="text-center">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
