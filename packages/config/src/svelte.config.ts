import adapter from "@sveltejs/adapter-auto";
import type { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config: Config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
  },
};

export default config;
