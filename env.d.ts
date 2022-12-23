/* eslint-disable */
/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_MARKDOWN_WASM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
