import icons from "../../assets/icon";

const SocialMedias = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Encabezado fijo */}
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">Social Medias</h3>
      </div>
      <div className="flex-grow overflow-auto flex flex-col  w-full gap-2  p-2">
        <div className=" rounded-2xl w-full px-4 py-2 gap-2 shadow-md border border-gray-300 h-fit flex flex-row items-center justify-start">
          <div className=" bg-onix rounded-xl w-fit h-fit p-2">
            <icons.xIcon />
          </div>
          <span>Paco</span>
        </div>
        <div className=" rounded-2xl w-full px-4 py-2 gap-2 shadow-md border border-gray-300 h-fit flex flex-row items-center justify-start">
          <div className=" bg-onix rounded-xl w-fit h-fit p-2">
            <icons.instagramIcon />
          </div>
          <span>Paco</span>
        </div>
        <div className=" rounded-2xl w-full px-4 py-2 gap-2 shadow-md border border-gray-300 h-fit flex flex-row items-center justify-start">
          <div className=" bg-onix rounded-xl w-fit h-fit p-2">
            <icons.facebookIcon />
          </div>
          <span>Paco</span>
        </div>
        <div className=" rounded-2xl w-full px-4 py-2 gap-2 shadow-md border border-gray-300 h-fit flex flex-row items-center justify-start">
          <div className=" bg-onix rounded-xl w-fit h-fit p-2">
            <icons.facebookIcon />
          </div>
          <span>Paco</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
