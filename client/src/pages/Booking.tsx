import React from "react";
import BookingForm from "../components/BookingForm";

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-100" />

      {/* Sparkles effect */}
      <div className="w-full absolute inset-0 h-full">
        <div className="w-full h-full opacity-20">
          {/* Custom sparkles effect */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
