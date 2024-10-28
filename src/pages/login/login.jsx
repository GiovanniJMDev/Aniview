import Input from "../../components/input/input";

const inputs = [
  {
    name: "Name",
    placeholder: "Write your name here...",
  },
  {
    name: "Password",
    placeholder: "Write your password here...",
  },
];

const Login = () => {
  return (
    <div className="h-dvh bg-red-500 w-100 flex justify-center items-center">
      <div className="h-4/5 w-4/5 bg-white flex flex-row rounded-md overflow-hidden">
        <div
          className="md:w-1/2 h-full  bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/hd/yu-yu-hakusho-martial-arts-poster-0b9a7w2ab22f6l8b.jpg')",
          }}
        ></div>{" "}
        <div className="w-full md:w-1/2 h-full ">
          <h1 className="m-auto text-center border-2 border-blue-700 font-bold text-3xl p-4">
            Login
          </h1>
          {inputs.map((input, id) => (
            <Input key={id} name={input.name} placeholder={input.placeholder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
