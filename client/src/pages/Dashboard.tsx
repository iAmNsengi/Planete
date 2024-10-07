import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiFileText, FiSettings } from "react-icons/fi";
import Navbar from "../components/Navbar";

const Dashboard: React.FC = () => {
  interface MessageType {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
    createdAt: string;
  }
  const menuItems = [
    { icon: FiHome, text: "Home" },
    { icon: FiUsers, text: "Users" },
    { icon: FiFileText, text: "Projects" },
    { icon: FiSettings, text: "Settings" },
  ];

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/emails`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      console.log(data);

      setMessages(data.messages);
    };
    fetchMessages();
  }, []);

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
        <hr />
        <table className="w-full">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Time</th>
          </tr>
          {messages.length &&
            messages.map((message: MessageType) => (
              <tr>
                <td>{message.firstname}</td>
                <td>{message.lastname}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>{message.createdAt}</td>
              </tr>
            ))}
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
