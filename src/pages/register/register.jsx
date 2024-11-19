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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh bg-light-purple w-full flex justify-center items-center">
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
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
          <div className="  rounded-xl h-full md:h-5/6 flex flex-col gap-3 w-full md:w-5/6 justify-around">
            <h1 className="text-center font-bold text-5xl py-2 ">
              Register to Aniview
            </h1>

            <div className="text-center mt-4">
              <span className="text-gray-400">Already have an account? </span>
              <Link className="text-light-purple" to="/login">
                Log in
              </Link>
            </div>

            <div className="overflow-auto">
              <div className="px-4 gap-3 flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    className="bg-[#28272f] border-0 text-white placeholder:text-gray-400"
                    placeholder="Name"
                    type="text"
                  />
                  <Input
                    className="bg-[#28272f] border-0 text-white placeholder:text-gray-400"
                    placeholder="Last name"
                    type="text"
                  />
                </div>
                <Input className="" placeholder="Email" type="email" />
                <Input
                  className=""
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
              </div>
              <div className="text-sm text-gray-400 text-center my-4">
                <input
                  type="checkbox"
                  id="terms"
                  value="first_checkbox"
                  className="accent-gray-400"
                />{" "}
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-light-purple hover:text-light-purple"
                >
                  Terms & Conditions
                </Link>
              </div>
              <Link
                to="/home"
                className="py-2 px-6 rounded-xl text-white flex items-center justify-center"
              >
                <button className="w-fit bg-gray-700 py-2 px-6 rounded-xl text-white">
                  Register
                </button>
              </Link>
              <div className="flex items-center justify-center m-4 ">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-gray-400">Or register with</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-4 px-4">
                <button className="border-2 py-2 gap-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-300 transition-all duration-300">
                  <icons.googleIcon height="2rem" width="2rem" />
                  Google
                </button>
                <button className="border-2 py-2 gap-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-300 transition-all duration-300">
                  <icons.appleIcon fill="#252525" height="2rem" width="2rem" />
                  Apple
                </button>
                <button className="border-2 py-2 gap-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-300 transition-all duration-300">
                  <icons.microsoftIcon height="2rem" width="2rem" />
                  Microsoft
                </button>
                <button className="border-2 py-2 gap-2 border-gray-300 text-gray-800 flex items-center justify-center rounded-xl hover:bg-gray-300 transition-all duration-300">
                  <icons.githubIcon fill="#252525" height="2rem" width="2rem" />
                  Github
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
