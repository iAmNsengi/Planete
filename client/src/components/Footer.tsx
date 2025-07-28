import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { theme } from "../utils/theme";

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      className="w-full relative py-16 px-4"
      style={{ backgroundColor: theme.colors.primary[800] }}
    >
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
            <p className="text-sm text-white text-center md:text-left">
              Planete Hotel Rwanda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">ADDRESS</h3>
            <p className="text-sm">Rubavu / Rugerero/ Rugerero</p>
            <p className="text-sm">Kabarora</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">OPENING HOURS</h3>
            <p className="text-sm">Mon - Sun 24/7</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">CONTACT INFO</h3>
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
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              style={{ "--tw-text-opacity": 1 } as React.CSSProperties}
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
          className="text-center text-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © {new Date().getFullYear()} Planete Hotel. All rights reserved.
          Designed by{" "}
          <a
            className="text-white hover:text-yellow-300 transition-colors duration-300 underline"
            href="https://keyypress.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keyy<span className="text-orange-600 font-bold">Press</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
