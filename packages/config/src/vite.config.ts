import type { UserConfig as ViteUserConfig } from "vite";
import unocss from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { unoConfig } from "./style";

const viteConfig: ViteUserConfig = {
  plugins: [unocss(unoConfig), sveltekit()],
};

export default viteConfig;
