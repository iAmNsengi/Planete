import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { PatternOverlay } from "../components/ui/pattern-overlay";
import { Highlight } from "../components/ui/hero-highlight";
import { FiWifi, FiCoffee, FiUmbrella } from "react-icons/fi";
import { FaCar, FaConciergeBell, FaUtensils } from "react-icons/fa";

interface Settings {
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const Services: React.FC = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/settings`);
      const data = await response.json();
      if (data.success) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultServices = [
    {
      title: "Free WiFi",
      description: "High-speed internet access throughout the hotel",
      icon: FiWifi,
    },
    {
      title: "Restaurant",
      description: "Fine dining with local and international cuisine",
      icon: FaUtensils,
    },
    {
      title: "Fitness Center",
      description: "24/7 gym with modern equipment",
      icon: FiUmbrella,
    },
    {
      title: "Concierge Service",
      description: "Personal assistance for all your needs",
      icon: FaConciergeBell,
    },
    {
      title: "Transportation",
      description: "Airport shuttle and local transportation",
      icon: FaCar,
    },
    {
      title: "Room Service",
      description: "24/7 in-room dining service",
      icon: FiCoffee,
    },
  ];

  const services =
    settings?.services && settings.services.length > 0
      ? settings.services
      : defaultServices;

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
              <Highlight>Services & Amenities</Highlight>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury amenities and exceptional services designed for
              your comfort
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
                ? (() => {
                    const iconMap: {
                      [key: string]: React.ComponentType<{ size?: number }>;
                    } = {
                      FiWifi,
                      FiCoffee,
                      FaCar,
                      FiUmbrella,
                      FaUtensils,
                      FaConciergeBell,
                    };
                    return (
                      iconMap[service.icon as keyof typeof iconMap] || FiWifi
                    );
                  })()
                : FiWifi;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-cyan-600 mb-4">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
