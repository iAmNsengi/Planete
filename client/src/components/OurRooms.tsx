import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaBed, FaUsers, FaWifi, FaCoffee, FaParking, FaShower } from "react-icons/fa";

const OurRooms: React.FC = () => {
  const rooms = [
    {
      imgSrc: "/images/image14.jpeg",
      title: "Birdhouse",
      subtitle: "Nature's Sanctuary",
      description:
        "Our Birdhouses highlight the benefits of tiny house living with a goal of maximizing efficiency of space while minimizing our impact on the environment.",
      price: "$90",
      originalPrice: "$120",
      features: ["Lake View", "Private Balcony", "Eco-friendly Design"],
      amenities: [FaBed, FaWifi, FaCoffee],
      maxGuests: 2,
      size: "25m²",
      popular: false,
    },
    {
      imgSrc: "/landing3.JPG",
      title: "Pod",
      subtitle: "Modern Comfort",
      description:
        "The expansive Lake views are projected into a very comfortable and protected room space, through sweeping, floor-to-ceiling sliding doors and a shower with a view.",
      price: "$100",
      originalPrice: "$140",
      features: ["Panoramic Views", "Luxury Shower", "Modern Design"],
      amenities: [FaBed, FaWifi, FaShower, FaParking],
      maxGuests: 2,
      size: "30m²",
      popular: true,
    },
    {
      imgSrc: "/images/image13.jpeg",
      title: "Bungalow",
      subtitle: "Spacious Luxury",
      description:
        "Consisting of a bedroom and living room (which can host an extra king bed), the Bungalow is our most spacious unit designed for honeymooners or groups of friends.",
      price: "$150",
      originalPrice: "$200",
      features: ["Spacious Living Area", "Perfect for Groups", "Premium Amenities"],
      amenities: [FaBed, FaUsers, FaWifi, FaCoffee, FaParking, FaShower],
      maxGuests: 4,
      size: "45m²",
      popular: false,
    },
  ];

  return (
    <div
      id="rooms"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-900"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our
            <Highlight className="bg-white text-cyan-800"> Rooms</Highlight>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience comfort and luxury in our carefully designed accommodations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardItem translateZ={100} className="relative">
                  <img
                    src={room.imgSrc}
                    alt={room.title}
                    className="w-full h-64 object-cover"
                  />
                  {room.popular && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-2xl font-bold text-cyan-800">{room.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{room.originalPrice}</span>
                  </div>
                </CardItem>
                
                <div className="p-6">
                  <CardItem translateZ={50}>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{room.title}</h3>
                      <p className="text-cyan-600 font-medium">{room.subtitle}</p>
                    </div>
                  </CardItem>
                  
                  <CardItem translateZ={60}>
                    <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                  </CardItem>
                  
                  <CardItem translateZ={70}>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaUsers className="mr-1" />
                        {room.maxGuests} guests
                      </span>
                      <span>{room.size}</span>
                    </div>
                  </CardItem>
                  
                  <CardItem translateZ={80}>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((Icon, idx) => (
                          <div key={idx} className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs">
                            <Icon className="mr-1 text-cyan-600" />
                            <span className="text-gray-600">{Icon.name.replace('Fa', '')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardItem>
                  
                  <CardItem translateZ={90}>
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                  
                  <CardItem translateZ={100}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-cyan-800">{room.price}</span>
                        <span className="text-sm text-gray-500">/night</span>
                      </div>
                      <button className="bg-cyan-800 hover:bg-cyan-900 text-white px-6 py-3 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-lg">
                        Book Now
                      </button>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/rooms"
            className="inline-block bg-white text-cyan-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Rooms
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurRooms;
