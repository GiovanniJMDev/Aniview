import Aniview_AI from "../../assets/img/Aniview_AI.jpg";


const Message = ({ message }) => {
  return message.isUser ? (
    <div className="flex justify-end items-start gap-2 drop-shadow-lg">
      <div className="bg-blue-100 p-3 rounded-lg max-w-[70%]">
        <p className="break-words whitespace-pre-wrap">{message.text}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
        <img src="https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png" alt="User avatar" className="w-full h-full object-cover"/>
      </div>
    </div>
  ) : (
    <div className="flex justify-start items-start gap-2 drop-shadow-lg">
      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
        <img src={Aniview_AI} alt="AI avatar" className="w-full h-full object-cover"/>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
        <p className="break-words whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default Message; 