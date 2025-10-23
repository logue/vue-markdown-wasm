import VueMarkdown, { install } from './index';

// @ts-ignore - Only available in Nuxt environment
import { defineNuxtPlugin } from '#app';

/**
 * Nuxt plugin for vue-markdown-wasm
 * Automatically registers the VueMarkdown component globally
 */
export default defineNuxtPlugin((nuxtApp: any) => {
  // Use install function for Vue 3
  if ('app' in nuxtApp.vueApp) {
    install(nuxtApp.vueApp);
  } else {
    // Register component directly for Vue 2
    nuxtApp.vueApp.component('VueMarkdown', VueMarkdown);
  }
});
