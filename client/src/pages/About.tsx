import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { PatternOverlay } from "../components/ui/pattern-overlay";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

interface Settings {
  hotelName: string;
  about: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const About: React.FC = () => {
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
    <div className="bg-gradient-to-b from-gray-50 to-white relative">
      <PatternOverlay />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About {settings?.hotelName || "Planete Hotel"}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover luxury, comfort, and exceptional service in the heart of
              Rwanda
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  {settings?.about ||
                    "Welcome to Planete Hotel, your perfect getaway in Rwanda. We pride ourselves on providing exceptional service and creating memorable experiences for our guests."}
                </p>
                <p className="mb-6">
                  Located in the heart of Kigali, our hotel combines modern
                  luxury with traditional Rwandan hospitality. Every detail has
                  been carefully crafted to ensure your comfort and
                  satisfaction.
                </p>
                <p>
                  From our spacious rooms to our world-class amenities, we
                  strive to exceed your expectations and make your stay truly
                  unforgettable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/landing1.JPG"
                alt="Hotel Exterior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Experience Excellence
                </h3>
                <p className="text-gray-600">
                  Award-winning service since 2020
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional experiences through our
              core values
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, ensuring the highest quality experience for our guests.",
                icon: "⭐",
              },
              {
                title: "Hospitality",
                description:
                  "Warm, welcoming, and genuine hospitality that makes every guest feel at home.",
                icon: "🏠",
              },
              {
                title: "Sustainability",
                description:
                  "Committed to environmental responsibility and sustainable practices for a better future.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiMapPin,
                title: "Address",
                content: settings?.contact?.address || "Kigali, Rwanda",
                link: "#",
              },
              {
                icon: FiPhone,
                title: "Phone",
                content: settings?.contact?.phone || "+250 785 512 860",
                link: `tel:${settings?.contact?.phone || "+250 785 512 860"}`,
              },
              {
                icon: FiMail,
                title: "Email",
                content: settings?.contact?.email || "info@planetehotel.com",
                link: `mailto:${
                  settings?.contact?.email || "info@planetehotel.com"
                }`,
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-cyan-600 mb-4">
                  <contact.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <a
                  href={contact.link}
                  className="text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  {contact.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
