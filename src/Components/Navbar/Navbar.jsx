import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarButton from "../Button/NavbarButton/NavbarButton";
import icons from "../../assets/icon/index"; // Import your icons
import LogOutButton from "../Button/LogOutButton";
import TitleNavbarButton from "../Button/TitleNavbarButton";
import navItems from "../../Data/Routes.json";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleNavbarSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className="w-auto bg-onix text-white h-dvh flex flex-col p-4 transition-all duration-500">
      <nav className="flex flex-col space-y-4 grow">
        <TitleNavbarButton
          isExpanded={isExpanded}
          onClick={toggleNavbarSize}
          title="Aniview"
          IconComponent={icons.animeIcon}
          iconType="fill"
        />
        {navItems.map((item) => (
          <NavbarButton
            key={item.label}
            isExpanded={isExpanded}
            title={item.label}
            IconComponent={icons[item.icon.split(".").pop()]} // Adjusted to use the icon from the icons object
            iconType={item.iconType}
            to={item.link}
            isActive={currentPath === item.link}
          />
        ))}
      </nav>
      <nav className="py-4">
        <LogOutButton
          isExpanded={isExpanded}
          title="LogOut"
          IconComponent={icons.logOutIcon}
          iconType="fill"
          to="/login"
        />
      </nav>
    </aside>
  );
};

export default Navbar;
