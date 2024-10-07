import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import Navbar from "../components/Navbar";

interface MessageType {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
    fetchAbout();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/emails`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAbout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/about`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      setAbout(data.about);
    } catch (error) {
      console.error("Error fetching about:", error);
    }
  };

  const handleUpdateAbout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/about`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ about }),
      });
      if (response.ok) {
        alert('About section updated successfully!');
      } else {
        throw new Error('Failed to update about section');
      }
    } catch (error) {
      console.error("Error updating about:", error);
      alert('Failed to update about section. Please try again.');
    }
  };

  const renderMessages = () => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">Recent Messages</h3>
      {isLoading ? (
        <p className="text-center text-gray-400">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-400">No messages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Message</th>
                <th scope="col" className="px-6 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={message.createdAt} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4 font-medium">#{index + 1}</td>
                  <td className="px-6 py-4">{`${message.firstname} ${message.lastname}`}</td>
                  <td className="px-6 py-4">{message.email}</td>
                  <td className="px-6 py-4">{message.message}</td>
                  <td className="px-6 py-4">{new Date(message.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderAbout = () => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">Update About Section</h3>
      <textarea
        className="w-full bg-gray-700 text-white rounded p-2 mb-4"
        rows={5}
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Enter your about information..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpdateAbout}
      >
        Update About
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
      case "messages":
        return renderMessages();
      case "about":
        return renderAbout();
      default:
        return null;
    }
  };

  const menuItems = [
    { icon: FiHome, text: "Dashboard", section: "dashboard" },
    { icon: FiUser, text: "About", section: "about" },
    { icon: FiMail, text: "Messages", section: "messages" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
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
                <button
                  onClick={() => setActiveSection(item.section)}
                  className={`flex items-center text-lg w-full ${
                    activeSection === item.section ? "text-blue-500" : ""
                  }`}
                >
                  <item.icon className="mr-3" />
                  {item.text}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      <main className="flex-grow p-6">
        <Navbar />
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 mt-8"
        >
          {activeSection === "about" ? "About Section" : "Welcome to Your Dashboard"}
        </motion.h2>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;