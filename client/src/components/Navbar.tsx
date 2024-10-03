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
        <MenuItem setActive={setActive} active={active} item="Services" />
        <MenuItem setActive={setActive} active={active} item="Products" />
        <MenuItem setActive={setActive} active={active} item="Pricing" />
      </Menu>
    </div>
  );
};

export default Navbar;
