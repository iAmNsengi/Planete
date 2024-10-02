import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-gray-100 p-8">
      <motion.img
        src="https://planete.onrender.com/img/outside(7).JPG"
        alt="Left decorative image"
        className="w-1/4 h-auto object-cover rounded-lg shadow-md"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="w-2/5 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are a passionate team dedicated to creating elegant solutions. Our
          mission is to innovate, inspire, and make a positive impact on the
          world through our work and commitment to excellence.
        </p>
      </motion.div>
      <motion.img
        src="https://planete.onrender.com/img/outside(7).JPG"
        alt="Right decorative image"
        className="w-1/4 h-auto object-cover rounded-lg shadow-md"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default AboutUs;
