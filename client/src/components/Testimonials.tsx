"use client";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/testimonial1.jpg",
    text: "The most amazing hotel experience I've had. The views are breathtaking and the service is impeccable.",
  },
  {
    name: "Michael Chen",
    role: "Tourist",
    image: "/testimonial2.jpg",
    text: "Perfect location, wonderful staff, and the rooms are absolutely beautiful. Can't wait to come back!",
  },
  {
    name: "Emma Williams",
    role: "Honeymoon Guest",
    image: "/testimonial3.jpg",
    text: "Our honeymoon was magical thanks to Planete Hotel. The attention to detail is outstanding.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          What Our Guests Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-white p-6 rounded-xl shadow-xl">
                <CardItem translateZ={50}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                </CardItem>
                <CardItem translateZ={60}>
                  <p className="text-gray-600 mb-4 text-center">
                    {testimonial.text}
                  </p>
                </CardItem>
                <CardItem translateZ={70}>
                  <div className="text-center">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
