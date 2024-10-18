import React from "react";
import { motion } from "framer-motion";

const OurRooms: React.FC = () => {
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
      id="rooms"
      className="relative min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8 lg:py-40"
    >
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
          Our Rooms
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              imgSrc: "https://planete.onrender.com/img/room%20(5).JPG",
              title: "Deluxe Room",
              description: "Enjoy luxury and comfort in our deluxe rooms.",
              price: "$90/night",
            },
            {
              imgSrc: "images/room1.jpeg",
              title: "Standard Room",
              description: "A cozy stay with all essential amenities.",
              price: "$100/night",
            },
            {
              imgSrc: "images/room2.jpeg",
              title: "Suite",
              description: "Experience elegance in our spacious suites.",
              price: "$80/night",
            },
          ].map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={room.imgSrc}
                alt={room.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-700 mb-2">{room.description}</p>
                <p className="text-lg font-semibold text-blue-600">
                  {room.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="#bookARoom"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition duration-300"
          >
            Book Your Room Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurRooms;
