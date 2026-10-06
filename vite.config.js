import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo name for GitHub Pages: https://gdevin77.github.io/autonova_design/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/autonova_design/" : "/",
  plugins: [react()]
});
