import React, { useState, useEffect } from "react";
import dataUser from "../../data/user.json";

const ProfileForm = () => {
  // Estado para manejar los datos editables
  const [formData, setFormData] = useState(dataUser);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const filteredData = { ...dataUser };
    delete filteredData.created_at;
    delete filteredData.updated_at;
    setFormData(filteredData);
    // Aquí puedes usar filteredData según sea necesario
  }, []);

  // Estado para controlar si los inputs están bloqueados

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Alternar el modo editable
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Encabezado fijo con botón para alternar el modo */}
      <div className="flex justify-between items-center px-4 py-2 sticky top-0 bg-white bg-white z-10 shadow-md">
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
      <div className="flex-grow overflow-auto flex flex-col items-center w-full gap-4 p-4">
        <img
          src="https://avatarfiles.alphacoders.com/375/thumb-1920-375953.png"
          alt="avatar"
          className=" w-full max-w-40 rounded-3xl object-cover aspect-square"
        />

        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-1 w-full">
            <label
              htmlFor={key}
              className="text-sm font-medium yearStarted capitalize"
            >
              {key.replace(/_/g, " ")}{" "}
              {/* Formatea las claves para mostrar nombres legibles */}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              readOnly={!isEditable} // Bloquear o desbloquear los inputs
              className={`border rounded px-2 py-1 focus:outline-none ${
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
