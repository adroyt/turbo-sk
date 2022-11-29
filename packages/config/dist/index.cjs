"use strict";

const adapter = require("@sveltejs/adapter-auto");
const preprocess = require("svelte-preprocess");
const unocss = require("unocss/vite");
const vite = require("@sveltejs/kit/vite");
const style = require("./style.cjs");
require("unocss");

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
  },
};
const config$1 = config;

const viteConfig = {
  plugins: [unocss(style.unoConfig), vite.sveltekit()],
};
const viteConfig$1 = viteConfig;

exports.svelteConfig = config$1;
exports.viteConfig = viteConfig$1;
