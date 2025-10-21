import { defineNuxtPlugin } from '#app';
import VueMarkdown, { install } from './index';

export default defineNuxtPlugin(nuxtApp => {
  // Vue 3の場合はinstall関数を使用
  if ('app' in nuxtApp.vueApp) {
    install(nuxtApp.vueApp);
  } else {
    // Vue 2の場合は直接コンポーネントを登録
    nuxtApp.vueApp.component('VueMarkdown', VueMarkdown);
  }
});
