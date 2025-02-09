import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom"; // Changed useHistory to useNavigate
import { useState } from "react";
import SocialLoginButton from "../../Components/Button/SocialLoginButton";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const API_AUTH_URL = import.meta.env.VITE_API_AUTH_URL;

  const handleLogin = async () => {
    const isEmailEmpty = !email;
    const isPasswordEmpty = !password;

    setEmailError(isEmailEmpty);
    setPasswordError(isPasswordEmpty);

    if (!isEmailEmpty && !isPasswordEmpty) {
      // Crea el objeto de datos que se enviará
      const loginData = {
        email: email,
        password: password,
      };

      try {
        const response = await fetch(`${API_AUTH_URL}/auth/login`, {
          method: "POST", // Tipo de solicitud (POST)
          headers: {
            "Content-Type": "application/json", // Indicamos que el cuerpo está en formato JSON
          },
          body: JSON.stringify(loginData), // Convertimos los datos a formato JSON
          credentials: "include",
        });

        if (response.ok) {
          // Si la respuesta es exitosa, redirigimos al home
          navigate("/home");
        } else {
          // Si hay un error con la solicitud
          const errorData = await response.json();
          alert(
            `Error: ${
              errorData.message || "Hubo un problema al iniciar sesión"
            }`
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Hubo un error al realizar la solicitud");
      }
    } else {
      alert("Por favor, rellene todos los campos");
    }
  };

  return (
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
              type="password"
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
            <div className="grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-400">Or register with</span>
            <div className="grow border-t border-gray-400"></div>
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
  );
};

export default Login;
