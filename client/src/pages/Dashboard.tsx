import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiFileText, FiSettings } from "react-icons/fi";

const Dashboard: React.FC = () => {
  const menuItems = [
    { icon: FiHome, text: "Home" },
    { icon: FiUsers, text: "Users" },
    { icon: FiFileText, text: "Projects" },
    { icon: FiSettings, text: "Settings" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 bg-blue-600 text-white p-6"
      >
        <h1 className="text-2xl font-bold mb-8">Project Dashboard</h1>
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
      <main className="flex-grow p-6">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-600">Active Projects: 12</p>
            <p className="text-gray-600">Completed Projects: 24</p>
          </motion.div>

          {/* User Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4">User Statistics</h3>
            <p className="text-gray-600">Total Users: 1,234</p>
            <p className="text-gray-600">Active Users: 789</p>
          </motion.div>

          {/* Recent Activity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="text-gray-600">
              <li className="mb-2">New project created: "Project X"</li>
              <li className="mb-2">User "John Doe" joined the team</li>
              <li>3 tasks completed in "Project Y"</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
