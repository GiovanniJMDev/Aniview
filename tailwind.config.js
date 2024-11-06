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
        "light-purple": "#bd82f8",
        "medium-purple": "#6200b3",
        "dark-purple": "#2a014c",
        "raspberry-red": "#ce2d4f",
        "dark-raspberry-red": "#972039",
        onix: "#32373b",
        "blue-button": "#0C8CE9",
        "light-gray": "#d9d9d9",
      },
      width: {
        22: "5.5rem", // Define solo el valor, sin el prefijo `width:`
      },
      animation: {
        "infinite-scroll": "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      translate: {
        'banner': '150%',
      }
    },
  },
  plugins: [],
};
