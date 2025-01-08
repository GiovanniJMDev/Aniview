
const MessageItemList = () => {
  return (
    <div className="flex gap-4 justify-center items-center w-full h-full border-b-2 border-gray-300 pb-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbNORSuTK5tL1wwBGT7OKvm7QSOvhIEu9RA&s"
        alt="Heavenly Delusion"
        className="h-full max-h-24 w-auto aspect-video rounded-lg bg-center object-cover"
      />
      <div className="flex-1 flex flex-col justify-between h-full bg-red-400">
        <h3 className="flex px-4 flex-1 text-gray-800 text-xl text-center font-semibold">
          Heavenly Delusion
        </h3>
        <div className="flex flex-wrap justify-center gap-2 rounded-lg border border-gray-300 p-4 box-border bg-gray-50 w-full">
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
            Drama
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
            Adventure
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
            Fantasy
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
            Romance
          </span>
        </div>{" "}
      </div>
      <div className="text-gray-800 text-right text-3xl">9.2 </div>
    </div>
  );
};

export default MessageItemList;
