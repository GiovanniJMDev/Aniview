import BadgesContainer from "../../components/badges/badgesContainer";
import WatchingList from "../../components/profile/watchingList";
import GraphCalendar from "../../components/calendar/graphCalendar";
// import SocialMedias from "../../components/socialMedias/socialMedias";
import ProfileForm from "../../components/profile/profileForm";
const Profile = () => {
  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-start items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-transparent rounded-2xl drop-shadow-lg overflow-auto">
        <div className="w-full lg:h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-16 sm:grid-rows-12 md:grid-rows-8 lg:grid-rows-4 gap-4">
          <div className="aspect-square sm:aspect-auto overflow-hidden bg-white w-full rounded-2xl lg:row-span-4">
            <ProfileForm />
          </div>
          {/*Github Calendar */}
          <div className="aspect-square sm:aspect-auto overflow-hidden bg-white w-full rounded-2xl lg:col-span-2 lg:row-span-2">
            <GraphCalendar />{" "}
          </div>
          <div className="aspect-square sm:aspect-auto overflow-hidden bg-white w-full rounded-2xl lg:row-span-2 flex flex-col items-center">
            <BadgesContainer />
          </div>{" "}
          <div className="aspect-square sm:aspect-auto overflow-hidden bg-white w-full rounded-2xl lg:col-span-3 lg:row-span-2">
            <WatchingList />
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Profile;
