"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight } from "../ui/hero-highlight";

const images = [
  {
    src: "/images/room1.jpeg",
    title: "Lake View Suite",
    category: "Rooms",
  },
  {
    src: "/images/image2.jpeg",
    title: "Infinity Pool",
    category: "Amenities",
  },
  {
    src: "/images/image3.jpeg",
    title: "Restaurant",
    category: "Dining",
  },

  {
    src: "/images/image8.jpeg",
    title: "Birdhouse Interior",
    category: "Rooms",
  },
  {
    src: "/landing3.JPG",
    title: "Pod Suite",
    category: "Rooms",
  },
  {
    src: "/images/room3.jpeg",
    title: "Sunset Terrace",
    category: "Rooms",
  },
  {
    src: "/images/room2.jpeg",
    title: "Birdhouse Interior",
    category: "Rooms",
  },
  {
    src: "/images/room1.jpeg",
    title: "Pod Suite",
    category: "Rooms",
  },
];

const categories = ["All", ...new Set(images.map((img) => img.category))];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div id="gallery" className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our <Highlight className="bg-cyan-800 text-white">Gallery</Highlight>
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-cyan-800 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-10 right-0 text-white text-xl"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
