import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/style"],
  clean: true,
  declaration: true,
  externals: [
    "vite",
    "unocss",
    "unocss/vite",
    "@sveltejs/kit",
    "@sveltejs/kit/vite",
    "@sveltejs/adapter-auto",
    "svelte-preprocess",
  ],
  rollup: {
    emitCJS: true,
  },
});
