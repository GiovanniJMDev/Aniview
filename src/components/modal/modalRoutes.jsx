import Modal from "./modal";
import NavbarButton from "../button/navbarButton";
import LogOutButton from "../button/logOutButton";
import icons from "../../assets/icon";

const ModalRoutes = ({ isOpen, onClose, isExpanded }) => {
  const navItems = [
    {
      label: "Home",
      href: "#home",
      icon: icons.homeIcon,
      iconType: "stroke",
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <nav className="flex flex-col space-y-4 h-5/6 items-center">
        {navItems.map((item) => (
          <NavbarButton
            key={item.label}
            isExpanded={isExpanded}
            title={item.label}
            IconComponent={item.icon}
            iconType={item.iconType}
            to={item.link}
            onClick={onClose} // Cierra el modal al hacer clic en cada botón de navegación
          />
        ))}
        <LogOutButton
          isExpanded={isExpanded}
          title={"LogOut"}
          IconComponent={icons.logOutIcon}
          iconType={"fill"}
          to="/login"
          onClick={onClose} // Cierra el modal al hacer clic en el botón de cierre de sesión
        />
      </nav>
    </Modal>
  );
};

export default ModalRoutes;
