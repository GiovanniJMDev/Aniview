import Message from "../Message/Message";

const MessageList = ({ messages, messagesEndRef }) => {
  return (
    <div className="flex-1 w-full overflow-y-auto py-4 px-8 flex flex-col gap-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
