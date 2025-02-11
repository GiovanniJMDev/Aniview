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
        // Comprobar si ya existe información del usuario en localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          await fetchAnimeLists(parsedUser.id); // Obtener las listas del usuario si ya está almacenado
          return; // No hacemos más solicitudes si ya tenemos un usuario almacenado
        }

        // Si no está en localStorage, hacer la solicitud
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

        // Almacenar al usuario en localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);

        // Obtener listas del usuario
        await fetchAnimeLists(userData.id);
      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAnimeLists = async (userId) => {
      try {
        const listsResponse = await fetch(
          `http://localhost:8080/api/anime-lists/user/${userId}`,
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
        console.error("Error al obtener las listas:", error.message);
        setError(error.message);
      }
    };

    if (!user) {
      fetchUser();
    } else {
      setLoading(false); // Si ya hay un usuario almacenado, no cargamos de nuevo
    }
  }, [user]); // Se ejecuta solo si `user` es null

  return (
    <UserContext.Provider value={{ user, animeLists, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
