import { cn } from "../lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconX } from "@tabler/icons-react";
import { useRef, useState } from "react";

const ContactUs = () => {
  const INITIAL_FORM_DATA = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showError, setShowError] = useState<boolean | undefined>(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div id="contact">
      <div className="bg-black text-white ">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center">
            Feel free to contact us! Call{" "}
            <span className="text-blue-300">+(250) 78-8426737</span>
          </h1>
        </div>
      </div>
      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl bg-bl p-4 md:p-8 md:py-32 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Send us a message
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          {showError && (
            <div className="bg-red-50 text-red-500 border border-red-500 p-2 rounded-md my-3 text-center flex justify-between items-center">
              {" "}
              <span>error message</span>
              <span>
                <IconX
                  className="border border-red-500 cursor-pointer"
                  onClick={() => setShowError(false)}
                />{" "}
              </span>
            </div>
          )}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Eliezer"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Nsengi"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="iamnsengi@icloud.com"
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              placeholder="Message"
              rows={6}
              className="bg-neutral-100 outline-none px-4 py-2 rounded-md text-black"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default ContactUs;
