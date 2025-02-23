import { motion } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import { SparklesCore } from "./ui/sparkles";
import { BackgroundBeams } from "./ui/background-beams";

const activities = [
  {
    title: "Lake Kivu Boat Tours",
    description:
      "Experience the beauty of Lake Kivu with our guided boat tours.",
    image: "/images/image14.jpeg",
    duration: "2-3 hours",
    price: "$50/person",
  },
  {
    title: "Coffee Experience",
    description:
      "Visit local coffee plantations and learn about Rwanda's coffee culture.",
    image: "/images/image14.jpeg",
    duration: "Half day",
    price: "$35/person",
  },
  {
    title: "Cultural Village Visit",
    description: "Immerse yourself in traditional Rwandan culture and customs.",
    image: "/images/image14.jpeg",
    duration: "4 hours",
    price: "$40/person",
  },
  {
    title: "Hiking Adventures",
    description: "Guided hiking tours through the beautiful hills of Rubavu.",
    image: "/images/image14.jpeg",
    duration: "2-6 hours",
    price: "From $30/person",
  },
];

const Activities = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-16"
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
        <h2 className="text-center text-white text-4xl md:text-5xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight">
          Explore Our{"   "}
          <Highlight className="bg-cyan-800 text-white"> Activities</Highlight>
          <br />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden mx-auto w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-300 mb-4">{activity.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{activity.duration}</span>
                  <span>{activity.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="bg-cyan-800 text-white px-8 py-3 rounded-full hover:bg-cyan-900 transition-colors">
            Book an Activity
          </button>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Activities;
