import Input from "../../components/input/input";
import { Link } from "react-router-dom";
import LoginWallpaper from "../../assets/img/login-wallpaper.jpg";

const inputs = [
  {
    name: "Username",
    placeholder: "Write your username here...",
  },
  {
    name: "Email",
    placeholder: "text@mail.com",
  },
  {
    name: "Password",
    placeholder: "Write your password here...",
  },
];

const Register = () => {
  return (
    <div className="h-dvh bg-purple-400 w-100 flex justify-center items-center">
      <div className="h-4/5 w-4/5 bg-white flex flex-row rounded-md overflow-hidden">
        <div
          className="lg:w-1/2 h-full  bg-cover bg-center"
          style={{
            backgroundImage: `url(${LoginWallpaper})`, // Envolviendo LoginWallpaper con url()
          }}
        ></div>{" "}
        <div className="w-full py-2 lg:w-1/2 h-full flex flex-col content-start">
          <div className="flex-grow  mx-20">
            <h1 className="text-start font-bold text-4xl py-2">Register</h1>
            {inputs.map((input, id) => (
              <Input
                key={id}
                name={input.name}
                placeholder={input.placeholder}
              />
            ))}
            <div className=" flex justify-between">
              <label className="p-auto text-gray-400 my-2 accent-gray-400 ">
                <input
                  type="checkbox"
                  id="cbox1"
                  value="first_checkbox"
                  className="w-5 h-5 align-middle"
                />{" "}
                Do you want to receive news by mail?{" "}
              </label>
            </div>
            <Link to="/home">
              <button className="w-fit bg-gray-700 py-2 px-6 rounded-xl text-white">
                Sign Up
              </button>
            </Link>
          </div>
          <div className=" px-2 h-auto text-end w-full ">
            <span className="font-medium text-gray-500">
              Already have an account?{" "}
            </span>{" "}
            <Link to="/login">
              <button className="w-fit bg-gray-700 py-2 px-6 rounded-xl text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
