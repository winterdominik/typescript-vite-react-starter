import path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import StylelintPlugin from "vite-plugin-stylelint";

function removeMSW() {
  return {
    name: "remove-msw",
    resolveId(source) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions) {
      const outDir = outputOptions.dir;
      const msw = path.resolve(outDir, "mockServiceWorker.js");
      fs.rm(msw, () =>
        console.log("Removed from build folder mockServiceWorker.js")
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeMSW(), eslintPlugin(), StylelintPlugin()],
});
