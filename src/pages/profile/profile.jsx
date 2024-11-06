import React from "react";
import SocialMedias from "../../components/socialMedias/socialMedias";
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
        <div className="h-2/3 bg-light-gray w-full grid grid-cols-1 md:grid-cols-2 overflow-y-auto ">
          <div className=" w-full h-full min-h-[200px] bg-red-400">
            <div className="flex flex-row  h-full box-border pt-6 justify-center">
              <h2 className="text-3xl p-3">Giovanni_JM</h2>
              <img
                className="h-1/5 w-auto rounded-full aspect-square bg-cover bg-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Hxu0WXM82rDbGGg-34h5mqvcTCQOCQcSBw&s"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full h-full min-h-[200px] bg-green-400">
            <SocialMedias />
          </div>
          <div className="w-full h-full min-h-[200px] bg-cyan-400  md:col-span-2">
            <SocialMedias />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
