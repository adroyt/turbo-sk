import { viteConfig } from "@packages/config";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  ...viteConfig,
  plugins: [...viteConfig.plugins!, sveltekit()],
};

export default config;
