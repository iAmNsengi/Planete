import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { SparklesCore } from "./ui/sparkles";
import { theme } from "../utils/theme";
import {
  FaShip,
  FaCoffee,
  FaUsers,
  FaMountain,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";

const activities = [
  {
    title: "Lake Kivu Boat Tours",
    description:
      "Experience the beauty of Lake Kivu with our guided boat tours. Discover hidden coves and enjoy breathtaking sunset views.",
    image:
      "https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    duration: "2-3 hours",
    price: "$50",
    icon: FaShip,
    difficulty: "Easy",
    groupSize: "2-8 people",
    highlights: ["Sunset Views", "Wildlife Spotting", "Local Guide"],
  },
  {
    title: "Coffee Experience",
    description:
      "Visit local coffee plantations and learn about Rwanda's rich coffee culture. From bean to cup, experience the full journey.",
    image:
      "https://images.unsplash.com/photo-1556742526-795a8eac090e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "Half day",
    price: "$35",
    icon: FaCoffee,
    difficulty: "Easy",
    groupSize: "2-6 people",
    highlights: ["Coffee Tasting", "Plantation Tour", "Local Culture"],
  },
  {
    title: "Cultural Village Visit",
    description:
      "Immerse yourself in traditional Rwandan culture and customs. Experience authentic local life and traditions.",
    image:
      "https://images.unsplash.com/photo-1551004089-fc5da212b9d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VsdHVyYWwlMjB2aXNpdCUyMHJ3YW5kYXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "4 hours",
    price: "$40",
    icon: FaUsers,
    difficulty: "Easy",
    groupSize: "2-10 people",
    highlights: ["Traditional Dance", "Local Crafts", "Cultural Exchange"],
  },
  {
    title: "Hiking Adventures",
    description:
      "Guided hiking tours through the beautiful hills of Rubavu. Experience nature at its finest with expert guides.",
    image:
      "https://images.unsplash.com/photo-1750750575621-97dc193a07b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpa2luZyUyMHJ3YW5kYXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "2-6 hours",
    price: "From $30",
    icon: FaMountain,
    difficulty: "Moderate",
    groupSize: "2-6 people",
    highlights: ["Scenic Trails", "Wildlife", "Photography"],
  },
];

const Activities = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md py-16"
      id="activities"
    >
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-gray-800 text-4xl md:text-5xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
            Explore Our{"   "}
            <Highlight> Activities</Highlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty of Rwanda through our curated experiences and
            adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pt-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue/20 hover:border-blue-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full bg-yellow-600">
                  <activity.icon className="text-white text-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  <span className="textfont-semibold">
                    {activity.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-black mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-black">
                    <FaClock className="mr-2 text-blue-400" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-black">
                    <FaDollarSign className="mr-2 text-blue-400" />
                    <span className="text-sm">{activity.price}</span>
                  </div>
                  <div className="flex items-center text-black">
                    <FaUsers className="mr-2 text-blue-400" />
                    <span className="text-sm">{activity.groupSize}</span>
                  </div>
                  <div className="flex items-center text-black">
                    <activity.icon className="mr-2 text-blue-400" />
                    <span className="text-sm">{activity.difficulty}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-black font-semibold mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-full text-xs bg-red-400 text-white"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full text-white py-3 rounded-lg transition-colors duration-300 transform hover:scale-105 bg-red-600">
                  Book This Activity
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className="text-white px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
            style={
              {
                backgroundColor: theme.colors.primary[800],
                "--tw-hover-bg-opacity": "0.9",
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary[900];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary[800];
            }}
          >
            View All Activities
          </button>
        </motion.div>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Activities;
