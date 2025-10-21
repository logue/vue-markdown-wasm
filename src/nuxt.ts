import VueMarkdown, { install } from './index';

// @ts-ignore - Nuxt環境でのみ利用可能
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp: any) => {
  // Vue 3の場合はinstall関数を使用
  if ('app' in nuxtApp.vueApp) {
    install(nuxtApp.vueApp);
  } else {
    // Vue 2の場合は直接コンポーネントを登録
    nuxtApp.vueApp.component('VueMarkdown', VueMarkdown);
  }
});
