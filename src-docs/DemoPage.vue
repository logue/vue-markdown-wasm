<script setup lang="ts">
/** Realtime Markdown Editor demo */
import { ref, watch, type Ref } from 'vue';
import { useDark } from '@vueuse/core';

import CodeMirror from 'vue-codemirror6';
import { markdown as md } from '@codemirror/lang-markdown';

// @ts-ignore
import VueMarkdown from 'vue-markdown-wasm';
import { ParseFlags } from 'markdown-wasm';

import logo from './assets/logo.png';

/** Markdown wasm output */
const markdown: Ref<InstanceType<typeof VueMarkdown> | undefined> = ref();

/** Demo text */
const input: Ref<string> = ref(`# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](${logo} "This is a sample image.")

## Links

You may be using [Vue Markdown Wasm Live Preview](https://logue.dev/vue-markdown-wasm/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markdown-wasm\`.`);

/** Output Format */
const format: Ref<'html' | 'xhtml'> = ref('html');

/** Markdown wasm parse flags */
const parseFlags: Ref<ParseFlags> = ref(ParseFlags.DEFAULT);

/** result as a Uint8Array */
const bytes: Ref<boolean> = ref(false);

/** Allow "javascript:" in links */
const allowJsUri: Ref<boolean> = ref(false);

/** Markdown parse flags  */
const checkedFlags: Ref<ParseFlags[]> = ref([
  ParseFlags.COLLAPSE_WHITESPACE,
  ParseFlags.PERMISSIVE_ATX_HEADERS,
  ParseFlags.PERMISSIVE_URL_AUTO_LINKS,
  ParseFlags.STRIKETHROUGH,
  ParseFlags.TABLES,
  ParseFlags.TASK_LISTS,
]);

const dark = useDark();

// Convert checkbox checks to ParseFlags.
watch(
  () => checkedFlags.value,
  v => {
    parseFlags.value =
      v.length !== 0 ? Object.values(v).reduce((acc, cur) => acc + cur) : 0;
  }
);

/** set DEFAULT flag */
const setDefault = () => {
  checkedFlags.value = [
    ParseFlags.COLLAPSE_WHITESPACE,
    ParseFlags.PERMISSIVE_ATX_HEADERS,
    ParseFlags.PERMISSIVE_URL_AUTO_LINKS,
    ParseFlags.STRIKETHROUGH,
    ParseFlags.TABLES,
    ParseFlags.TASK_LISTS,
  ];
};

/** set DEFAULT flag */
const setNoHtml = () =>
  (checkedFlags.value = [ParseFlags.NO_HTML_BLOCKS, ParseFlags.NO_HTML_SPANS]);
</script>

<template>
  <main class="container">
    <div class="card my-3">
      <h2 class="card-header h5">Demo</h2>
      <div class="card-body">
        <p>
          Markdown editor uses
          <a href="https://github.com/logue/vue-codemirror6/" target="_blank">
            vue-codemirror6
            <i class="bi bi-box-arrow-up-right" />
          </a>
          . Also, the Markdown preview uses the
          <a
            href="https://github.com/sindresorhus/github-markdown-css/"
            target="_blank"
          >
            github-markdown-css
            <i class="bi bi-box-arrow-up-right" />
          </a>
          stylesheet.
        </p>
        <div class="row">
          <div class="col-6">
            <code-mirror v-model="input" :dark="dark" :lang="md()" wrap basic />
          </div>
          <div class="col-6">
            <vue-markdown
              ref="markdown"
              v-model="input"
              class="markdown-body"
              :parse-flags="parseFlags"
              :format="format"
              :bytes="bytes"
              :allow-js-uri="allowJsUri"
            />
            <teleport to="head">
              <link
                v-if="dark"
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown-dark.css"
                integrity="sha256-AH9zT58bZI9nEtr/GadoaIVpns5/414VcqugvrFjbXs="
                crossorigin="anonymous"
              />
              <link
                v-else
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown-light.css"
                integrity="sha256-bWV9QiirgHYgauZBcR9YJ3IvEoA3fP2Cf5aOdshBVrI="
                crossorigin="anonymous"
              />
            </teleport>
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <h2 class="card-header h5">Options</h2>
      <div class="card-body">
        <fieldset>
          <legend>ParseFlags</legend>
          <div class="d-grid gap-2 d-md-block">
            <button type="button" class="btn btn-primary" @click="setDefault">
              DEFAULT
            </button>
            <button type="button" class="btn btn-secondary" @click="setNoHtml">
              NO_HTML
            </button>
          </div>
          <ul class="list-unstyled card-columns" style="column-count: 2">
            <li class="form-check">
              <input
                id="COLLAPSE_WHITESPACE"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="COLLAPSE_WHITESPACE_HELP"
                type="checkbox"
                :value="ParseFlags.COLLAPSE_WHITESPACE"
              />
              <label class="form-check-label" for="COLLAPSE_WHITESPACE">
                COLLAPSE_WHITESPACE
              </label>
              <div id="COLLAPSE_WHITESPACE_HELP" class="form-text">
                In TEXT, collapse non-trivial whitespace into single ' '
              </div>
            </li>
            <li class="form-check">
              <input
                id="LATEX_MATH_SPANS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="LATEX_MATH_SPANS_HELP"
                type="checkbox"
                :value="ParseFlags.LATEX_MATH_SPANS"
              />
              <label class="form-check-label" for="LATEX_MATH_SPANS">
                LATEX_MATH_SPANS
              </label>
              <div id="LATEX_MATH_SPANS_HELP" class="form-text">
                Enable $ and $$ containing LaTeX equations.
              </div>
            </li>
            <li class="form-check">
              <input
                id="NO_HTML_BLOCKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="NO_HTML_BLOCKS_HELP"
                type="checkbox"
                :value="ParseFlags.NO_HTML_BLOCKS"
              />
              <label class="form-check-label" for="NO_HTML_BLOCKS">
                NO_HTML_BLOCKS
              </label>
              <div id="NO_HTML_BLOCKS_HELP" class="form-text">
                Disable raw HTML blocks.
              </div>
            </li>
            <li class="form-check">
              <input
                id="NO_HTML_SPANS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="NO_HTML_SPANS_HELP"
                type="checkbox"
                :value="ParseFlags.NO_HTML_SPANS"
              />
              <label class="form-check-label" for="NO_HTML_SPANS">
                NO_HTML_SPANS
              </label>
              <div id="NO_HTML_BLOCKS_HELP" class="form-text">
                Disable raw HTML (inline).
              </div>
            </li>
            <li class="form-check">
              <input
                id="NO_INDENTED_CODE_BLOCKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="NO_INDENTED_CODE_BLOCKS_HELP"
                type="checkbox"
                :value="ParseFlags.NO_INDENTED_CODE_BLOCKS"
              />
              <label class="form-check-label" for="NO_INDENTED_CODE_BLOCKS">
                NO_INDENTED_CODE_BLOCKS
              </label>
              <div id="NO_INDENTED_CODE_BLOCKS_HELP" class="form-text">
                Disable indented code blocks. (Only fenced code works.)
              </div>
            </li>
            <li class="form-check">
              <input
                id="PERMISSIVE_ATX_HEADERS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="PERMISSIVE_ATX_HEADERS_HELP"
                type="checkbox"
                :value="ParseFlags.PERMISSIVE_ATX_HEADERS"
              />
              <label class="form-check-label" for="PERMISSIVE_ATX_HEADERS">
                PERMISSIVE_ATX_HEADERS
              </label>
              <div id="PERMISSIVE_ATX_HEADERS_HELP" class="form-text">
                Do not require space in ATX headers ( ###header )
              </div>
            </li>
            <li class="form-check">
              <input
                id="PERMISSIVE_EMAIL_AUTO_LINKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="PERMISSIVE_EMAIL_AUTO_LINKS_HELP"
                type="checkbox"
                :value="ParseFlags.PERMISSIVE_EMAIL_AUTO_LINKS"
              />
              <label class="form-check-label" for="PERMISSIVE_EMAIL_AUTO_LINKS">
                PERMISSIVE_EMAIL_AUTO_LINKS
              </label>
              <div id="PERMISSIVE_EMAIL_AUTO_LINKS_HELP" class="form-text">
                Recognize e-mails as links even without &lt;...&gt;
              </div>
            </li>
            <li class="form-check">
              <input
                id="PERMISSIVE_URL_AUTO_LINKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="PERMISSIVE_URL_AUTO_LINKS_HELP"
                type="checkbox"
                :value="ParseFlags.PERMISSIVE_URL_AUTO_LINKS"
              />
              <label class="form-check-label" for="PERMISSIVE_URL_AUTO_LINKS">
                PERMISSIVE_URL_AUTO_LINKS
              </label>
              <div id="PERMISSIVE_URL_AUTO_LINKS_HELP" class="form-text">
                Recognize URLs as links even without &lt;...&gt;
              </div>
            </li>
            <li class="form-check">
              <input
                id="PERMISSIVE_WWW_AUTOLINKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="PERMISSIVE_WWW_AUTOLINKS_HELP"
                type="checkbox"
                :value="ParseFlags.PERMISSIVE_WWW_AUTOLINKS"
              />
              <label class="form-check-label" for="PERMISSIVE_WWW_AUTOLINKS">
                PERMISSIVE_WWW_AUTOLINKS
              </label>
              <div id="PERMISSIVE_WWW_AUTOLINKS_HELP" class="form-text">
                Enable WWW autolinks (without proto; just 'www.')
              </div>
            </li>
            <li class="form-check">
              <input
                id="STRIKETHROUGH"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="STRIKETHROUGH_HELP"
                type="checkbox"
                :value="ParseFlags.STRIKETHROUGH"
              />
              <label class="form-check-label" for="STRIKETHROUGH">
                STRIKETHROUGH
              </label>
              <div id="STRIKETHROUGH_HELP" class="form-text">
                Enable strikethrough extension.
              </div>
            </li>
            <li class="form-check">
              <input
                id="TABLES"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="TABLES_HELP"
                type="checkbox"
                :value="ParseFlags.TABLES"
              />
              <label class="form-check-label" for="TABLES">TABLES</label>
              <div id="TABLES_HELP" class="form-text">
                Enable tables extension.
              </div>
            </li>
            <li class="form-check">
              <input
                id="TASK_LISTS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="TASK_LISTS_HELP"
                type="checkbox"
                :value="ParseFlags.TASK_LISTS"
              />
              <label class="form-check-label" for="TASK_LISTS">
                TASK_LISTS
              </label>
              <div id="TASK_LISTS_HELP" class="form-text">
                Enable task list extension.
              </div>
            </li>
            <li class="form-check">
              <input
                id="WIKI_LINKS"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="WIKI_LINKS_HELP"
                type="checkbox"
                :value="ParseFlags.WIKI_LINKS"
              />
              <label class="form-check-label" for="WIKI_LINKS">
                WIKI_LINKS
              </label>
              <div id="WIKI_LINKS_HELP" class="form-text">
                Enable wiki links extension.
              </div>
            </li>
            <li class="form-check">
              <input
                id="UNDERLINE"
                v-model="checkedFlags"
                class="form-check-input"
                aria-describedby="UNDERLINE_HELP"
                type="checkbox"
                :value="ParseFlags.UNDERLINE"
              />
              <label class="form-check-label" for="UNDERLINE">UNDERLINE</label>
              <div id="UNDERLINE" class="form-text">
                Enable underline extension (disables '_' for emphasis)
              </div>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Output Foramat</legend>
          <div class="form-check form-check-inline">
            <input
              id="formatHtml"
              v-model="format"
              class="form-check-input"
              type="radio"
              value="html"
            />
            <label class="form-check-label" for="formatHtml">html</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              id="formatXhtml"
              v-model="format"
              class="form-check-input"
              type="radio"
              value="xhtml"
            />
            <label class="form-check-label" for="formatXhtml">xhtml</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Other Options</legend>
          <div class="form-check form-switch">
            <input
              id="bytes"
              v-model="bytes"
              class="form-check-input"
              type="checkbox"
              role="switch"
            />
            <label class="form-check-label" for="bytes">
              result as a Uint8Array
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              id="allowJsUri"
              v-model="allowJsUri"
              class="form-check-input"
              type="checkbox"
              role="switch"
            />
            <label class="form-check-label" for="allowJsUri">
              Allow "javascript:" in links
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  </main>
</template>

<style>
.vue-codemirror * {
  font-family: var(--bs-font-monospace);
}
</style>
