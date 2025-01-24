import PropTypes from "prop-types";
import Aniview_AI from "../../assets/img/Aniview_AI.jpg";
import MessageItemList from "./MessageItemList";
const Message = ({ message }) => {
  // Verifica si el tipo de mensaje es "user"
  if (message.type === "user") {
    return (
      <div className="flex justify-end items-start gap-2 drop-shadow-lg">
        <div className="bg-blue-100 p-3 rounded-lg max-w-[80%] lg:max-w-[70%]">
          <p className="break-words whitespace-pre-wrap">{message.text}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Verifica si el tipo de mensaje es "ai"
  if (message.type === "ai") {
    return (
      <div className="flex justify-start items-start gap-2 drop-shadow-lg">
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src={Aniview_AI}
            alt="AI avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] lg:max-w-[70%]">
          <p className="break-words whitespace-pre-wrap">{message.text}</p>
        </div>
      </div>
    );
  }

  if (message.type === "anime") {
    return (
      <>
        <div className="flex justify-start items-start gap-2 drop-shadow-lg">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={Aniview_AI}
              alt="AI avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] lg:max-w-[70%]">
            <p className="break-words whitespace-pre-wrap">{message.text}</p>
          </div>
        </div>
        <div className="flex justify-start items-start gap-2 drop-shadow-lg">
          <div className="w-8 h-8 rounded-full  overflow-hidden"></div>
          <div className="bg-gray-100 p-3 rounded-lg w-full max-w-[80%] lg:max-w-[70%] ">
            <div className=" w-full h-fit">
              <h3 className="text-black text-lg md:text-3xl font-bold px-4 pb-2 text-center truncate whitespace-nowrap overflow-hidden text-ellipsis">
                Dandadan
              </h3>
            </div>{" "}
            <div className="flex flex-col md:flex-row gap-2 w-full h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeVVUgDwVnzVOoPzEyjPnRz0QTXw8xSB86g&s"
                alt="Dandadan"
                className=" rounded-lg aspect-video h-full md:w-1/2 object-cover bg-center shadow-md"
              />
              {/* Información del anime */}
              <div className="p-4 bg-gray-50 border min-h-full  w-full md:w-1/2 border-gray-300 rounded-lg shadow-md grow md:aspect-video overflow-y-auto">
                <p className="text-lg">
                  <strong>Platforms:</strong> Netflix, Hulu, Amazon Prime
                </p>
                <p className="text-lg mt-2">
                  <strong>Years:</strong> 2024 - En emisión
                </p>
                <p className="text-lg mt-2">
                  <strong>Seasons:</strong> 1
                </p>
                <p className="text-lg mt-2">
                  <strong>Total number of episodes:</strong> 12
                </p>
                <p className="text-lg mt-2">
                  {" "}
                  <strong>Rating:</strong> 9.7/10
                </p>
                <div className="w-full h-fit flex flex-col md:flex-row justify-center items-center gap-2 py-2">
                  <button className="bg-medium-purple px-4 py-2 rounded-lg text-white">
                    Añadir a la lista
                  </button>
                  <button className="bg-medium-purple px-4 py-2 rounded-lg text-white">
                    Ver información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (message.type === "list") {
    return (
      <>
        <div className="flex justify-start items-start gap-2 drop-shadow-lg">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={Aniview_AI}
              alt="AI avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] lg:max-w-[70%]">
            <p className="break-words whitespace-pre-wrap">{message.text}</p>
          </div>
        </div>
        <div className="flex justify-start items-start gap-2 drop-shadow-lg">
          <div className="w-8 h-8 rounded-full  overflow-hidden"></div>

          <div className="bg-gray-100 p-3 rounded-lg w-full h-fit max-w-[80%] lg:max-w-[70%] flex flex-col gap-4">
            <div className="flex justify-center items-center w-full h-full">
              <h2 className="p-2 text-gray-800 text-3xl text-center font-semibold">
                Lista de Terror
              </h2>
            </div>
            <MessageItemList />
            <MessageItemList />
            <MessageItemList />
            <MessageItemList />
            <MessageItemList />
          </div>
        </div>
      </>
    );
  }

  // Si no es ni "user" ni "ai", no muestra nada
  return <div></div>;
};

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Message;
