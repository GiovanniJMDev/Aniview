import { useState } from "react";
import NavbarButton from "../button/navbarButton";
import icons from "../../assets/icon/index"; // Importa tus iconos
import LogOutButton from "../button/logOutButton";
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbarSize = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    {
      label: "Home",
      href: "#home",
      icon: icons.homeIcon,
      iconType: "stoke",
      link: "/home",
    },
    {
      label: "MyList",
      href: "#mylist",
      icon: icons.myListIcon,
      iconType: "stroke",
      link: "/mylist",
    },
    {
      label: "TierList",
      href: "#tierlist",
      icon: icons.tierListIcon,
      iconType: "stroke",
      link: "/tierlist",
    },
    {
      label: "Anipon",
      href: "#anipon",
      icon: icons.aniponIcon,
      iconType: "fill",
      link: "/anipon",
    },
    {
      label: "Profile",
      href: "#profile",
      icon: icons.profileIcon,
      iconType: "fill",
      link: "/profile",
    },
  ];

  return (
    <aside className="w-auto bg-onix text-white h-dvh flex flex-col p-4 transition-all duration-500">
      <h2
        className="hover:bg-cyan-500 w-auto mb-4 select-none cursor-pointer p-2 box-content rounded-md"
        onClick={toggleNavbarSize}
      >
        {/* Aniview */}A
      </h2>

      <nav className="flex flex-col space-y-4 h-5/6">
        {navItems.map((item) => (
          <NavbarButton
            key={item.label}
            isExpanded={isExpanded}
            title={item.label}
            IconComponent={item.icon} // Pasa el icono como prop
            iconType={item.iconType}
            to={item.link}
          />
        ))}
      </nav>
      <LogOutButton
        isExpanded={isExpanded}
        title={"LogOut"}
        IconComponent={icons.logOutIcon} // Pasa el icono como prop
        iconType={"fill"}
        to="/login"
      />
    </aside>
  );
};

export default Navbar;
