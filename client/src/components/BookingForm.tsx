"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BookingStep = "details" | "dates" | "rooms" | "confirmation";

const BookingForm = () => {
  const [step, setStep] = useState<BookingStep>("details");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: 1,
  });

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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto">
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

const RoomSelection = ({ formData, updateFormData, onNext, onBack }: any) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold mb-6">Select Room</h2>
    <select
      value={formData.roomType}
      onChange={(e) => updateFormData({ roomType: e.target.value })}
      className="w-full p-2 border rounded"
    >
      <option value="">Select a room type</option>
      <option value="birdhouse">Birdhouse</option>
      <option value="pod">Pod</option>
      <option value="bungalow">Bungalow</option>
    </select>
    <input
      type="number"
      min="1"
      max="4"
      value={formData.guests}
      onChange={(e) => updateFormData({ guests: parseInt(e.target.value) })}
      className="w-full p-2 border rounded"
      placeholder="Number of guests"
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
