# Nuxt.js Usage

## Installation

```bash
npm install vue-markdown-wasm @logue/markdown-wasm
```

## Plugin Setup

Create a `plugins/vue-markdown-wasm.client.ts` file:

```typescript
import VueMarkdownWasm from 'vue-markdown-wasm/nuxt';

export default VueMarkdownWasm;
```

Or manually register the component:

```typescript
// plugins/vue-markdown-wasm.client.ts
import { defineNuxtPlugin } from '#app';
import VueMarkdown from 'vue-markdown-wasm';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('VueMarkdown', VueMarkdown);
});
```

## Usage Example

```vue
<template>
  <div>
    <VueMarkdown :model-value="markdown" />
  </div>
</template>

<script setup>
const markdown = ref('# Hello World\n\nThis is **markdown** content!');
</script>
```

## Server-Side Rendering (SSR)

This component supports SSR (Server-Side Rendering):

- On the server-side, an empty string is rendered
- On the client-side, the actual markdown is rendered after hydration
- WebAssembly (markdown-wasm) is initialized only on the client-side

## Important Notes

- It is recommended to use the `.client.ts` extension to ensure the plugin runs only on the client-side
- You must also install the `@logue/markdown-wasm` package
