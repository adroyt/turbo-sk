import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import unocss from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { unoConfig } from "./style.mjs";
import "unocss";

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
  },
};
const config$1 = config;

const viteConfig = {
  plugins: [unocss(unoConfig), sveltekit()],
};
const viteConfig$1 = viteConfig;

export { config$1 as svelteConfig, viteConfig$1 as viteConfig };
