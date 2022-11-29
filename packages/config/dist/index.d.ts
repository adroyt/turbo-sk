import * as _sveltejs_kit from "@sveltejs/kit";
import { UserConfig } from "vite";

/** @type {import('@sveltejs/kit').Config} */
declare const config: _sveltejs_kit.Config;

declare const viteConfig: UserConfig;

export { config as svelteConfig, viteConfig };
