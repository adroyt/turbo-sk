import { defineConfig } from "tsup";
import { devDependencies } from "./package.json";

export default defineConfig({
  // entry: ["src/index.ts"],
  entry: {
    index: "src/index.ts",
    uno: "src/uno.config.ts",
  },
  outDir: "dist",
  splitting: false,
  bundle: true,
  minify: false,
  // sourcemap: true,
  format: [/* "cjs", */ "esm"],
  dts: true,
  platform: "browser",
  external: Object.keys(devDependencies),
  clean: true,
});
