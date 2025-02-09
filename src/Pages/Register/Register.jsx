import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLoginButton from "../../Components/Button/SocialLoginButton";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    const isEmailEmpty = !email;
    const isPasswordEmpty = !password;
    const isFirstNameEmpty = !firstName;
    const isLastNameEmpty = !lastName;
    const isUserNameEmpty = !userName;

    setEmailError(isEmailEmpty);
    setPasswordError(isPasswordEmpty);
    setFirstNameError(isFirstNameEmpty);
    setLastNameError(isLastNameEmpty);
    setUserNameError(isUserNameEmpty);

    if (
      !isEmailEmpty &&
      !isPasswordEmpty &&
      !isFirstNameEmpty &&
      !isLastNameEmpty &&
      !isUserNameEmpty
    ) {
      const userData = {
        email,
        name: firstName,
        lastname: lastName,
        username: userName,
        image: "https://example.com/default-avatar.jpg",
        password,
      };

      const API_AUTH_URL = import.meta.env.VITE_API_AUTH_URL;

      try {
        const response = await fetch(`${API_AUTH_URL}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
          return;
        }

        console.log("Registration successful!");
        navigate("/home");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
      <div className="rounded-xl h-full md:h-[90%] flex flex-col gap-2 w-full md:w-5/6 justify-around">
        <h1 className="text-center font-bold text-2xl lg:text-3xl">
          Register to Aniview
        </h1>

        <div className="text-center mt-2">
          <span className="text-gray-400">Already have an account? </span>
          <Link className="text-light-purple" to="/login">
            Log in
          </Link>
        </div>

        <div className="overflow-auto">
          <div className="px-4 gap-2 flex flex-col">
            <Input
              placeholder="Username"
              type="text"
              name="Username"
              value={userName}
              error={userNameError ? "Username is required" : undefined}
              onChange={(e) => {
                const value = e.target.value || "";
                setUserName(value);
                if (userNameError) setUserNameError(false);
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                placeholder="First Name"
                type="text"
                name="First Name"
                value={firstName}
                error={firstNameError ? "First Name is required" : undefined}
                onChange={(e) => {
                  const value = e.target.value || "";
                  setFirstName(value);
                  if (firstNameError) setFirstNameError(false);
                }}
              />
              <Input
                placeholder="Last Name"
                type="text"
                name="Last Name"
                value={lastName}
                error={lastNameError ? "Last Name is required" : undefined}
                onChange={(e) => {
                  const value = e.target.value || "";
                  setLastName(value);
                  if (lastNameError) setLastNameError(false);
                }}
              />
            </div>
            <Input
              placeholder="Email"
              name="email"
              type="email"
              error={emailError ? "Email is required" : undefined}
              value={email}
              onChange={(e) => {
                const value = e.target.value || "";
                setEmail(value);
                if (emailError) setEmailError(false);
              }}
            />
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              error={passwordError ? "Password is required" : undefined}
              value={password}
              onChange={(e) => {
                const value = e.target.value || "";
                setPassword(value);
                if (passwordError) setPasswordError(false);
              }}
            />
          </div>
          <div className="text-sm text-gray-400 text-center my-4">
            <input type="checkbox" id="terms" className="accent-gray-400" /> I
            agree to the{" "}
            <Link to="#" className="text-light-purple hover:text-light-purple">
              Terms & Conditions
            </Link>
          </div>
          <button
            onClick={handleRegister}
            className="py-2 px-6 rounded-xl text-white flex items-center justify-center w-full bg-gray-700"
          >
            Register
          </button>

          <div className="flex items-center justify-center m-4">
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

export default Register;
