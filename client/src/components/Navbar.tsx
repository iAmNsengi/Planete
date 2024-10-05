import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { IconLogin } from "@tabler/icons-react";

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
        <div className="flex items-center gap-3">
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
        </div>
        <MenuItem
          setActive={setActive}
          href="/login"
          active={active}
          item={<IconLogin className="text-orange-500 hover:scale-150" />}
        />
      </Menu>
    </div>
  );
};

export default Navbar;
