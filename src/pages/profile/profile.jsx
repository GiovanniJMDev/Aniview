import BadgesContainer from "../../components/badges/badgesContainer";
import WatchingList from "../../components/profile/watchingList";
import GraphCalendar from "../../components/calendar/graphCalendar";
// import SocialMedias from "../../components/socialMedias/socialMedias";
import ProfileForm from "../../components/profile/profileForm";
const Profile = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-start py-4 lg:py-0 lg:justify-center items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] md:max-h-dvh lg:max-h-[90dvh]  drop-shadow-lg overflow-auto">
        <div className="w-full lg:h-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  lg:grid-rows-4 gap-4">
          {/* Celdas vacías */}
          {/* Celda vacía */}
          <div className="aspect-square lg:aspect-auto overflow-hidden bg-white w-full rounded-2xl lg:row-span-4 row-span-1">
            <ProfileForm />
          </div>
          {/* Badges antes de Watching en tablet */}
          <div className="aspect-square lg:aspect-auto overflow-hidden bg-white w-full rounded-2xl  lg:row-span-2 md:order-1">
            <BadgesContainer />
          </div>
          <div className="aspect-square md:aspect-auto overflow-hidden bg-white w-full rounded-2xl md:col-span-2 lg:row-span-2 md:order-2">
            <WatchingList />
          </div>
          <div className="aspect-square md:aspect-auto overflow-hidden bg-white w-full rounded-2xl md:col-span-2 lg:col-span-3 lg:row-span-2 md:order-3">
            <GraphCalendar />
          </div>
          {/* <div className="aspect-square lg:aspect-auto bg-gray-200 border border-blue-500 lg:hidden md:order-4"></div>
          <div className="aspect-square lg:aspect-auto bg-gray-200 border border-blue-500 lg:hidden md:order-4"></div>
          <div className="aspect-square lg:aspect-auto bg-gray-200 border border-blue-500 lg:hidden md:order-4"></div>
          <div className="aspect-square lg:aspect-auto bg-gray-200 border border-blue-500 lg:hidden md:order-4"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
