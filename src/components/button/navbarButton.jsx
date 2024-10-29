const NavbarButton = ({ isExpanded }) => {
  return (
    <button
      className={
        "bg-medium-purple hover:bg-dark-purple hover:border-white border-4 border-transparent rounded-3xl p-2 text-start w-fit transition-all duration-500 ease-in-out p-2"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
        className="inline-block align-middle transition-transform duration-500"
        style={{
          transform: isExpanded ? "scale(1)" : "scale(0.9)",
        }}
      >
        <path
          fill="#f3f3f3"
          d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
        />
      </svg>
      <span
        className={`inline-block align-middle  transition-all  duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "w-32 ml-2" : " w-0"
        }`}
      >
        Profile
      </span>
    </button>
  );
};

export default NavbarButton;
