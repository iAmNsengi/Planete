/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const CardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const multiplier = 20;
    const rotateX = (y - 0.5) * multiplier;
    const rotateY = (x - 0.5) * multiplier;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsHovered(false);
    containerRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={containerRef}
      className={cn("transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {children}
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/[0.1] to-transparent rounded-lg" />
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateZ = 0,
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
}) => {
  return (
    <div
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
    >
      {children}
    </div>
  );
};
