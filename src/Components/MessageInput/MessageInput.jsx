import icons from "../../assets/icon/index";
import { useEffect, useState } from "react";

const MessageInput = ({
  newMessage,
  setNewMessage,
  sendMessage,
  handleKeyPress,
}) => {
  const [isRecording, setIsRecording] = useState(false); // Estado para saber si estamos grabando
  const [recognition, setRecognition] = useState(null); // Web Speech API para reconocimiento de voz
  const [timeoutId, setTimeoutId] = useState(null); // ID del temporizador para manejar el silencio
  const [isFinalResult, setIsFinalResult] = useState(false); // Control para saber si el resultado es final

  useEffect(() => {
    // Verificamos si el navegador soporta SpeechRecognition
    if ("webkitSpeechRecognition" in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.continuous = false; // No reconoce de forma continua
      recognitionInstance.interimResults = true; // Permite resultados intermedios mientras se habla
      recognitionInstance.lang = "es-ES"; // Ajusta el idioma si es necesario
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setNewMessage(transcript); // Actualiza el mensaje con la transcripción

        // Si es un resultado final, procedemos con el temporizador
        if (event.results[0].isFinal) {
          setIsFinalResult(true); // Marcar como resultado final

          // Resetear el temporizador cada vez que se detecta una palabra final
          if (timeoutId) clearTimeout(timeoutId);

          // Iniciar un nuevo temporizador de 3 segundos para detener la grabación si no hay más palabras
          const newTimeoutId = setTimeout(() => {
            handleStopRecording(); // Detener la grabación si no hay más palabras
            sendMessage(); // Enviar el mensaje
          }, 3000);

          setTimeoutId(newTimeoutId); // Guardamos el ID del nuevo temporizador
        } else {
          setIsFinalResult(false); // No es un resultado final
        }
      };
      recognitionInstance.onerror = (event) => {
        console.error("Error de reconocimiento de voz:", event.error);
      };
      setRecognition(recognitionInstance); // Guardamos la instancia para usarla después
    } else {
      console.error(
        "El reconocimiento de voz no es soportado en este navegador."
      );
    }
  }, [timeoutId]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      e.target.rows = 1; // Reset rows to 1 after sending
    }
  };

  const handleStartRecording = () => {
    if (recognition) {
      setIsRecording(true);
      recognition.start(); // Comienza la grabación
    }
  };

  const handleStopRecording = () => {
    if (recognition) {
      setIsRecording(false);
      recognition.stop(); // Detiene la grabación
    }
  };

  const adjustTextareaHeight = (textarea, content) => {
    // Create temporary element to measure text width
    const temp = document.createElement("div");
    temp.style.cssText = window.getComputedStyle(textarea).cssText;
    temp.style.height = "auto";
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.whiteSpace = "pre-wrap";
    temp.style.wordBreak = "break-word";
    temp.style.width = textarea.clientWidth + "px";
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
    const textarea = document.querySelector("textarea");
    if (textarea) textarea.rows = 1; // Reset rows to 1 after sending
  };

  return (
    <div className="w-full border-t border-gray-500 bg-white h-fit">
      <div className="flex flex-col box-border py-4 px-2 h-full">
        <div className="flex justify-between items-end w-full">
          <button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            className={`h-10 w-10 flex items-center justify-center rounded-full ${
              isRecording ? "bg-red-500" : "bg-medium-purple"
            } hover:bg-dark-purple transition-all duration-300`}
          >
            {isRecording ? (
              <icons.squareIcon fill="white" className="p-1" />
            ) : (
              <icons.micIcon fill="white" className="p-1" />
            )}
          </button>
          <textarea
            value={newMessage}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-3 py-2 mx-1 min-h-[40px] border border-gray-500 focus:border-gray-800 rounded-2xl focus:outline-hidden transition-all duration-300 resize-none overflow-y-auto break-words"
            style={{
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              transition: "height 3s ease",
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
