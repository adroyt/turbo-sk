import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

// :highlight: Needs to be outside src for `svelte-kit sync` to work

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
  },
};

export default config;
