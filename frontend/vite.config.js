import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "038a-2401-4900-1c82-e58e-759f-eb8a-67ce-fd00.ngrok-free.app",
    ],
    port: 5173,
  },
});

// First run your localhost Website,
// then run this command with your port number:
// ngrok http http://localhost:8080

