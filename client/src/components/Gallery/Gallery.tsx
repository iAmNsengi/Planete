"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight } from "../ui/hero-highlight";
import { theme } from "../../utils/theme";

const images = [
  {
    src: "/images/room1.jpeg",
    title: "Lake View Suite",
    category: "Rooms",
    description: "Luxurious suite with panoramic lake views",
    featured: true,
  },
  {
    src: "/images/image2.jpeg",
    title: "Infinity Pool",
    category: "Amenities",
    description: "Relax in our stunning infinity pool",
    featured: false,
  },
  {
    src: "/images/image3.jpeg",
    title: "Restaurant",
    category: "Dining",
    description: "Fine dining with local and international cuisine",
    featured: true,
  },
  {
    src: "/images/image8.jpeg",
    title: "Birdhouse Interior",
    category: "Rooms",
    description: "Cozy and eco-friendly accommodation",
    featured: false,
  },
  {
    src: "/landing3.JPG",
    title: "Pod Suite",
    category: "Rooms",
    description: "Modern comfort with stunning views",
    featured: true,
  },
  {
    src: "/images/room3.jpeg",
    title: "Sunset Terrace",
    category: "Rooms",
    description: "Perfect spot for evening relaxation",
    featured: false,
  },
  {
    src: "/images/room2.jpeg",
    title: "Birdhouse Interior",
    category: "Rooms",
    description: "Unique design meets comfort",
    featured: false,
  },
  {
    src: "/images/room1.jpeg",
    title: "Pod Suite",
    category: "Rooms",
    description: "Contemporary luxury accommodation",
    featured: true,
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
    <div
      id="gallery"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <Highlight>Gallery</Highlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the beauty and luxury of Planete Hotel through our stunning
            collection of images
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium bg-white text-gray-800 hover:bg-gray-100 shadow-md`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    {image.featured && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-200 mb-3">
                    {image.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2 py-1 rounded-full text-xs"
                      style={{ backgroundColor: theme.colors.primary[800] }}
                    >
                      {image.category}
                    </span>
                  </div>
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
