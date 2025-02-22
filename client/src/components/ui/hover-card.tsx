import { useState } from "react";
import { cn } from "../../lib/utils";

export const HoverCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group transition-all duration-300 cursor-pointer",
        className,
        {
          "scale-105": isHovered,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div
        className={cn(
          "absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000",
          {
            "opacity-75": isHovered,
          }
        )}
      />
    </div>
  );
};
