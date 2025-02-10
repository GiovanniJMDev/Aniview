import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [animeLists, setAnimeLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        // Obtener información del usuario
        const userResponse = await fetch("http://localhost:8080/api/users/me", {
          method: "GET",
          credentials: "include",
        });

        if (!userResponse.ok) {
          throw new Error("No se pudo obtener la información del usuario");
        }

        const userData = await userResponse.json();
        console.log("Usuario obtenido:", userData);

        if (!userData.id) {
          throw new Error("El usuario no tiene un ID válido");
        }

        setUser(userData);

        // Obtener listas del usuario solo si el ID es válido
        const listsResponse = await fetch(
          `http://localhost:8080/api/anime-lists/user/${userData.id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!listsResponse.ok) {
          throw new Error("No se pudieron obtener las listas del usuario");
        }

        const listsData = await listsResponse.json();

        // Formatear los datos
        const formattedLists = listsData.map((list) => ({
          id: list.id,
          listType: list.listType,
        }));

        console.log("Listas obtenidas:", formattedLists);
        setAnimeLists(formattedLists);
      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [user]); // Se ejecuta solo si `user` es null

  return (
    <UserContext.Provider value={{ user, animeLists, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
