import icons from "../../assets/icon";

const Profile = () => {
  return (
    <div className="bg-light-purple min-h-fit h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-16 sm:grid-rows-12 md:grid-rows-8 lg:grid-rows-4 p-4  gap-4 ">
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:row-span-4"></div>
      <div
        className="min-h-[20vh] border border-black w-full rounded-2xl lg:row-span-2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl"></div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl"></div>
      {/*Github Calendar */}
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:col-span-2"></div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:col-span-2 lg:row-span-2">
        {" "}
      </div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:row-span-2 flex flex-col items-center">
        {" "}
        <h3 className="text-center text-xl font-bold text-black py-2">
          Badges
        </h3>
        <div className="w-full h-full grid grid-cols-4 grid-rows-3  place-items-center">
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <div>
            {" "}
            <icons.animeIcon />
            <p>Medalla</p>
          </div>{" "}
          <button className="bg-gray-600 rounded-lg py-2 px-4 w-fit my-3 col-span-4">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
