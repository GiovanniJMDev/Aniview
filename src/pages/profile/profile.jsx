import React from "react";

const Profile = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className=" flex justify-center items-start flex-col w-4/5 h-5/6 bg-white rounded-2xl drop-shadow-lg overflow-hidden">
        <div
          className="h-1/3 w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(https://t3.ftcdn.net/jpg/07/41/57/50/360_F_741575084_eLPzRBX4siOp3FbEsTOfkFNS0KO897HY.jpg)`, // Envolviendo LoginWallpaper con url()
          }}
        ></div>{" "}
        <div
          className="rounded-full absolute w-2/4 max-w-40 min-w-24 aspect-square -translate-y-3/4  translate-x-4 bg-white bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/49/d5/b2/49d5b215b12847a876d5e888a9c5b5c5.jpg)`, // Envolviendo LoginWallpaper con url()
          }}
        />
        <div className="h-2/3 bg-light-gray w-full grid grid-cols-2">
          <div className="border-2 w-full h-full"></div>
          <div className="border-2 w-full h-full"></div>
          <div className="border-2 w-full h-full"></div>
          <div className="border-2 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
