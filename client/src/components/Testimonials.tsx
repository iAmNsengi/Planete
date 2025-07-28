"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Highlight } from "./ui/hero-highlight";
import { SparklesCore } from "./ui/sparkles";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/images/image14.jpeg",
    text: "The most amazing hotel experience I've had. The views are breathtaking and the service is impeccable. The staff went above and beyond to make our stay memorable.",
    rating: 5,
    location: "New York, USA",
    stayDate: "March 2024",
  },
  {
    name: "Michael Chen",
    role: "Tourist",
    image: "/images/image14.jpeg",
    text: "Perfect location, wonderful staff, and the rooms are absolutely beautiful. Can't wait to come back! The terrace views are simply unforgettable.",
    rating: 5,
    location: "Toronto, Canada",
    stayDate: "February 2024",
  },
  {
    name: "Emma Williams",
    role: "Honeymoon Guest",
    image: "/images/image14.jpeg",
    text: "Our honeymoon was magical thanks to Planete Hotel. The attention to detail is outstanding. The romantic atmosphere and luxury amenities exceeded our expectations.",
    rating: 5,
    location: "London, UK",
    stayDate: "January 2024",
  },
  {
    name: "David Rodriguez",
    role: "Adventure Seeker",
    image: "/images/image14.jpeg",
    text: "The activities and tours offered by the hotel were incredible. The hiking adventures and boat tours on Lake Kivu were highlights of our trip.",
    rating: 5,
    location: "Madrid, Spain",
    stayDate: "December 2023",
  },
  {
    name: "Lisa Thompson",
    role: "Family Traveler",
    image: "/images/image14.jpeg",
    text: "Traveling with kids was a breeze here. The staff was incredibly accommodating and the facilities were perfect for families. Highly recommend!",
    rating: 5,
    location: "Sydney, Australia",
    stayDate: "November 2023",
  },
  {
    name: "James Wilson",
    role: "Solo Traveler",
    image: "/images/image14.jpeg",
    text: "As a solo traveler, I felt completely safe and welcome. The coffee experience tour was a highlight, and the local guides were incredibly knowledgeable.",
    rating: 5,
    location: "Chicago, USA",
    stayDate: "October 2023",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#0891b2"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
            What Our {"  "}
            <Highlight className="bg-cyan-800 text-white">Guests Say</Highlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why travelers choose Planete Hotel for their unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {testimonials.map((testimonial, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <CardItem translateZ={50} className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                  </div>
                </CardItem>
                
                <CardItem translateZ={60} className="mb-6">
                  <div className="relative">
                    <FaQuoteLeft className="text-4xl text-cyan-200 mb-4" />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>
                </CardItem>
                
                <CardItem translateZ={70}>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <p className="text-xs text-gray-400">{testimonial.stayDate}</p>
                      </div>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Guests</h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Experience the same level of excellence that our guests rave about. 
              Book your stay today and create memories that will last a lifetime.
            </p>
            <button className="bg-white text-cyan-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
