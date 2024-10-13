import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconLoader, IconX } from "@tabler/icons-react";

const today = new Date().toISOString().split("T")[0];

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  checkIn: string;
  checkOut: string;
}

const INITIAL_FORM_DATA: FormData = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
  checkIn: today,
  checkOut: today,
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
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
    if (formData.checkIn) {
      updateMinCheckOut(formData.checkIn);
    }
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
        "Couldn't book your room, please double-check your email and try again!"
      );
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
      setShowMessage(true);
    }
  };

  return (
    <div id="contact">
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
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              rows={6}
              className="bg-neutral-100 outline-none px-4 py-2 rounded-md text-black"
              onChange={handleInputChange}
            ></textarea>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] items-center flex justify-center"
            type="submit"
          >
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

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactUs;
