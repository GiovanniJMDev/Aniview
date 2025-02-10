import { useState, useEffect } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/users/me`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario");
        }
        const data = await response.json();

        // Eliminar propiedades no necesarias, incluida "id"
        const { id, ...filteredData } = data;

        setFormData(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="h-full w-full flex flex-col">
      {/* Encabezado fijo con botón para alternar edición */}
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-10 shadow-md">
        <h3 className="text-xl font-bold text-black">Profile</h3>
        <button
          onClick={toggleEditable}
          className={`px-3 py-1 text-sm font-medium rounded ${
            isEditable
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          {isEditable ? "Lock" : "Edit"}
        </button>
      </div>

      {/* Contenido del formulario */}
      <div className="grow overflow-auto flex flex-col items-center w-full gap-4 p-4">
        <img
          src="https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png"
          alt="avatar"
          className="w-full max-w-40 rounded-3xl object-cover aspect-square"
        />

        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-1 w-full">
            <label htmlFor={key} className="text-sm font-medium capitalize">
              {key.replace(/_/g, " ")}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              readOnly={!isEditable}
              className={`border rounded px-2 py-1 focus:outline-hidden ${
                isEditable
                  ? "border-gray-300 focus:ring-2 focus:ring-blue-500"
                  : "bg-gray-100 border-gray-200"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;
