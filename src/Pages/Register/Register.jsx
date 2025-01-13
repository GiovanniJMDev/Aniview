import Input from "../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for navigation
import icons from "../../assets/icon";
import { useState } from "react";
import SocialLoginButton from "../../Components/Button/SocialLoginButton";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState(""); // Changed usernameEmail to firstName
  const [lastName, setLastName] = useState(""); // Added lastName state
  const [email, setEmail] = useState(""); // Changed usernameEmail to email
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false); // Added firstNameError state
  const [lastNameError, setLastNameError] = useState(false); // Added lastNameError state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = () => {
    const isEmailEmpty = !email;
    const isPasswordEmpty = !password;
    const isFirstNameEmpty = !firstName; // Check if firstName is empty
    const isLastNameEmpty = !lastName; // Check if lastName is empty

    setEmailError(isEmailEmpty);
    setPasswordError(isPasswordEmpty);
    setFirstNameError(isFirstNameEmpty); // Set firstNameError
    setLastNameError(isLastNameEmpty); // Set lastNameError

    if (
      !isEmailEmpty &&
      !isPasswordEmpty &&
      !isFirstNameEmpty &&
      !isLastNameEmpty
    ) {
      // Redirect to /home after successful registration logic
      navigate("/home"); // Changed Link to navigate for registration
    }
  };

  return (
    <div className="h-dvh bg-light-purple w-full flex justify-center items-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input
                    className={`bg-[#28272f] border-0 text-white placeholder:text-gray-400 ${
                      firstNameError ? "border-red-500" : ""
                    }`} // Added error styling
                    placeholder="First Name"
                    type="text"
                    name="First Name"
                    value={firstName}
                    error={
                      firstNameError ? "First Name is required" : undefined
                    } // Error message for first name
                    onChange={(e) => {
                      const value = e.target.value || ""; // Ensure value is a string
                      setFirstName(value);
                      if (firstNameError) setFirstNameError(false); // Clear error on input
                    }}
                  />
                  <Input
                    className={`bg-[#28272f] border-0 text-white placeholder:text-gray-400 ${
                      lastNameError ? "border-red-500" : ""
                    }`} // Added error styling
                    placeholder="Last Name"
                    type="text"
                    name="Last Name"
                    value={lastName}
                    error={lastNameError ? "Last Name is required" : undefined} // Error message for last name
                    onChange={(e) => {
                      const value = e.target.value || ""; // Ensure value is a string
                      setLastName(value);
                      if (lastNameError) setLastNameError(false); // Clear error on input
                    }}
                  />
                </div>
                <Input
                  className=""
                  placeholder="Email"
                  name="email"
                  type="email"
                  error={emailError ? "Email is required" : undefined}
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value || ""; // Ensure value is a string
                    setEmail(value);
                    if (emailError) setEmailError(false); // Clear error on input
                  }}
                />
                <Input
                  className=""
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  name="password" // Changed name to lowercase
                  error={passwordError ? "Password is required" : undefined}
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value || ""; // Ensure value is a string
                    setPassword(value);
                    if (passwordError) setPasswordError(false); // Clear error on input
                  }}
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
                  to="#"
                  className="text-light-purple hover:text-light-purple"
                >
                  Terms & Conditions
                </Link>
              </div>
              <button
                onClick={handleRegister}
                className="py-2 px-6 rounded-xl text-white flex items-center justify-center w-full bg-gray-700" // Removed nested button
              >
                Register
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

export default Register;
