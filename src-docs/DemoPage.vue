<script setup lang="ts">
/** Realtime Markdown Editor demo */
import { ref, watch, type Ref, nextTick } from 'vue';
import { useDark } from '@vueuse/core';

import CodeMirror from 'vue-codemirror6';
import { markdown as md } from '@codemirror/lang-markdown';
import 'github-markdown-css/github-markdown.css';

import VueMarkdown from 'vue-markdown-wasm';
import {
  ParseFlags,
  type MarkdownOutput,
  type ParseFlagsType,
} from '@logue/markdown-wasm';

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

### Task list

- [ ] Task Item 1
- [x] Task Item 2
- [ ] Task Item 3

## Images

![This is a alt text.](${logo} "This is a sample image.")

## Links

You may be using [Vue Markdown Wasm Live Preview](https://logue.dev/vue-markdown-wasm/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Center columns | Right columns |
|:------------- |:--------------:| -------------:|
| left foo      | center foo     | right foo     |
| left bar      | center bar     | right bar     |
| left baz      | center baz     | right baz     |

## Inline code

This web site is using \`markdown-wasm\`.

## Blocks of code

\`\`\`js
let message = 'Hello world';
alert(message);
\`\`\`
`);

/** Output Format */
const format: Ref<'html' | 'xhtml'> = ref('xhtml');

/** Markdown wasm parse flags */
const parseFlags: Ref<ParseFlagsType> = ref(ParseFlags.DEFAULT);

/** result as a Uint8Array */
const bytes: Ref<boolean> = ref(false);

/** Allow "javascript:" in links */
const allowJsUri: Ref<boolean> = ref(false);

/** Output special characters as entity reference characters */
const verbatimEntities: Ref<boolean> = ref(true);

/** Disable anchor tag in headlines. Defaults to `false` */
const disableHeadlineAnchors: Ref<boolean> = ref(false);

/** Markdown parse flags  */
const checkedFlags: Ref<ParseFlagsType[]> = ref([
  ParseFlags.COLLAPSE_WHITESPACE,
  ParseFlags.PERMISSIVE_ATX_HEADERS,
  ParseFlags.PERMISSIVE_URL_AUTO_LINKS,
  ParseFlags.STRIKETHROUGH,
  ParseFlags.TABLES,
  ParseFlags.TASK_LISTS,
]);

/** Darkmode */
const dark = useDark();

// Convert checkbox checks to ParseFlags.
watch(
  () => checkedFlags.value,
  v => {
    parseFlags.value =
      v.length !== 0
        ? Object.values(v).reduce(
            // @ts-ignore
            (acc, cur) => (acc as number) + (cur as number)
          )
        : 0;
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

/** set COMMOMMARK flag */
const setCommonMark = () => (checkedFlags.value = []);

/** set GITHUB flag */
const setGithub = () =>
  (checkedFlags.value = [
    ParseFlags.PERMISSIVE_URL_AUTO_LINKS,
    ParseFlags.TABLES,
    ParseFlags.STRIKETHROUGH,
    ParseFlags.TASK_LISTS,
  ]);

/** on markdown render */
const onRender = (_value: MarkdownOutput) => {
  markdown.value?.$el
    .querySelectorAll('[class*="language-"]')
    .forEach((el?: HTMLElement) => {
      const lang = el?.className.match(/^language-([a-zA-Z]+)$/);
      if (el && lang) {
        console.log(lang);
      }
    });
};

watch(
  () => dark.value,
  async () => await nextTick()
);
</script>

<style lang="scss">
.vue-codemirror * {
  font-family: var(--bs-font-monospace);
}

.markdown-body {
  font-family: var(--bs-body-font-family);

  h1 > a.anchor,
  h2 > a.anchor,
  h3 > a.anchor,
  h4 > a.anchor,
  h5 > a.anchor,
  h6 > a.anchor {
    display: block;
    float: left;
    height: 1.2em;
    width: 1em;
    margin-left: -1em;
    position: relative;
    outline: none;
  }
  /*.anchor:target { background: yellow; }*/
  h1 > a.anchor:before,
  h2 > a.anchor:before,
  h3 > a.anchor:before,
  h4 > a.anchor:before,
  h5 > a.anchor:before,
  h6 > a.anchor:before {
    visibility: hidden;
    position: absolute;
    opacity: 0.2;
    right: 0;
    top: 0;
    width: 1.2em;
    line-height: inherit;
    content: '🔗';
  }
  h1 > a.anchor:hover:before,
  h2 > a.anchor:hover:before,
  h3 > a.anchor:hover:before,
  h4 > a.anchor:hover:before,
  h5 > a.anchor:hover:before,
  h6 > a.anchor:hover:before {
    visibility: visible;
    opacity: 0.8;
  }
  h1:hover .anchor:before,
  h2:hover .anchor:before,
  h3:hover .anchor:before,
  h4:hover .anchor:before,
  h5:hover .anchor:before,
  h6:hover .anchor:before {
    visibility: visible;
  }
}
</style>

<template>
  <main class="container">
    <div class="card my-3">
      <h2 class="card-header h5">Demo</h2>
      <div class="card-body">
        <p>
          Markdown editor uses
          <a href="https://github.com/logue/vue-codemirror6/" target="_blank">
            vue-codemirror6
          </a>
          . Also, the Markdown preview uses the
          <a
            href="https://github.com/sindresorhus/github-markdown-css/"
            target="_blank"
          >
            github-markdown-css
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
              class="markdown-body px-3 py-3 rounded"
              :parse-flags="parseFlags"
              :format="format"
              :bytes="bytes"
              :allow-js-uri="allowJsUri"
              :verbatim-entities="verbatimEntities"
              :disable-headline-anchors="disableHeadlineAnchors"
              @render="onRender"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card my-3">
      <h2 class="card-header h5">Options</h2>
      <div class="card-body">
        <fieldset>
          <legend>ParseFlags</legend>
          <div class="d-grid gap-2 d-md-block my-1">
            <button
              type="button"
              class="btn btn-primary mr-1"
              @click="setDefault"
            >
              DEFAULT
            </button>
            <button type="button" class="btn btn-info mx-1" @click="setNoHtml">
              NO_HTML
            </button>
            <button
              type="button"
              class="btn btn-secondary mx-1"
              @click="setCommonMark"
            >
              COMMONMARK
            </button>
            <button
              type="button"
              class="btn btn-success ml-1"
              @click="setGithub"
            >
              GITHUB
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
                :value="ParseFlags.TABLES"
                aria-describedby="TABLES_HELP"
                class="form-check-input"
                type="checkbox"
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
                :value="ParseFlags.TASK_LISTS"
                aria-describedby="TASK_LISTS_HELP"
                class="form-check-input"
                type="checkbox"
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
                :value="ParseFlags.WIKI_LINKS"
                aria-describedby="WIKI_LINKS_HELP"
                class="form-check-input"
                type="checkbox"
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
                :value="ParseFlags.UNDERLINE"
                aria-describedby="UNDERLINE_HELP"
                class="form-check-input"
                type="checkbox"
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
              aria-checked="mixed"
              class="form-check-input"
              role="switch"
              type="checkbox"
            />
            <label class="form-check-label" for="bytes">
              result as a Uint8Array
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              id="allowJsUri"
              v-model="allowJsUri"
              aria-checked="mixed"
              class="form-check-input"
              role="switch"
              type="checkbox"
            />
            <label class="form-check-label" for="allowJsUri">
              Allow "javascript:" in links
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              id="verbatimEntities"
              v-model="verbatimEntities"
              aria-checked="mixed"
              class="form-check-input"
              role="switch"
              type="checkbox"
              aria-describedby="verbatimEntitiesHelp"
            />
            <label class="form-check-label" for="verbatimEntities">
              Verbatim Entities
            </label>
            <div id="verbatimEntitiesHelp" class="form-text">
              Output special characters as entity reference characters
            </div>
          </div>
          <div class="form-check form-switch">
            <input
              id="disableHeadlineAnchors"
              v-model="disableHeadlineAnchors"
              aria-checked="mixed"
              class="form-check-input"
              role="switch"
              type="checkbox"
              aria-describedby="disableHeadlineAnchorsHelp"
            />
            <label class="form-check-label" for="disableHeadlineAnchors">
              Disable Headline Anchors
            </label>
            <div id="disableHeadlineAnchorsHelp" class="form-text">
              Disable anchor tag in headlines. Defaults to `false`
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </main>
</template>
