/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que las rutas a tus archivos de React están correctas
  ],
  theme: {
    extend: {
      colors: {
        // Define tu color personalizado aquí
        "medium-purple": "#6200b3",
        "dark-purple": "#2a014c",
        "raspberry-red": "#ce2d4f",
        "dark-raspberry-red": "#972039",
        onix: "#32373b",
      },
      width: {
        22: "5.5rem", // Define solo el valor, sin el prefijo `width:`
      },
    },
  },
  plugins: [],
};
