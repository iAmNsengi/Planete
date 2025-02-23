/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight } from "./ui/hero-highlight";

const rooms = [
  {
    id: "birdhouse",
    title: "Double Bed",
    image: "/landing3.JPG",
    price: "$90/night",
    description: "Perfect for nature lovers with panoramic views",
    maxGuests: 2,
  },
  {
    id: "pod",
    title: "Pod",
    image: "/landing3.JPG",
    price: "$100/night",
    description: "Modern comfort with lake views",
    maxGuests: 2,
  },
  {
    id: "bungalow",
    title: "Bungalow",
    image: "/landing3.JPG",
    price: "$150/night",
    description: "Spacious suite perfect for families",
    maxGuests: 4,
  },
];

const BookingForm = () => {
  const [step, setStep] = useState<
    "details" | "dates" | "rooms" | "confirmation"
  >("details");

  const steps = [
    { id: "details", title: "Personal Info", number: 1 },
    { id: "dates", title: "Select Dates", number: 2 },
    { id: "rooms", title: "Choose Room", number: 3 },
    { id: "confirmation", title: "Confirm", number: 4 },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((s, index) => (
        <div key={s.id} className="flex flex-col items-center">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                steps.findIndex((x) => x.id === step) >= index
                  ? "bg-cyan-800 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {s.number}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-32 h-1  ${
                  steps.findIndex((x) => x.id === step) > index
                    ? "bg-cyan-800"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
          <span className="text-sm mt-2 text-gray-600 pr-10">{s.title}</span>
        </div>
      ))}
    </div>
  );

  const validateCurrentStep = () => {
    const currentStepFields = {
      details: ["firstName", "lastName", "email"],
      dates: ["checkIn", "checkOut"],
      rooms: ["roomType", "guests"],
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
    <div id="bookARoom" className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight">
          Book Your {"  "}
          <Highlight className="bg-cyan-800 text-white">Room</Highlight>
          <br />
        </h2>
        <div className="max-w-3xl mx-auto pt-20">
          <StepIndicator />
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl shadow-lg p-8"
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
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
        className={`w-full p-2 border rounded ${
          errors.firstName ? "border-red-500" : ""
        }`}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
      )}
    </div>
    <div>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => updateFormData({ lastName: e.target.value })}
        className={`w-full p-2 border rounded ${
          errors.lastName ? "border-red-500" : ""
        }`}
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
      )}
    </div>
    <div>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
        className={`w-full p-2 border rounded ${
          errors.email ? "border-red-500" : ""
        }`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>
    <button
      onClick={onNext}
      className="w-full bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
    >
      Next
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
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Select Your Dates</h2>
    <div>
      <label className="block text-gray-700 mb-2">Check-in Date</label>
      <input
        type="date"
        value={formData.checkIn}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => updateFormData({ checkIn: e.target.value })}
        className={`w-full p-2 border rounded ${
          errors.checkIn ? "border-red-500" : ""
        }`}
      />
      {errors.checkIn && (
        <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
      )}
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Check-out Date</label>
      <input
        type="date"
        value={formData.checkOut}
        min={formData.checkIn || new Date().toISOString().split("T")[0]}
        onChange={(e) => updateFormData({ checkOut: e.target.value })}
        className={`w-full p-2 border rounded ${
          errors.checkOut ? "border-red-500" : ""
        }`}
      />
      {errors.checkOut && (
        <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
      )}
    </div>
    <div className="flex gap-4 pt-4">
      <button
        onClick={onBack}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="w-full bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
      >
        Next
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
  <div className="space-y-6">
    <h2 className="text-2xl font-bold mb-6">Select Your Room</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <motion.div
          key={room.id}
          className={`relative rounded-lg overflow-hidden cursor-pointer ${
            formData.roomType === room.id ? "ring-2 ring-cyan-800" : ""
          }`}
          whileHover={{ scale: 1.02 }}
          onClick={() => updateFormData({ roomType: room.id })}
        >
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{room.title}</h3>
            <p className="text-gray-600 text-sm">{room.description}</p>
            <p className="text-cyan-800 font-bold mt-2">{room.price}</p>
            <p className="text-sm text-gray-500">
              Up to {room.maxGuests} guests
            </p>
          </div>
        </motion.div>
      ))}
    </div>
    {errors.roomType && (
      <p className="text-red-500 text-sm">{errors.roomType}</p>
    )}
    <div className="mt-6">
      <input
        type="number"
        min="1"
        max="4"
        value={formData.guests}
        onChange={(e) => updateFormData({ guests: parseInt(e.target.value) })}
        className="w-full p-2 border rounded"
        placeholder="Number of guests"
      />
      {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
    </div>
    <div className="flex gap-4">
      <button
        onClick={onBack}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="w-full bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
      >
        Next
      </button>
    </div>
  </div>
);

const Confirmation = ({ formData, onBack, onConfirm }: any) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Confirm Booking</h2>
    <div className="space-y-2">
      <p>
        Name: {formData.firstName} {formData.lastName}
      </p>
      <p>Email: {formData.email}</p>
      <p>Check-in: {formData.checkIn}</p>
      <p>Check-out: {formData.checkOut}</p>
      <p>Room Type: {formData.roomType}</p>
      <p>Guests: {formData.guests}</p>
    </div>
    <div className="flex gap-4">
      <button
        onClick={onBack}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
      >
        Back
      </button>
      <button
        onClick={onConfirm}
        className="w-full bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
      >
        Confirm Booking
      </button>
    </div>
  </div>
);

export default BookingForm;
