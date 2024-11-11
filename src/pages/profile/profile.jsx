import SocialMedias from "../../components/socialMedias/socialMedias";
import Badge from "../../components/badges/badge";

const Profile = () => {
  const items = new Array(9).fill(null); // Crea un array de 9 elementos vacíos

  return (
    <div className="bg-red-100 h-full w-full overflow-y-auto">
      <div className=" min-h-fit h-full w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 grid-rows-9 sm:grid-rows-6 md:grid-rows-3  gap-4 p-4">
        {items.map((_, index) => (
          <div
            key={index}
            className="min-h-[30vh] bg-white border border-black  w-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
