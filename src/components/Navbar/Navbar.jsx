import { useState } from "react";
import NavbarButton from "../button/navbarButton";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbarSize = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Settings", href: "#settings" },
    { label: "Profile", href: "#profile" },
  ];

  return (
    <aside
      className={`w-auto bg-gray-900 text-white h-screen flex flex-col p-4 transition-all duration-500`}
    >
      <h1
        className="hover:bg-cyan-500 w-auto text-xl font-bold mb-4 select-none cursor-pointer p-2 box-content rounded-md"
        onClick={toggleNavbarSize}
      >
        {/* My Home */}H
      </h1>

      <nav className="flex flex-col space-y-2">
        <NavbarButton isExpanded={isExpanded} />
      </nav>
    </aside>
  );
};

export default Navbar;
