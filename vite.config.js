import { defineConfig } from "vite";

export default defineConfig({
  // Vite Configuration options can be added here
  base: "./",
  plugins: [],
  server: {
    cors: {
      origin: [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://comicvine.gamespot.com/api/",
      ],
      methods: ["GET", "POST"], // Allowed HTTP methods
      credentials: true,
    },
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "access-control-allow-headers": "application/json",
    },
  },
});
