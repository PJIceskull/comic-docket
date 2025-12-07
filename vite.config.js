import { defineConfig } from "vite";
import vitePluginSftp from "vite-plugin-sftp";

export default defineConfig({
  // Vite Configuration options can be added here
  base: "./",
  plugins: [vitePluginSftp()],
  server: {
    cors: {
      origin: ["http://localhost:3000", "https://comicvine.gamespot.com/api/"],
      methods: ["GET", "POST"], // Allowed HTTP methods
      credentials: true,
    },
  },
});
