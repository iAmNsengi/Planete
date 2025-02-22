"use client";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const moveBeams = (e: MouseEvent) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX - beamsRef.current.offsetLeft;
      const y = clientY - beamsRef.current.offsetTop;

      beamsRef.current.style.setProperty("--x", `${x}px`);
      beamsRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeams);
    return () => window.removeEventListener("mousemove", moveBeams);
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(0,_0,_0,_0)_0%,rgba(0,_0,_0,_0.5)_100%)]",
        className
      )}
    />
  );
};
