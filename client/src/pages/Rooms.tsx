import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { PatternOverlay } from "../components/ui/pattern-overlay";
import { FiUsers, FiMaximize2 } from "react-icons/fi";
import { Highlight } from "../components/ui/hero-highlight";

interface Room {
  _id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  amenities: string[];
  images: string[];
  available: boolean;
  featured: boolean;
}

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);
      const data = await response.json();
      if (data.success) {
        setRooms(data.rooms);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="rounded-md h-12 w-12 border-4 border-t-4 border-cyan-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white relative">
      <PatternOverlay />

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
              Our {"  "}
              <Highlight>Rooms & Suites</Highlight>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury and comfort in our carefully designed
              accommodations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No rooms available
              </h3>
              <p className="text-gray-600">
                Please check back later for room availability.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.images?.[0] || "/room1.jpeg"}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    {room.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {room.name}
                        </h3>
                        <p className="text-cyan-600 font-medium">{room.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          ${room.price}
                        </p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{room.description}</p>

                    {/* Room Features */}
                    <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FiUsers size={16} />
                        <span>{room.capacity} Guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMaximize2 size={16} />
                        <span>{room.size}m²</span>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <button
                      onClick={() => navigate(`/booking?room=${room._id}`)}
                      className="w-full py-3 px-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
