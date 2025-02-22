/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod"; // Add zod for validation
import { Highlight } from "./ui/hero-highlight";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  roomType: z.string().min(1, "Room type is required"),
  guests: z.number().min(1).max(4),
});

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

  const validateStep = () => {
    try {
      switch (step) {
        case "details":
          z.object({
            firstName: formSchema.shape.firstName,
            lastName: formSchema.shape.lastName,
            email: formSchema.shape.email,
          }).parse(formData);
          return true;
        case "dates":
          z.object({
            checkIn: formSchema.shape.checkIn,
            checkOut: formSchema.shape.checkOut,
          }).parse(formData);
          return true;
        case "rooms":
          z.object({
            roomType: formSchema.shape.roomType,
            guests: formSchema.shape.guests,
          }).parse(formData);
          return true;
        default:
          return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (step) {
      case "details":
        return (
          <PersonalDetails
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep("dates")}
          />
        );
      case "dates":
        return (
          <DateSelection
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep("rooms")}
            onBack={() => setStep("details")}
          />
        );
      case "rooms":
        return (
          <RoomSelection
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep("confirmation")}
            onBack={() => setStep("dates")}
            errors={errors}
            validateStep={validateStep}
          />
        );
      case "confirmation":
        return (
          <Confirmation
            formData={formData}
            onBack={() => setStep("rooms")}
            onConfirm={() => console.log("Booking confirmed:", formData)}
          />
        );
    }
  };

  return (
    <div id="bookARoom" className="min-h-screen h-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-black text-5xl md:text-4xl lg:text-7xl font-sans md:py-10 relative z-20 font-bold tracking-tight">
          Book Your {"  "}
          <Highlight className="bg-cyan-800 text-white">Perfect Stay</Highlight>
          <br />
        </h2>
        <div className="max-w-3xl mx-auto pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Step Components
const PersonalDetails = ({ formData, updateFormData, onNext }: any) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
    <input
      type="text"
      placeholder="First Name"
      value={formData.firstName}
      onChange={(e) => updateFormData({ firstName: e.target.value })}
      className="w-full p-2 border rounded"
    />
    <input
      type="text"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={(e) => updateFormData({ lastName: e.target.value })}
      className="w-full p-2 border rounded"
    />
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => updateFormData({ email: e.target.value })}
      className="w-full p-2 border rounded"
    />
    <button
      onClick={onNext}
      className="w-full bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
    >
      Next
    </button>
  </div>
);

const DateSelection = ({ formData, updateFormData, onNext, onBack }: any) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Select Dates</h2>
    <input
      type="date"
      value={formData.checkIn}
      onChange={(e) => updateFormData({ checkIn: e.target.value })}
      className="w-full p-2 border rounded"
    />
    <input
      type="date"
      value={formData.checkOut}
      onChange={(e) => updateFormData({ checkOut: e.target.value })}
      className="w-full p-2 border rounded"
    />
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

const RoomSelection = ({
  formData,
  updateFormData,
  onNext,
  onBack,
  errors,
  validateStep,
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
        onClick={() => {
          if (validateStep()) onNext();
        }}
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
