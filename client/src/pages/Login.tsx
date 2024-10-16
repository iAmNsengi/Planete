import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { IconBrandGoogle, IconLoader, IconX } from "@tabler/icons-react";
import { cn } from "../lib/utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const INITIAL_FORM_VALUES = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_FORM_VALUES);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { username, password } = formData;
    if (username === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      setShowMessage(true);
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      setShowMessage(false);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid username or password");
      setShowMessage(true);
      console.error(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center py-7">
        Login | Planete Hotel Rwanda
      </h2>
      {showMessage && (
        <div
          className={`bg-red-50 border-red-500 text-red-500
               border  p-2 rounded-md my-3 text-center flex justify-between items-center`}
        >
          <span>{errorMessage}</span>
          <span>
            <IconX
              className={`border-red-500 cursor-pointer`}
              onClick={() => setShowMessage(false)}
            />{" "}
          </span>
        </div>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Username">Username</Label>
          <Input
            id="username"
            placeholder="Username..."
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] items-center flex justify-center"
          type="submit"
        >
          {isSubmitting ? (
            <>
              {" "}
              <IconLoader /> Logging In...
            </>
          ) : (
            <span>Login &rarr;</span>
          )}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

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
