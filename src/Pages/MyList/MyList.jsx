import { useState, useEffect } from "react";
import ColumnList from "./ColumnList";
import RowList from "./RowList";
import icons from "../../assets/icon/index";
import ModalAnimeList from "../../Components/Modal/ModalAnimeList";
import { useUser } from "../../Context/UserContext";
const MyList = () => {
  const { user } = useUser(); // Usamos el hook `useUser` para obtener el usuario desde el contexto
  const [animeLists, setAnimeLists] = useState([]);

  useEffect(() => {
    const fetchAnimeLists = async () => {
      if (!user) {
        // setError("No se pudo obtener el usuario");
        return;
      }

      // setLoading(true);
      // setError(null);

      try {
        // Hacemos el fetch usando el id del usuario
        const response = await fetch(
          `http://localhost:8080/api/anime-lists/user/${user.id}`,
          {
            method: "GET",
            credentials: "include", // Asegúrate de incluir las cookies si son necesarias
          }
        );

        if (!response.ok) {
          throw new Error("No se pudieron obtener las listas de anime");
        }

        const data = await response.json();

        // Puedes formatear los datos si es necesario, o directamente asignarlos
        setAnimeLists(data);
      } catch (err) {
        console.error("Error al obtener las listas:", err);
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    if (user) {
      fetchAnimeLists(); // Solo se llama si el usuario está disponible
    }
  }, [user]); // Dependemos de `user`, se ejecuta cada vez que `user` cambia

  const [isGridView, setIsGridView] = useState(() => {
    // Retrieve the view type from localStorage
    const savedView = localStorage.getItem("viewType");
    return savedView ? JSON.parse(savedView) : true; // Default to grid view if not found
  });
  const [selectedList, setSelectedList] = useState(
    animeLists.length > 0 ? animeLists[0] : null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Save the view type to localStorage whenever it changes
    localStorage.setItem("viewType", JSON.stringify(isGridView));
  }, [isGridView]);

  return (
    <div className="bg-light-purple h-full w-full flex items-center justify-center flex-col">
      <div className="flex justify-center items-start flex-col w-[95%] max-w-[90dvw] h-full max-h-[90dvh] bg-transparent rounded-2xl drop-shadow-lg overflow-hidden">
        <div className="w-full py-4 bg-white z-20 shadow-md flex flex-row justify-between items-center gap-4 px-8">
          <div className="col-span-1" />
          <h1 className="col-span-8 text-3xl font-bold text-center">
            My Lists
          </h1>
          <button
            onClick={() => setIsGridView(!isGridView)}
            className="col-span-1 px-4 py-1.5 bg-gray-500 w-fit rounded-sm flex items-center justify-center transition-transform duration-300 ease-in-out"
          >
            {isGridView ? (
              <icons.myListIcon
                width="1.5em"
                height="1.5em"
                stroke="white"
                className="transform transition-transform duration-500 ease-in-out"
              />
            ) : (
              <icons.myListIcon
                width="1.5em"
                height="1.5em"
                stroke="white"
                className="transform transition-transform duration-500 ease-in-out"
                style={{ transform: "rotate(90deg)" }}
              />
            )}
          </button>
        </div>

        <div className="w-full grow flex flex-col overflow-auto bg-white">
          {isGridView ? (
            <ColumnList lists={animeLists} openModal={toggleModal} />
          ) : (
            <RowList
              lists={animeLists}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
              openModal={toggleModal}
            />
          )}
        </div>
      </div>{" "}
      <ModalAnimeList isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default MyList;
