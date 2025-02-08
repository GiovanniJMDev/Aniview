/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Agrega todas las variables que usas
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
