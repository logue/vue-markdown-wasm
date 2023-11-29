import { checker } from 'vite-plugin-checker';
import { defineConfig, type UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import banner from 'vite-plugin-banner';
import Vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import { fileURLToPath, URL } from 'node:url';
import { writeFileSync } from 'node:fs';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode, command }): Promise<UserConfig> => {
  const config: UserConfig = {
    base: './',
    publicDir: command === 'serve' ? 'public' : false,
    plugins: [
      Vue(),
      // vite-plugin-checker
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true,
        vueTsc: true,
        eslint: {
          lintCommand: 'eslint',
        },
      }),
      // vite-plugin-banner
      // https://github.com/chengpeiquan/vite-plugin-banner
      // @ts-expect-error
      banner(`/**
 * ${pkg.name}
 *
 * @description ${pkg.description}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @copyright 2022-2023 By Masashi Yoshikawa All rights reserved.
 * @license ${pkg.license}
 * @version ${pkg.version}
 * @see {@link ${pkg.homepage}}
 */
`),
      // vite-plugin-dts
      // https://github.com/qmhc/vite-plugin-dts
      mode !== 'docs' ? dts() : undefined,
    ],
    // https://vitejs.dev/config/server-options.html
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    // Resolver
    resolve: {
      // https://vitejs.dev/config/shared-options.html#resolve-alias
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
        'vue-markdown-wasm': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    optimizeDeps: {
      exclude: ['vue-demi'],
    },
    // Build Options
    // https://vitejs.dev/config/#build-options
    build: {
      outDir: mode === 'docs' ? 'docs' : undefined,
      lib:
        mode === 'docs'
          ? undefined
          : {
              entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
              name: 'VueMarkdown',
              formats: ['umd', 'es', 'iife'],
              fileName: format => `index.${format}.js`,
            },

      rollupOptions: {
        plugins: [
          mode === 'analyze'
            ? // rollup-plugin-visualizer
              // https://github.com/btd/rollup-plugin-visualizer
              visualizer({
                open: true,
                filename: 'stats.html',
                gzipSize: false,
                brotliSize: false,
              })
            : undefined,
        ],
        external:
          mode === 'docs'
            ? undefined
            : ['vue', 'vue-demi', '@logue/markdown-wasm'],
        output: {
          esModule: true,
          generatedCode: {
            reservedNamesAsProps: false,
          },
          interop: 'compat',
          systemNullSetters: false,
          exports: 'named',
          globals: {
            vue: 'Vue',
            'vue-demi': 'VueDemi',
            '@logue/markdown-wasm': 'markdown',
          },
          manualChunks:
            mode !== 'docs'
              ? undefined
              : {
                  vue: ['vue'],
                  markdown: ['@logue/markdown-wasm'],
                  codemirror: [
                    'vue-codemirror6',
                    'codemirror',
                    '@codemirror/autocomplete',
                    '@codemirror/commands',
                    '@codemirror/language',
                    '@codemirror/lint',
                    '@codemirror/search',
                    '@codemirror/state',
                    '@codemirror/view',
                  ],
                  // Add the following as needed.
                  'codemirror-lang': ['@codemirror/lang-markdown'],
                },
        },
      },
      // Minify option
      target: 'esnext',
      minify: mode === 'docs',
    },
  };
  // Write meta data.
  writeFileSync(
    fileURLToPath(new URL('./src/Meta.ts', import.meta.url)),
    `import type MetaInterface from './interfaces/MetaInterface';

// This file is auto-generated by the build system.
const meta: MetaInterface = {
  version: '${pkg.version}',
  date: '${new Date().toISOString()}',
};
export default meta;
`
  );

  // Export vite config
  return config;
});
