import { defineConfig } from "vite";

export default defineConfig({
  // Vite Configuration options can be added here
  base: "./",
  plugins: [],
  server: {
    cors: {
      origin: ["http://localhost:3000", "https://comicvine.gamespot.com/api/"],
      methods: ["GET", "POST"], // Allowed HTTP methods
      credentials: true,
    },
  },
});
