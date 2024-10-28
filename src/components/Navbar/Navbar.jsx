import { useState } from "react";

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
      className={`${
        isExpanded ? "w-1/4" : "w-1/5"
      }   bg-gray-900 text-white h-dvh flex flex-col p-4 transition-all duration-500 `}
    >
      <h1
        className="hover:bg-cyan-500 text-xl font-bold mb-4 select-none cursor-pointer p-2 box-content rounded-md"
        onClick={toggleNavbarSize}
      >
        My Home
      </h1>

      <nav className="flex flex-col space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            href={item.href}
            className="p-2 rounded text-left hover:bg-red-400 transition-all"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
