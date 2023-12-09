import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { setupDevToolsUI } from "./devtools";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-server-extension",
    configKey: "myModule",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    devtools: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
