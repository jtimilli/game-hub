import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    define: {
      GAMES_API_KEY: JSON.stringify({ VITE_API_KEY: env.VITE_API_KEY }),
    },
  };
});
