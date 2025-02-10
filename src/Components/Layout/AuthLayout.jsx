import { Outlet } from "react-router-dom";
import icons from "../../assets/icon";

const Register = () => {
  return (
    <div className="h-dvh bg-light-purple w-full flex justify-center items-center">
      <div className="h-5/6 md:h-4/5 md:aspect-video max-w-[90vw] w-4/5 bg-white flex flex-row rounded-2xl overflow-hidden drop-shadow-lg p-4 gap-4">
        <div
          className="md:w-1/2 h-full bg-cover bg-center rounded-lg md:flex hidden justify-center items-end"
          style={{
            backgroundImage: `url("https://w.wallhaven.cc/full/zy/wallhaven-zywpgw.png")`,
          }}
        >
          <div className="flex items-end justify-center w-full h-fit py-4 gap-4">
            <icons.animeIcon fill="white" height="2.5rem" width="2.5rem" />
            <h1 className="text-white text-5xl">Aniview</h1>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Register;
