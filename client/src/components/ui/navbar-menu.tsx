"use client";
import React from "react";
import { Link } from "react-router-dom";

// Add onClick to the props
interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string | React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const MenuItem = ({ setActive, item, href, onClick }: MenuItemProps) => {
  return (
    <Link
      to={href}
      className={
        "cursor-pointer text-white hover:text-orange-500 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] dark:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]"
      }
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else {
          setActive(item as string);
        }
      }}
    >
      {item}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-transparent shadow-input flex justify-between space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-orange-500 "
    >
      {children}
    </a>
  );
};
