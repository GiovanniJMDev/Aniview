import icons from "../../assets/icon/index";

const MessageInput = ({ newMessage, setNewMessage, sendMessage, handleKeyPress }) => {
  return (
    <div className="w-full p-4 border-t border-gray-500 bg-white">
      <div className="flex gap-2 items-center ">
        <button className="h-full aspect-square flex items-center justify-center rounded-full bg-medium-purple hover:bg-dark-purple  transition-all duration-300">
            <icons.clipIcon fill="white" className="p-2" />
        </button>
        <input 
          type="text" 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un mensaje..."
          className="flex-1 px-4 py-2 border border-gray-500 focus:border-gray-800  rounded-full focus:outline-none transition-all duration-300"
        />
        <button 
          onClick={sendMessage}
          className="bg-medium-purple text-white px-4 py-2 rounded-full hover:bg-dark-purple transition-all duration-300"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default MessageInput; 