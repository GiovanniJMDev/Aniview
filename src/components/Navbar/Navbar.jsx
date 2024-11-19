import { useState } from "react";
import NavbarButton from "../button/navbarButton";
import icons from "../../assets/icon/index"; // Importa tus iconos
import LogOutButton from "../button/logOutButton";
import TitleNavbarButton from "../button/titleNavbarButton";
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
    // {
    //   label: "TierList",
    //   href: "#tierlist",
    //   icon: icons.tierListIcon,
    //   iconType: "stroke",
    //   link: "/tierlist",
    // },
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
      <nav className="flex flex-col space-y-4 flex-grow">
        <TitleNavbarButton
          isExpanded={isExpanded}
          onClick={toggleNavbarSize}
          title="Aniview"
          IconComponent={icons.animeIcon} // Pasa el icono como prop
          iconType={"fill"}
        />
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
      <nav className="py-4">
        <LogOutButton
          isExpanded={isExpanded}
          title={"LogOut"}
          IconComponent={icons.logOutIcon} // Pasa el icono como prop
          iconType={"fill"}
          to="/login"
        />
      </nav>
    </aside>
  );
};

export default Navbar;
