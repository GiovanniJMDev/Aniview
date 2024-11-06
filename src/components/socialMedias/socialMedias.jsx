import icons from "../../assets/icon/index";
const SocialMedias = () => {
  return (
    <>
      <h2 className="text-center font-bold text-2xl">Social Medias</h2>
      <div className=" flex justify-evenly  md:justify-center md:gap-10">
        <button className="aspect-square h-fit p-2 rounded-full bg-onix"><icons.animeIcon fill={"white"} /></button>
        <button className="aspect-square h-fit p-2 rounded-full bg-onix"><icons.animeIcon fill={"white"}/></button>
        <button className="aspect-square h-fit p-2 rounded-full bg-onix"><icons.animeIcon fill={"white"}/></button>
      </div>
    </>
  );
};

export default SocialMedias;
