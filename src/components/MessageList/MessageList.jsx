import PropTypes from "prop-types";
import Message from "../Message/Message";

const MessageList = ({ messages, messagesEndRef }) => {
  return (
    <div className="flex-1 w-full overflow-y-auto py-4 px-4 md:px-6 lg:px-8 flex flex-col gap-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.shape({
    map: PropTypes.func,
  }),
  messagesEndRef: PropTypes.ref,
};

export default MessageList;
