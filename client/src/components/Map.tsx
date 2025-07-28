import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { Highlight } from "./ui/hero-highlight";
import { theme } from "../utils/theme";

const Map: React.FC = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      content: "Rubavu / Rugerero / Kabarora",
      description: "Rwanda",
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+(250) 78-3584816",
      description: "+(250) 78-8426737",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "maplanetehotel@gmail.com",
      description: "24/7 Support",
    },
    {
      icon: FaClock,
      title: "Check-in/out",
      content: "Check-in: 2:00 PM",
      description: "Check-out: 11:00 AM",
    },
  ];

  return (
    <motion.div
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      id="findUs"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
            Find Us {"  "}
            <Highlight>Here</Highlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Rwanda's beautiful landscape, we're easy to
            find and ready to welcome you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="w-full lg:w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <info.icon
                        className="text-2xl"
                        style={{ color: theme.colors.primary[800] }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/250785512860"
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:maplanetehotel@gmail.com"
                    className="flex items-center justify-center space-x-2 text-white py-3 px-4 rounded-lg transition-colors"
                    style={
                      {
                        backgroundColor: theme.colors.primary[800],
                        "--tw-hover-bg-opacity": "0.9",
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        theme.colors.primary[900];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        theme.colors.primary[800];
                    }}
                  >
                    <FaEnvelope className="text-lg" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 bg-red-600 text-white">
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-cyan-100">
                  Rubavu, Western Province, Rwanda
                </p>
              </div>
              <div className="h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d310.9191818294759!2d29.30858253802569!3d-1.6942915926406843!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2srw!4v1728817321543!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-transparent border border-gray-200 text-black p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're located just 2 minutes from the Rubavu-Karongi road and a
              short drive to Lake Kivu. Our team is ready to welcome you with
              warm Rwandan hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Your Stay
              </a>
              <a
                href="https://wa.me/250785512860"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <FaWhatsapp />
                <span>Chat with Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Map;
