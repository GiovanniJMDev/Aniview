import Input from "../../components/input/input";
import { Link } from "react-router-dom";
import icons from "../../assets/icon";
import { useState } from "react";

const inputs = [
  {
    name: "Username/Email",
    placeholder: "Write your username or email here...",
  },
  {
    name: "Password",
    placeholder: "Write your password here...",
  },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh bg-light-purple w-100 flex justify-center items-center">
      <div className="h-4/5 md:aspect-video w-[90vw] md:w-auto bg-white flex flex-row rounded-2xl overflow-hidden drop-shadow-lg p-4 gap-4">
        <div
          className="md:w-1/2  h-full  bg-cover bg-center rounded-lg md:flex hidden justify-center items-end"
          style={{
            backgroundImage: `url("https://w.wallhaven.cc/full/zy/wallhaven-zywpgw.png")`, // Envolviendo LoginWallpaper con url()
          }}
        >
          {" "}
          <div className="flex items-end justify-center w-full h-fit  py-4 gap-4">
            <icons.animeIcon fill="white" height="2.5rem" width="2.5rem" />{" "}
            <h1 className="text-white text-5xl ">Aniview</h1>
          </div>
        </div>{" "}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
          <div className="  rounded-xl h-full md:h-5/6 flex flex-col gap-3 w-full md:w-5/6 justify-around">
            <h1 className="text-center font-bold text-5xl py-2 ">
              Login to Aniview
            </h1>

            <div className="text-center mt-4">
              <span className="text-gray-400">Don’t have an account? </span>
              <Link
                className="text-light-purple hover:text-dark-purple transition-all duration-300"
                to="/register"
              >
                Register
              </Link>
            </div>

            <div className="overflow-auto">
              <div className="px-4 gap-3 flex flex-col">
                <Input className="" placeholder="Email" type="email" />
                <Input
                  className="bg-[#28272f] border-0 text-white placeholder:text-gray-400 pr-10"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
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
              <Link
                to="/home"
                className=" px-6 rounded-xl text-white flex items-center justify-center"
              >
                <button className="w-fit bg-gray-700 py-2 px-6 rounded-xl text-white">
                  Login
                </button>
              </Link>
              <div className="flex items-center justify-center m-4 ">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-400">Or register with</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 justify-items-center gap-4 px-4 overflow-auto">
                <button className="border-2 border-gray-300 text-gray-800 p-2 flex items-center justify-center rounded-xl aspect-square hover:bg-gray-300 transition-all duration-300">
                  <icons.googleIcon height="2rem" width="2rem" />
                </button>
                <button className="border-2 border-gray-300 text-gray-800 p-2 flex items-center justify-center rounded-xl aspect-square hover:bg-gray-300 transition-all duration-300">
                  <icons.appleIcon fill="#252525" height="2rem" width="2rem" />
                </button>
                <button className="border-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl aspect-square hover:bg-gray-300 transition-all duration-300">
                  <icons.microsoftIcon height="2rem" width="2rem" />
                </button>
                <button className="border-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl aspect-square hover:bg-gray-300 transition-all duration-300">
                  <icons.githubIcon fill="#252525" height="2rem" width="2rem" />
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
