import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconLoader, IconX } from "@tabler/icons-react";
import { INITIAL_FORM_DATA } from "../utils/interfaces";
import BottomGradient from "./BottomGradient";
import LabelInputContainer from "./LabelInputContainer";

const today = new Date().toISOString().split("T")[0];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [minCheckIn, setMinCheckIn] = useState<string>("");
  const [minCheckOut, setMinCheckOut] = useState<string>("");

  useEffect(() => {
    setMinCheckIn(today);
    updateMinCheckOut(today);
  }, []);

  useEffect(() => {
    if (formData.checkIn) updateMinCheckOut(formData.checkIn);
  }, [formData.checkIn]);

  const updateMinCheckOut = (date: string) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setMinCheckOut(nextDay.toISOString().split("T")[0]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstname, lastname, email, message } = formData;
    if (!firstname || !lastname || !email || !message) {
      setStatusMessage("All fields are required");
      setShowMessage(true);
      setSuccess(false);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/emails/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatusMessage(data.message);
        setFormData(INITIAL_FORM_DATA);
        setSuccess(true);
      } else {
        setStatusMessage(data.message);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage(
        "Booking unsuccessful, kindly check your email and try again!"
      );
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
      setShowMessage(true);
    }
  };

  return (
    <div id="bookARoom">
      <div className="bg-black text-white">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center">
            Feel free to contact us! Call{" "}
            <span className="text-blue-300">+(250) 78-3584816</span>
          </h1>
        </div>
      </div>
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl bg-bl p-4 md:p-8 md:py-32 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Book a Room
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          {showMessage && (
            <div
              className={`${
                success
                  ? "bg-green-50 border-green-500 text-green-500"
                  : "bg-red-50 border-red-500 text-red-500"
              } border p-2 rounded-md my-3 text-center flex justify-between items-center`}
            >
              <span>{statusMessage}</span>
              <IconX
                className={`border ${
                  success ? "border-green-500" : "border-red-500"
                } cursor-pointer`}
                onClick={() => setShowMessage(false)}
              />
            </div>
          )}

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="John"
                type="text"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Doe"
                type="text"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="checkIn">Check In</Label>
              <Input
                id="checkIn"
                name="checkIn"
                type="date"
                min={minCheckIn}
                value={formData.checkIn}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="checkOut">Check Out</Label>
              <Input
                id="checkOut"
                name="checkOut"
                type="date"
                min={minCheckOut}
                value={formData.checkOut}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-5">
            <LabelInputContainer>
              <Label htmlFor="checkIn">Type of Room</Label>
              <Input
                id="room_type"
                name="room_type"
                type="text"
                value={formData.roomType}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="checkOut">Number Of People</Label>
              <Input
                id="numberOfPeople"
                name="numberOfPeople"
                type="text"
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="johndoe@mail.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Special Request</Label>
            <textarea
              id="special_request"
              name="special_request"
              placeholder="Add any thing you want us to know!"
              value={formData.message}
              rows={6}
              className="bg-neutral-100 outline-none px-4 py-2 rounded-md text-black"
              onChange={handleInputChange}
            ></textarea>
          </LabelInputContainer>

          <button className=" submitButton" type="submit">
            {isSubmitting ? (
              <>
                <IconLoader className="mr-2" /> Sending...
              </>
            ) : (
              <span>Send Message &rarr;</span>
            )}
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
