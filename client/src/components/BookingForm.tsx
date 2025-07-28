/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";
import {
  FaUser,
  FaCalendar,
  FaBed,
  FaCheck,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const rooms = [
  {
    id: "birdhouse",
    name: "Birdhouse",
    type: "Standard",
    image: "/landing3.JPG",
    price: 90,
    description: "Perfect for nature lovers with panoramic views",
    capacity: 2,
    size: 25,
    amenities: ["WiFi", "Coffee Maker", "Private Balcony"],
    features: ["Lake View", "Eco-friendly Design", "Nature Experience"],
    available: true,
    featured: false,
  },
  {
    id: "pod",
    name: "Pod",
    type: "Deluxe",
    image: "/landing3.JPG",
    price: 100,
    description: "Modern comfort with lake views",
    capacity: 2,
    size: 30,
    amenities: ["WiFi", "Shower", "Parking", "Coffee Maker"],
    features: ["Panoramic Views", "Luxury Shower", "Modern Design"],
    available: true,
    featured: true,
  },
  {
    id: "bungalow",
    name: "Bungalow",
    type: "Suite",
    image: "/landing3.JPG",
    price: 150,
    description: "Spacious suite perfect for families",
    capacity: 4,
    size: 45,
    amenities: ["WiFi", "Coffee Maker", "Parking", "Shower", "Living Area"],
    features: [
      "Spacious Living Area",
      "Perfect for Groups",
      "Premium Amenities",
    ],
    available: true,
    featured: false,
  },
];

const BookingForm = () => {
  const [step, setStep] = useState<
    "details" | "dates" | "rooms" | "confirmation"
  >("details");

  const steps = [
    { id: "details", title: "Personal Info", number: 1, icon: FaUser },
    { id: "dates", title: "Select Dates", number: 2, icon: FaCalendar },
    { id: "rooms", title: "Choose Room", number: 3, icon: FaBed },
    { id: "confirmation", title: "Confirm", number: 4, icon: FaCheck },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    adults: 1,
    children: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-12 px-4 overflow-x-hidden">
      <div className="flex items-center space-x-4 md:space-x-8">
        {steps.map((s, index) => (
          <div key={s.id} className="flex flex-col items-center min-w-fit">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  steps.findIndex((x) => x.id === step) >= index
                    ? "bg-cyan-800 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <s.icon className="text-lg" />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 md:w-32 h-1 transition-all duration-300 ${
                    steps.findIndex((x) => x.id === step) > index
                      ? "bg-cyan-800"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
            <span className="text-xs md:text-sm mt-3 text-gray-600 whitespace-nowrap font-medium">
              {s.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const validateCurrentStep = () => {
    const currentStepFields = {
      details: ["firstName", "lastName", "email", "phone"],
      dates: ["checkIn", "checkOut"],
      rooms: ["roomType", "adults"],
      confirmation: [],
    };

    const fieldsToValidate = currentStepFields[step];
    const newErrors: Record<string, string> = {};

    fieldsToValidate.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    });

    // Special validation for dates
    if (step === "dates" && formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (checkIn < today) {
        newErrors.checkIn = "Check-in date cannot be in the past";
      }
      if (checkOut <= checkIn) {
        newErrors.checkOut = "Check-out date must be after check-in date";
      }
    }

    // Email validation for details step
    if (
      step === "details" &&
      formData.email &&
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (step === "details" && formData.phone && formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      const currentIndex = steps.findIndex((s) => s.id === step);
      if (currentIndex < steps.length - 1) {
        setStep(steps[currentIndex + 1].id as typeof step);
      }
    }
  };

  const handlePreviousStep = () => {
    const currentIndex = steps.findIndex((s) => s.id === step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1].id as typeof step);
    }
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div
      id="bookARoom"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight mb-6">
            Book Your {"  "}
            <Highlight>Room</Highlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort with our easy booking process
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <StepIndicator />
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {step === "details" && (
                <PersonalDetails
                  formData={formData}
                  updateFormData={updateFormData}
                  errors={errors}
                  onNext={handleNextStep}
                />
              )}
              {step === "dates" && (
                <DateSelection
                  formData={formData}
                  updateFormData={updateFormData}
                  errors={errors}
                  onNext={handleNextStep}
                  onBack={handlePreviousStep}
                />
              )}
              {step === "rooms" && (
                <RoomSelection
                  formData={formData}
                  updateFormData={updateFormData}
                  errors={errors}
                  onNext={handleNextStep}
                  onBack={handlePreviousStep}
                />
              )}
              {step === "confirmation" && (
                <Confirmation
                  formData={formData}
                  onBack={handlePreviousStep}
                  onConfirm={() => console.log("Booking confirmed:", formData)}
                  updateFormData={updateFormData}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Step Components
const PersonalDetails = ({ formData, updateFormData, errors, onNext }: any) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Personal Details
      </h2>
      <p className="text-gray-600">Please provide your contact information</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          className={`w-full p-4 border-2 rounded-lg transition-colors ${
            errors.firstName
              ? "border-red-500"
              : "border-gray-200 focus:border-blue-500"
          }`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          className={`w-full p-4 border-2 rounded-lg transition-colors ${
            errors.lastName
              ? "border-red-500"
              : "border-gray-200 focus:border-cyan-500"
          }`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Email Address
      </label>
      <div className="relative">
        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className={`w-full p-4 pl-12 border-2 rounded-lg transition-colors ${
            errors.email
              ? "border-red-500"
              : "border-gray-200 focus:border-cyan-500"
          }`}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Phone Number
      </label>
      <div className="relative">
        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          className={`w-full p-4 pl-12 border-2 rounded-lg transition-colors ${
            errors.phone
              ? "border-red-500"
              : "border-gray-200 focus:border-cyan-500"
          }`}
        />
      </div>
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
    </div>

    <button
      onClick={onNext}
      className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg"
    >
      Continue to Dates
    </button>
  </div>
);

const DateSelection = ({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: any) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Select Your Dates
      </h2>
      <p className="text-gray-600">Choose your check-in and check-out dates</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Check-in Date
        </label>
        <input
          type="date"
          value={formData.checkIn}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => updateFormData({ checkIn: e.target.value })}
          className={`w-full p-4 border-2 rounded-lg transition-colors ${
            errors.checkIn
              ? "border-red-500"
              : "border-gray-200 focus:border-cyan-500"
          }`}
        />
        {errors.checkIn && (
          <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Check-out Date
        </label>
        <input
          type="date"
          value={formData.checkOut}
          min={formData.checkIn || new Date().toISOString().split("T")[0]}
          onChange={(e) => updateFormData({ checkOut: e.target.value })}
          className={`w-full p-4 border-2 rounded-lg transition-colors ${
            errors.checkOut
              ? "border-red-500"
              : "border-gray-200 focus:border-cyan-500"
          }`}
        />
        {errors.checkOut && (
          <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
        )}
      </div>
    </div>

    <div className="bg-cyan-50 p-6 rounded-lg">
      <h3 className="font-semibold text-cyan-800 mb-2">Booking Information</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">Check-in:</span>
          <span className="ml-2 font-medium">
            {formData.checkIn || "Not selected"}
          </span>
        </div>
        <div>
          <span className="text-gray-600">Check-out:</span>
          <span className="ml-2 font-medium">
            {formData.checkOut || "Not selected"}
          </span>
        </div>
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={onBack}
        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-semibold transition-colors duration-300"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="flex-1 bg-cyan-800 hover:bg-cyan-900 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg"
      >
        Continue to Rooms
      </button>
    </div>
  </div>
);

const RoomSelection = ({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
}: any) => (
  <div className="space-y-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Select Your Room
      </h2>
      <p className="text-gray-600">Choose from our available accommodations</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <motion.div
          key={room.id}
          className={`relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
            formData.roomType === room.id
              ? "border-cyan-500 shadow-xl scale-105"
              : "border-gray-200 hover:border-cyan-300 hover:shadow-lg"
          }`}
          whileHover={{ scale: 1.02 }}
          onClick={() => updateFormData({ roomType: room.id })}
        >
          <div className="relative">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            {room.featured && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </div>
            )}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-2xl font-bold text-cyan-800">
                ${room.price}
              </span>
              <span className="text-sm text-gray-500 ml-1">/night</span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <h3 className="font-bold text-xl text-gray-800 mb-1">
                {room.name}
              </h3>
              <p className="text-cyan-600 font-medium text-sm">{room.type}</p>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {room.description}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
              <div className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-cyan-600" />
                <span>Up to {room.capacity} guests</span>
              </div>
              <div className="text-gray-600">
                <span>{room.size}m²</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                Amenities
              </h4>
              <div className="flex flex-wrap gap-1">
                {room.amenities.slice(0, 3).map((amenity, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {errors.roomType && (
      <p className="text-red-500 text-sm text-center">{errors.roomType}</p>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Number of Adults
        </label>
        <input
          type="number"
          min="1"
          max="4"
          value={formData.adults}
          onChange={(e) => updateFormData({ adults: parseInt(e.target.value) })}
          className="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Number of Children
        </label>
        <input
          type="number"
          min="0"
          max="4"
          value={formData.children}
          onChange={(e) =>
            updateFormData({ children: parseInt(e.target.value) })
          }
          className="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors focus:border-cyan-500"
        />
      </div>
    </div>

    {errors.adults && <p className="text-red-500 text-sm">{errors.adults}</p>}

    <div className="flex gap-4">
      <button
        onClick={onBack}
        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-semibold transition-colors duration-300"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="flex-1 bg-cyan-800 hover:bg-cyan-900 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg"
      >
        Continue to Confirmation
      </button>
    </div>
  </div>
);

const Confirmation = ({ formData, onBack, onConfirm, updateFormData }: any) => {
  // Calculate total days and amount
  const calculateTotal = () => {
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const selectedRoom = rooms.find((room) => room.id === formData.roomType);
    const pricePerNight = selectedRoom?.price || 0;

    return {
      days: diffDays,
      total: diffDays * pricePerNight,
      room: selectedRoom,
    };
  };

  const { days, total, room } = calculateTotal();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Confirm Your Booking
        </h2>
        <p className="text-gray-600">
          Please review your booking details before confirming
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">
              Guest Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{formData.phone}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Stay Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Check-in:</span>
                <span className="font-medium">{formData.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-out:</span>
                <span className="font-medium">{formData.checkOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{days} nights</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Guests:</span>
                <span className="font-medium">
                  {formData.adults} adults, {formData.children} children
                </span>
              </div>
            </div>
          </div>

          {/* Optional Fields */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4">
              Additional Information (Optional)
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address (Optional)
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) =>
                      updateFormData({ address: e.target.value })
                    }
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-lg transition-colors focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  placeholder="Any special requests or preferences?"
                  value={formData.specialRequests}
                  onChange={(e) =>
                    updateFormData({ specialRequests: e.target.value })
                  }
                  className="w-full p-4 border-2 border-gray-200 rounded-lg transition-colors focus:border-cyan-500 resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-cyan-50 p-6 rounded-lg">
            <h3 className="font-semibold text-cyan-800 mb-4">Room Details</h3>
            {room && (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Type:</span>
                  <span className="font-medium">{room.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{room.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per night:</span>
                  <span className="font-medium">${room.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium">{room.size}m²</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-cyan-800 to-cyan-600 p-6 rounded-lg text-white">
            <h3 className="font-semibold mb-4">Payment Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Price per night:</span>
                <span>${room?.price || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of nights:</span>
                <span>{days}</span>
              </div>
              <div className="border-t border-cyan-200 pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total Amount:</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-semibold transition-colors duration-300"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 bg-cyan-800 hover:bg-cyan-900 text-white py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
