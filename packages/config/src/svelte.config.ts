import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import type { Config } from "@sveltejs/kit";

const config: Config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
  },
};

export default config;