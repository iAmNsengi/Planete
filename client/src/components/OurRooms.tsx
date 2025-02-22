import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const OurRooms: React.FC = () => {
  const rooms = [
    {
      imgSrc: "/birdhouse.jpg",
      title: "Birdhouse",
      description:
        "Our Birdhouses highlight the benefits of tiny house living with a goal of maximizing efficiency of space while minimizing our impact on the environment.",
      price: "$90/night",
      features: ["Lake View", "Private Balcony", "Eco-friendly Design"],
    },
    {
      imgSrc: "/pod.jpg",
      title: "Pod",
      description:
        "The expansive Lake views are projected into a very comfortable and protected room space, through sweeping, floor-to-ceiling sliding doors and a shower with a view.",
      price: "$100/night",
      features: ["Panoramic Views", "Luxury Shower", "Modern Design"],
    },
    {
      imgSrc: "/bungalow.jpg",
      title: "Bungalow",
      description:
        "Consisting of a bedroom and living room (which can host an extra king bed), the Bungalow is our most spacious unit designed for honeymooners or groups of friends.",
      price: "$150/night",
      features: [
        "Spacious Living Area",
        "Perfect for Groups",
        "Premium Amenities",
      ],
    },
  ];

  return (
    <div
      id="rooms"
      className="relative min-h-screen bg-[#f7f7f7] py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
          Our
          <Highlight className="bg-cyan-800 text-white"> Rooms</Highlight>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map((room, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-white rounded-xl">
                <CardItem translateZ={100}>
                  <img
                    src={room.imgSrc}
                    alt={room.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </CardItem>
                <div className="p-6">
                  <CardItem translateZ={50}>
                    <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                  </CardItem>
                  <CardItem translateZ={60}>
                    <p className="text-gray-600 mb-4">{room.description}</p>
                  </CardItem>
                  <CardItem translateZ={80}>
                    <ul className="space-y-2 mb-4">
                      {room.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-cyan-800 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                  <CardItem translateZ={100}>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-cyan-800">
                        {room.price}
                      </span>
                      <button className="bg-cyan-800 text-white px-6 py-2 rounded-full hover:bg-cyan-900 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurRooms;
