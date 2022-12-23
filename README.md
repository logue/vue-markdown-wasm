# vue-markdown-wasm

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vue-markdown-wasm/badge)](https://www.jsdelivr.com/package/npm/vue-markdown-wasm)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-codemirror6.svg?style=flat)](https://www.npmjs.com/package/vue-markdown-wasm)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vue-markdown-wasm/file/README.md)
[![npm version](https://img.shields.io/npm/v/vue-markdown-wasm.svg)](https://www.npmjs.com/package/vue-markdown-wasm)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vue-markdown-wasm)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

[Rasmus](https://github.com/rsms)'s [markdown-wasm](https://github.com/rsms/markdown-wasm/) for vue 2 & 3.

## Usage

```vue
<script setup>
import VueMarkdown from 'vue-markdown-wasm';

/** Demo text */
const input = ref(`# The quick brown fox jumps over the lazy dog.

[Lorem ipsum](https://www.lipsum.com/) dolor sit amet, **consectetur** adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
</script>

<template>
  <vue-markdown v-model="input" />
</template>
```

See [realtime markdown editor source](./dev/DemoPage.vue) using with [vue-codemirror6](https://github.com/logue/vue-codemirror6).

## Props

| Props   | Type         | Default | Information                                                                                 |
| ------- | ------------ | ------- | ------------------------------------------------------------------------------------------- |
| tag     | string       | article | Markdown wasm wrapping tag. Default is `article` because it may contain `h1` and `h2` tags. |
| options | ParseOptions | {}      | see [markdown-wasm's api](https://github.com/rsms/markdown-wasm/#api)                       |

## LICENSE

[MIT](LICENSE)

&copy; 2022 by Logue.
