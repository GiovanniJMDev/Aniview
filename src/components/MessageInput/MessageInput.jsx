import icons from "../../assets/icon/index";

const MessageInput = ({
  newMessage,
  setNewMessage,
  sendMessage,
  handleKeyPress,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      e.target.rows = 1; // Reset rows to 1 after sending
    }
  };

  const adjustTextareaHeight = (textarea, content) => {
    // Create temporary element to measure text width
    const temp = document.createElement('div');
    temp.style.cssText = window.getComputedStyle(textarea).cssText;
    temp.style.height = 'auto';
    temp.style.position = 'absolute';
    temp.style.visibility = 'hidden';
    temp.style.whiteSpace = 'pre-wrap';
    temp.style.wordBreak = 'break-word';
    temp.style.width = textarea.clientWidth + 'px';
    temp.textContent = content;
    document.body.appendChild(temp);
    
    // Calculate rows needed
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
    const rows = Math.ceil(temp.scrollHeight / lineHeight);
    document.body.removeChild(temp);

    return Math.min(Math.max(rows, 1), 5);
  };

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.rows = adjustTextareaHeight(textarea, textarea.value);
    setNewMessage(textarea.value);
  };

  const handleSendClick = () => {
    sendMessage();
    const textarea = document.querySelector('textarea');
    if (textarea) textarea.rows = 1; // Reset rows to 1 after sending
  };

  return (
    <div className="w-full border-t border-gray-500 bg-white h-fit">
      <div className="flex flex-col box-border py-4 px-2 h-full">
        <div className="flex justify-between items-end w-full">
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-medium-purple hover:bg-dark-purple transition-all duration-300">
            <icons.clipIcon fill="white" className="p-2" />
          </button>
          <textarea
            value={newMessage}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-3 py-2 mx-1 min-h-[40px] border border-gray-500 focus:border-gray-800 rounded-2xl focus:outline-none transition-all duration-300 resize-none overflow-y-auto break-words"
            style={{ 
              wordBreak: 'break-word', 
              whiteSpace: 'pre-wrap',
              transition: 'height 3s ease'
            }}
            rows={1}
          />
          <button
            onClick={handleSendClick}
            className="bg-medium-purple text-white px-4 py-2 rounded-full hover:bg-dark-purple transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
