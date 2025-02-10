import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [animeLists, setAnimeLists] = useState([]); // Estado para las listas de anime
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
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
        console.log(userData);
        setUser(userData);

        // Obtener listas del usuario
        const listsResponse = await fetch(
          `http://localhost:8080/api/anime-lists/user/${userData.id}`, // Asegúrate de usar el ID correcto del usuario
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!listsResponse.ok) {
          throw new Error("No se pudieron obtener las listas del usuario");
        }
        const listsData = await listsResponse.json();

        // Almacenar solo los IDs y listType
        const formattedLists = listsData.map((list) => ({
          id: list.id,
          listType: list.listType,
        }));
        console.log(formattedLists);
        setAnimeLists(formattedLists);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Ejecuta la carga una sola vez

  return (
    <UserContext.Provider value={{ user, animeLists, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
