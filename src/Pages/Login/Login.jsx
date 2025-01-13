import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom"; // Changed useHistory to useNavigate
import icons from "../../assets/icon";
import { useState } from "react";
import SocialLoginButton from "../../Components/Button/SocialLoginButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    const isEmailEmpty = !email;
    const isPasswordEmpty = !password;

    setEmailError(isEmailEmpty);
    setPasswordError(isPasswordEmpty);

    if (!isEmailEmpty && !isPasswordEmpty) {
      // Redirect to /home after successful login logic
      navigate("/home"); // Changed history.push to navigate
    }
  };

  return (
    <div className="h-dvh bg-light-purple w-100 flex justify-center items-center">
      <div className="h-5/6 md:h-4/5 md:aspect-video max-w-[90vw] w-4/5  bg-white flex flex-row rounded-2xl overflow-hidden drop-shadow-lg p-4 gap-4">
        <div
          className="md:w-1/2 h-full bg-cover bg-center rounded-lg md:flex hidden justify-center items-end"
          style={{
            backgroundImage: `url("https://w.wallhaven.cc/full/zy/wallhaven-zywpgw.png")`, // Envolviendo LoginWallpaper con url()
          }}
        >
          <div className="flex items-end justify-center w-full h-fit  py-4 gap-4">
            <icons.animeIcon fill="white" height="2.5rem" width="2.5rem" />{" "}
            <h1 className="text-white text-5xl ">Aniview</h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <div className="rounded-xl h-full md:h-[90%] flex flex-col gap-2 w-full md:w-5/6 justify-around">
            <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">
              Login to Aniview
            </h1>

            <div className="text-center mt-2">
              <span className="text-gray-400">Don’t have an account? </span>
              <Link
                className="text-light-purple hover:text-dark-purple transition-all duration-300"
                to="/register"
              >
                Register
              </Link>
            </div>

            <div className="overflow-auto">
              <div className="px-4 gap-2 flex flex-col">
                <Input
                  className=""
                  placeholder="Email"
                  type="email"
                  name="Email"
                  error={emailError ? "Email is required" : undefined}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                />
                <Input
                  className="bg-[#28272f] border-0 text-white placeholder:text-gray-400 pr-10"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  name="Password"
                  error={passwordError ? "Password is required" : undefined}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(false);
                  }}
                />
              </div>
              <div className="text-sm text-gray-400 flex justify-between items-center text-center m-4">
                <label htmlFor="terms">
                  <input
                    type="checkbox"
                    id="terms"
                    value="first_checkbox"
                    className="accent-gray-400"
                  />{" "}
                  Remember user
                </label>
                <Link
                  className="text-light-purple hover:text-dark-purple transition-all duration-300"
                  to="/login"
                >
                  Forgor your password?
                </Link>
              </div>
              <button
                onClick={handleLogin}
                className="py-2 px-6 rounded-xl text-white flex items-center justify-center w-full bg-gray-700" // Removed nested button
              >
                Login
              </button>

              <div className="flex items-center justify-center m-4 ">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-400">Or register with</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 justify-items-center gap-2 px-4 overflow-auto">
                <SocialLoginButton app={"google"} link="/home" />
                <SocialLoginButton app={"apple"} link="/home" />
                <SocialLoginButton app={"microsoft"} link="/home" />
                <SocialLoginButton app={"github"} link="/home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
