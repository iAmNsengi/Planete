"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Highlight } from "./ui/hero-highlight";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/testimonial1.jpg",
    text: "The most amazing hotel experience I've had. The views are breathtaking and the service is impeccable.",
  },
  {
    name: "Michael Chen",
    role: "Tourist",
    image: "/testimonial2.jpg",
    text: "Perfect location, wonderful staff, and the rooms are absolutely beautiful. Can't wait to come back!",
  },
  {
    name: "Emma Williams",
    role: "Honeymoon Guest",
    image: "/testimonial3.jpg",
    text: "Our honeymoon was magical thanks to Planete Hotel. The attention to detail is outstanding.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight">
          What Our {"  "}
          <Highlight className="bg-cyan-800 text-white">Guests Say</Highlight>
          <br />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {testimonials.map((testimonial, index) => (
            <CardContainer key={index}>
              <CardBody className="bg-white p-6 rounded-xl shadow-xl">
                <CardItem translateZ={50}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                </CardItem>
                <CardItem translateZ={60}>
                  <p className="text-gray-600 mb-4 text-center">
                    {testimonial.text}
                  </p>
                </CardItem>
                <CardItem translateZ={70}>
                  <div className="text-center">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
