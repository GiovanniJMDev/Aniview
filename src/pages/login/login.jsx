import Input from "../../components/input/input";
import { Link } from "react-router-dom";
import LoginWallpaper from "../../assets/img/login-wallpaper.jpg";
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
  return (
    <div className="h-dvh bg-light-purple w-100 flex justify-center items-center">
      <div className="h-4/5 w-4/5 bg-white flex flex-row rounded-md overflow-hidden drop-shadow-lg">
        <div
          className="lg:w-1/2 h-full  bg-cover bg-center"
          style={{
            backgroundImage: `url(${LoginWallpaper})`, // Envolviendo LoginWallpaper con url()
          }}
        ></div>{" "}
        <div className="w-full py-2 lg:w-1/2 h-full flex flex-col content-start">
          <div className="flex-grow  md:mx-20 mx-6">
            <h1 className="text-start font-bold text-4xl py-2">Login</h1>
            {inputs.map((input, id) => (
              <Input
                key={id}
                name={input.name}
                placeholder={input.placeholder}
              />
            ))}
            <div className=" flex justify-between flex-wrap">
              <label className="min-w-fit pe-4 text-gray-400 my-2 accent-gray-400">
                <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
                Remember user
              </label>{" "}
              <label className="min-w-fit text-gray-400 my-2 accent-gray-400">
                Forgor your password?
              </label>
            </div>
            <Link to="/home">
              <button className="w-fit bg-gray-700 py-2 px-6 rounded-xl text-white">
                Login
              </button>
            </Link>
          </div>
          <div className="px-2  h-auto text-end w-full flex-wrap">
            <span className="font-medium text-gray-500 w-fit">
              Don’t have an account?{" "}
            </span>{" "}
            <Link to="/register">
              <button className="w-fit bg-gray-700 py-2 px-4 rounded-xl text-white ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
