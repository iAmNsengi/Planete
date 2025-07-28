"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Highlight } from "./ui/hero-highlight";
import { SparklesCore } from "./ui/sparkles";
import {
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  location: string;
  stayDate: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/images/image14.jpeg",
    text: "The most amazing hotel experience I've had. The views are breathtaking and the service is impeccable. The staff went above and beyond to make our stay memorable.",
    rating: 5,
    location: "New York, USA",
    stayDate: "March 2024",
    highlight: "Breathtaking Views",
  },

  {
    name: "Emma Williams",
    role: "Honeymoon Guest",
    image: "/images/image14.jpeg",
    text: "Our honeymoon was magical thanks to Planete Hotel. The attention to detail is outstanding. The romantic atmosphere and luxury amenities exceeded our expectations.",
    rating: 5,
    location: "London, UK",
    stayDate: "January 2024",
    highlight: "Magical Experience",
  },

  {
    name: "Lisa Thompson",
    role: "Family Traveler",
    image: "/images/image14.jpeg",
    text: "Traveling with kids was a breeze here. The staff was incredibly accommodating and the facilities were perfect for families. Highly recommend!",
    rating: 4,
    location: "Sydney, Australia",
    stayDate: "November 2023",
    highlight: "Family Friendly",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Moving border effect */}
        <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-red-500 via-blue-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 animate-spin-slow" />
        </div>

        {/* Main card content */}
        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90">
          {/* Quote icon with animation */}
          <motion.div
            className="absolute top-6 right-6 text-4xl text-cyan-200 opacity-60"
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaQuoteLeft />
          </motion.div>

          {/* Rating stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <FaStar className="text-yellow-400 text-lg" />
              </motion.div>
            ))}
          </div>

          {/* Testimonial text */}
          <motion.p
            className="text-gray-700 leading-relaxed text-lg mb-6 relative z-10"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            "{testimonial.text}"
          </motion.p>

          {/* Highlight badge */}
          <motion.div
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {testimonial.highlight}
          </motion.div>

          {/* User info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                <FaMapMarkerAlt className="text-cyan-500" />
                <span>{testimonial.location}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <FaCalendarAlt className="text-cyan-500" />
                <span>{testimonial.stayDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-20 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50 to-white" />

      {/* Sparkles effect */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="testimonials-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#0891b2"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight mb-6">
            What Our {"  "}
            <Highlight className="bg-red-600">Guests Say</Highlight>
          </h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover why travelers choose Planete Hotel for their unforgettable
            experiences
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-red-600 backdrop-blur-sm" />

            {/* Moving gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

            <div className="relative p-12">
              <motion.h3
                className="text-3xl font-bold text-white mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Join Our Happy Guests
              </motion.h3>
              <p className="text-white mb-8 max-w-2xl mx-auto text-lg">
                Experience the same level of excellence that our guests rave
                about. Book your stay today and create memories that will last a
                lifetime.
              </p>
              <motion.button
                className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("bookARoom")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Your Stay
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
