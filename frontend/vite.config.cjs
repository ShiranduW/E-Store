const path = require("path");
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc");

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

