import { motion } from "framer-motion";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Card image="https://planete.onrender.com/img/outside(7).JPG" />
      <motion.div
        className="w-2/5 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-neutral-300 mb-4">About Us</h1>
        <p className="text-lg text-neutral-400 leading-relaxed">
          We are a passionate team dedicated to creating elegant solutions. Our
          mission is to innovate, inspire, and make a positive impact on the
          world through our work and commitment to excellence.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
