import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { SparklesCore } from "./ui/sparkles";
import { BackgroundBeams } from "./ui/background-beams";
import { FaShip, FaCoffee, FaUsers, FaMountain, FaClock, FaDollarSign } from "react-icons/fa";

const activities = [
  {
    title: "Lake Kivu Boat Tours",
    description:
      "Experience the beauty of Lake Kivu with our guided boat tours. Discover hidden coves and enjoy breathtaking sunset views.",
    image: "/images/image14.jpeg",
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
    image: "/images/image14.jpeg",
    duration: "Half day",
    price: "$35",
    icon: FaCoffee,
    difficulty: "Easy",
    groupSize: "2-6 people",
    highlights: ["Coffee Tasting", "Plantation Tour", "Local Culture"],
  },
  {
    title: "Cultural Village Visit",
    description: "Immerse yourself in traditional Rwandan culture and customs. Experience authentic local life and traditions.",
    image: "/images/image14.jpeg",
    duration: "4 hours",
    price: "$40",
    icon: FaUsers,
    difficulty: "Easy",
    groupSize: "2-10 people",
    highlights: ["Traditional Dance", "Local Crafts", "Cultural Exchange"],
  },
  {
    title: "Hiking Adventures",
    description: "Guided hiking tours through the beautiful hills of Rubavu. Experience nature at its finest with expert guides.",
    image: "/images/image14.jpeg",
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
      className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center overflow-hidden rounded-md py-16"
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
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
            Explore Our{"   "}
            <Highlight className="bg-cyan-800 text-white"> Activities</Highlight>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the beauty of Rwanda through our curated experiences and adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pt-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-cyan-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <activity.icon className="text-white text-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {activity.difficulty}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{activity.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <FaClock className="mr-2 text-cyan-400" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaDollarSign className="mr-2 text-cyan-400" />
                    <span className="text-sm">{activity.price}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaUsers className="mr-2 text-cyan-400" />
                    <span className="text-sm">{activity.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <activity.icon className="mr-2 text-cyan-400" />
                    <span className="text-sm">{activity.difficulty}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-800/30 text-cyan-200 px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-cyan-800 hover:bg-cyan-900 text-white py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
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
          <button className="bg-cyan-800 hover:bg-cyan-900 text-white px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold">
            View All Activities
          </button>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Activities;
