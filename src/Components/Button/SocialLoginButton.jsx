import { useNavigate } from "react-router-dom";
import icons from "../../assets/icon/index";
import PropTypes from "prop-types";
const SocialLoginButton = ({ app, link }) => {
  const IconComponent = icons[`${app}Icon`];
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <button
      onClick={() => navigate(link)}
      className="border-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl aspect-square hover:bg-gray-300 transition-all duration-300 p-2"
    >
      <IconComponent fill="#252525" height="2rem" width="2rem" />
    </button>
  );
};

SocialLoginButton.propTypes = {
  app: PropTypes.string,
  link: PropTypes.string,
};

export default SocialLoginButton;
