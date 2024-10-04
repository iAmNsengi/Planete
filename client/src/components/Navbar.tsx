import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-3 inset-x-0 max-w-2xl mx-auto z-50 bg-transparent backdrop-blur-sm border-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          href="#about"
          active={active}
          item="About"
        />
        <MenuItem
          setActive={setActive}
          href="#gallery"
          active={active}
          item="Gallery"
        />
        <MenuItem
          setActive={setActive}
          href="#contact"
          active={active}
          item="Contact"
        />
      </Menu>
    </div>
  );
};

export default Navbar;
