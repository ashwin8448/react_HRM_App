import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/react_HRM_App/";
    return {
      ...config,
      define: {
        "import.meta.env.VITE_API_ENDPOINT": JSON.stringify(
          process.env.VITE_API_ENDPOINT
        ),
      },
    };
  }
  return config;
});
