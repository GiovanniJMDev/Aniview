import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const API_AUTH_URL = import.meta.env.VITE_API_AUTH_URL;
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_AUTH_URL}/auth/verify`, {
          credentials: "include", // Importante para enviar cookies al backend
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
