import { useState, useEffect, useRef } from "react";
import MessageList from "../../Components/MessageList/MessageList";
import MessageInput from "../../Components/MessageInput/MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState([
    // {
    //   text: "hola",
    //   type: "user",
    // },
    // {
    //   text: "¡Hola! Soy Aniview_AI, tu asistente de anime y cultura japonesa. ¿En qué puedo ayudarte hoy?",
    //   type: "ai",
    // },
    // {
    //   text: "Q tal?",
    //   type: "user",
    // },
    // {
    //   text: "Hola! ¿Cómo estás? Aniview_AI al servicio, listo para hablar sobre anime y cultura japonesa. ¿Necesitas recomendaciones o información sobre algún anime en particular?",
    //   type: "ai",
    // },
    // {
    //   text: "¿Qué anime me recomiendas ver?",
    //   type: "anime",
    // },
    // {
    //   text: "Anipon es un saludo típico en la cultura del anime.",
    //   type: "list",
    // },
  ]);
  const [newMessage, setNewMessage] = useState("");
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
      type: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/api/groq/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: newMessage }),
      });
      console.log(response);

      const Data = await response.json();

      const aiMessage = {
        text: Data.response,
        type: Data.type || "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
      console.log(messages);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
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
};

export default Chat;
