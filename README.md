# vue-markdown-wasm

<p align="center">
<img src="./src-docs/assets/logo.png" alt="logo" width="300" height="300" />
</p>

[![jsdelivr CDN](https://data.jsdelivr.com/v1/package/npm/vue-markdown-wasm/badge)](https://www.jsdelivr.com/package/npm/vue-markdown-wasm)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-markdown-wasm.svg?style=flat)](https://www.npmjs.com/package/vue-markdown-wasm)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/vue-markdown-wasm/file/README.md)
[![npm version](https://img.shields.io/npm/v/vue-markdown-wasm.svg)](https://www.npmjs.com/package/vue-markdown-wasm)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/logue/vue-markdown-wasm)
[![Twitter Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://twitter.com/logue256)

Vue2 and 3 component for [markdown-wasm](https://github.com/logue/markdown-wasm/).

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

See [Vue Markdown Wasm Live Preview](https://logue.dev/vue-markdown-wasm/) and [source code](./src-docs/DemoPage.vue).

### CDN Usage

Load markdown-wasm and vue demi separately.

```html
<!-- Vue core -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js"></script>
<!-- Markdown wasm -->
<script src="https://cdn.jsdelivr.net/npm/vue-demi@0.14.5/lib/index.iife.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@logue/markdown-wasm@1.4.10/dist/markdown.iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-markdown-wasm@0.3.10/dist/index.iife.js"></script>
<script>
  const { createApp } = Vue;
  app.component(VueMarkdown).mount('#app');
</script>
```

## Props

| Props           | Type                  | Default            | Information                                                                                                                 |
| --------------- | --------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `tag`           | `string`              | article            | Markdown wasm wrapping tag. Default is `article` because it may contain `h1` and `h2` tags.                                 |
| `parse-flags`   | `ParseFlags`          | ParseFlags.DEFAULT | Flags that customize Markdown parsin                                                                                        |
| `format`        | `<'html' \| 'xhtml'>` | xhtml              | Select output format                                                                                                        |
| `bytes`         | `boolean`             | false              | result as a Uint8Array                                                                                                      |
| `allow-js-uri`  | `boolean`             | false              | Allow "javascript:" in links                                                                                                |
| `on-code-block` | `Function`            | undefined          | Optional callback which if provided is called for each code block. langname holds the "language tag", if any, of the block. |

### ParseFlags

| Flags                         | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| `COLLAPSE_WHITESPACE`         | In TEXT, collapse non-trivial whitespace into single ' ' |
| `LATEX_MATH_SPANS`            | Enable $ and $$ containing LaTeX equations.              |
| `NO_HTML_BLOCKS`              | Disable raw HTML blocks.                                 |
| `NO_HTML_SPANS`               | Disable raw HTML (inline).                               |
| `NO_INDENTED_CODE_BLOCKS`     | Disable indented code blocks. (Only fenced code works.)  |
| `PERMISSIVE_ATX_HEADERS`      | Do not require space in ATX headers ( ###header )        |
| `PERMISSIVE_EMAIL_AUTO_LINKS` | Recognize e-mails as links even without \<...\>          |
| `PERMISSIVE_URL_AUTO_LINKS`   | Recognize URLs as links even without <...>               |
| `PERMISSIVE_WWW_AUTOLINKS`    | Enable WWW autolinks (without proto; just 'www.')        |
| `STRIKETHROUGH`               | Enable strikethrough extension.                          |
| `TABLES`                      | Enable tables extension.                                 |
| `TASK_LISTS`                  | Enable task list extension.                              |
| `WIKI_LINKS`                  | Enable wiki links extension.                             |
| `UNDERLINE`                   | Enable underline extension (disables '\_' for emphasis)  |

- `DEFAULT` flag is shorthand for `COLLAPSE_WHITESPACE | PERMISSIVE_ATX_HEADERS | PERMISSIVE_URL_AUTO_LINKS | STRIKETHROUGH | TABLES | TASK_LISTS`
- `NO_HTML` flag is shorthand for `NO_HTML_BLOCKS | NO_HTML_SPANS`

## Emits

| Emits     | Type                   | Description                      |
| --------- | ---------------------- | -------------------------------- |
| `@render` | `string \| Uint8Array` | When markdown to html converted. |

## LICENSE

©2022-2023 by Logue. Licensed under the [MIT License](LICENSE).
