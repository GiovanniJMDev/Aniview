import { useState, useEffect, useRef } from "react";
import MessageList from "../../components/MessageList/MessageList";
import MessageInput from "../../components/MessageInput/MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      text: newMessage,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    try {
      const response = await fetch('http://localhost:8080/api/groq/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: newMessage })
      });

      const data = await response.json();
      
      const aiMessage = {
        text: data.response,
        isUser: false
      };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-start items-center flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] rounded-2xl drop-shadow-lg overflow-hidden bg-white">
        <h1 className="text-3xl font-bold w-full border py-4 text-center bg-white z-10 shadow-md">
          Anichat
        </h1>
        <MessageList messages={messages} messagesEndRef={messagesEndRef} />
        <MessageInput 
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
          handleKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default Chat;