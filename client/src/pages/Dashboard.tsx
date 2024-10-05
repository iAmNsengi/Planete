import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiFileText, FiSettings } from "react-icons/fi";
import Navbar from "../components/Navbar";

const Dashboard: React.FC = () => {
  const menuItems = [
    { icon: FiHome, text: "Home" },
    { icon: FiUsers, text: "Users" },
    { icon: FiFileText, text: "Projects" },
    { icon: FiSettings, text: "Settings" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 bg-black text-white p-6"
      >
        <h1 className="text-2xl font-bold mb-8">Planete Hotel</h1>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-4"
              >
                <a href="#" className="flex items-center text-lg">
                  <item.icon className="mr-3" />
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      {/* Main content */}
      <main className="flex-grow p-6 py-24">
        <Navbar />
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Welcome to Your Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Overview Card */}

          {/* User Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-400 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4">User Statistics</h3>
            <p className="text-gray-600">Total Users: 1,234</p>
            <p className="text-gray-600">Active Users: 789</p>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
