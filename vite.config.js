const path = require("path");
const { defineConfig } = require("vite");
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "VueImageDropForm",
      fileName: (format) => `vue-image-drop-form.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()]
});