import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "./ui/background-lines";
import { FlipWords } from "./ui/flip-words";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const navigateToBookRoom = useCallback(() => {
    navigate("/#contact");
    setTimeout(() => {
      const contactSection = document.getElementById("bookARoom");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate]);

  const images = [
    "https://planete.onrender.com/img/outside(7).JPG",
    "https://planete.onrender.com/img/outside%20(4).JPG",
    "https://planete.onrender.com/img/room%20(5).JPG",
  ];
  const words = ["Hotel", "Restaurant", "Night Club"];

  return (
    <ImagesSlider images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <BackgroundLines className="flex items-center justify-center w-screen flex-col px-2">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-white dark:from-neutral-500 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Planete <FlipWords words={words} />
            <br />
          </h2>
          <p className="max-w-xl px-7 mt-5 lg:mt-1 mx-auto text-sm md:text-lg text-neutral-200 mb-16 dark:text-neutral-400 text-center">
            At Planete Hotel, we believe in creating an experience that goes
            beyond just a place to stay.
          </p>
        </BackgroundLines>
        <Button
          borderRadius="2.75rem"
          className="bg-transparent z-50 dark:bg-slate-900 text-white dark:text-white border-neutral-800 dark:border-slate-800"
          onClick={navigateToBookRoom}
        >
          Book A Room
        </Button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Landing;
