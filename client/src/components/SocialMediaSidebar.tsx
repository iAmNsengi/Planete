import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaSidebar: React.FC = () => {
  const socialIcons = [
    {
      Icon: FaFacebookF,
      href: "#",
      label: "Facebook",
      color: "blue-600",
    },
    {
      Icon: FaTwitter,
      href: "#",
      label: "Twitter",
      color: "blue-400",
    },
    {
      Icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "pink-500",
    },
    {
      Icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
      color: "blue-700",
    },
    {
      Icon: FaWhatsapp,
      href: "#",
      label: "WhatsApp",
      color: "green-500",
    },
    {
      Icon: FaYoutube,
      href: "#",
      label: "YouTube",
      color: "red-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed right-0 top-1/3 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col space-y-4 p-2 bg-white/90 backdrop-blur-sm rounded-l-lg shadow-lg border-l border-t border-b border-gray-200">
        {socialIcons.map(({ Icon, href, label, color }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            className={`p-3 bg-${color} rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-${color} hover:scale-110`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Icon className="text-xl text-${color}" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMediaSidebar;
