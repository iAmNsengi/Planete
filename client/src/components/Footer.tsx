import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-cyan-800  relative py-16 px-4">
      <div className="max-w-7xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <img
              src="logo.png"
              alt="Planete Hotel Logo"
              className="w-40 h-auto mb-4 "
            />
            <p className="text-sm text-gray-400 text-center md:text-left">
              Your home away from home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-blue-400 font-bold mb-4 text-lg">ADDRESS</h3>
            <p className="text-sm">Rubavu / Rugerero/ Rugerero</p>
            <p className="text-sm">Kabarora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-blue-400 font-bold mb-4 text-lg">
              OPENING HOURS
            </h3>
            <p className="text-sm">Mon-Sun: 7:00 AM - 11:00 PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-blue-400 font-bold mb-4 text-lg">
              CONTACT INFO
            </h3>
            <p className="text-sm">Phone: +(250) 78-8426737</p>
            <p className="text-sm">Phone: +(250) 78-3584816</p>
            <p className="text-sm">Email: maplanetehotel@gmail.com</p>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-12 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialIcons.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Icon className="text-2xl" />
            </a>
          ))}
        </motion.div>

        <motion.hr
          className="my-8 border-gray-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        <motion.div
          className="text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Planete Hotel. All rights reserved.
          Designed by{" "}
          <a
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            href="https://nsengixp.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            zersquare.dev
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
