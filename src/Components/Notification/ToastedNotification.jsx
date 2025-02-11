import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastedNotification = ({ type, message, error, statusCode }) => {
  // Mostrar notificación dependiendo del tipo de mensaje

  console.log("error:", error);
  const showNotification = () => {
    if (type === "success") {
      toast.success(
        `¡Éxito! Código de respuesta: ${statusCode || 200} - ${message}`,
        {
          position: "top-right",
          autoClose: 5000, // 5 segundos
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }
      );
    } else if (type === "error") {
      toast.error(
        `Error. Código: ${statusCode || 500} - ${
          message || error || "Error desconocido"
        }`,
        {
          position: "top-right",
          autoClose: 5000, // 5 segundos
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        }
      );
    }
  };

  React.useEffect(() => {
    showNotification(); // Mostrar la notificación al renderizar el componente
  }, [type, message, error, statusCode]);

  return <ToastContainer />;
};

export default ToastedNotification;
