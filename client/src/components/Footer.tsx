import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black bg-grid-white/[0.2] relative  py-20 px-4">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-6xl mx-auto text-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-blue-400 font-bold mb-2">ADDRESS</h3>
            <p>Rubavu / Rugerero/ Rugerero</p>
            <p>Kabarora</p>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold mb-2">OPENING HOURS</h3>
            <p>Mon-Sun: 7:00 AM - 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-blue-400 font-bold mb-2">CONTACT INFO</h3>
            <p>Phone: +(250) 78-8426737</p>
            <p>Phone: +(250) 78-3584816</p>
            <p>Email: maplanetehotel@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            aria-label="Google Plus"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-google-plus-g text-2xl"></i>
          </a>
        </motion.div>
        <hr />
        <motion.div
          className="text-center mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2024 Planete Hotel. All rights reserved. Designed by{" "}
          <a
            className="text-blue-400"
            href="https://nsengixp.onrender.com"
            target="_blank"
          >
            zersquare.dev
          </a>{" "}
          .
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
