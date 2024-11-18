import BadgesContainer from "../../components/badges/badgesContainer";
import WatchingList from "../../components/profile/watchingList";
import GraphCalendar from "../../components/calendar/graphCalendar";
const Profile = () => {
  return (
    <div className="bg-light-purple min-h-fit h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-16 sm:grid-rows-12 md:grid-rows-8 lg:grid-rows-4 p-4  gap-4 ">
      <div
        className="min-h-[20vh] border border-black w-full rounded-2xl lg:row-span-2 bg-cover bg-center aspect-square md:aspect-auto"
        style={{
          backgroundImage:
            "url('https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png')",
        }}
      ></div>{" "}
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:row-span-2">
        Social networks
      </div>
      {/*Github Calendar */}
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:col-span-2 lg:row-span-2 overflow-hidden">
        <GraphCalendar />{" "}
      </div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:row-span-2">
        Profile
      </div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl  lg:col-span-2">
        <WatchingList />
      </div>{" "}
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl  lg:row-span-2 flex flex-col items-center">
        <BadgesContainer />
      </div>
      <div className="min-h-[20vh] bg-white border border-black w-full rounded-2xl lg:col-span-2">
        Plan to watch List
      </div>{" "}
    </div>
  );
};

export default Profile;
