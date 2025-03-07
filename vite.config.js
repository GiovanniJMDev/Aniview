import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    setupFiles: ["./setupVitest.js"], // Esto asegura que puedes usar test(), expect() y vi
    environment: "happy-dom",
    globals: true, // Esto asegura que puedes usar test(), expect() y vi
  },
  optimizeDeps: {
    include: ["react-toastify"],
  },
});
