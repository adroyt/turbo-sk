import type { UserConfig as ViteUserConfig } from "vite";
import unocss from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";

const viteConfig: ViteUserConfig = {
  plugins: [unocss(), sveltekit()],
};

export default viteConfig;
