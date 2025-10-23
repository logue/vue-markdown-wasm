import {
  parse,
  ParseFlags,
  ready,
  type ParseFlagsType,
  type ParseOptions
} from '@logue/markdown-wasm';
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
  type PropType,
  type Ref
} from 'vue-demi';

// Helpers
import Meta from '@/Meta';
import h from '@/helpers/h-demi';

// Types
export type MarkdownOutput = Uint8Array | string | null;

/** Vue Markdown Component */
const VueMarkdown = defineComponent({
  /** Component Name */
  name: 'VueMarkdown',
  /** Model Definition */
  model: {
    prop: 'modelValue'
  },
  /** Props Definition */
  props: {
    /** Model value */
    modelValue: {
      type: String as PropType<string | Uint8Array>,
      default: ''
    },
    /**
     * HTML tag to be used for the wrapper element.
     */
    tag: {
      type: String,
      default: 'article'
    },
    /** Customize parsing behavior with flags */
    parseFlags: {
      type: Number as PropType<ParseFlagsType>,
      default: ParseFlags.DEFAULT
    },
    /** Select the output format (HTML or XHTML). */
    format: {
      type: String as PropType<'html' | 'xhtml'>,
      default: 'xhtml'
    },
    /**
     * bytes=true causes parse() to return the result as a Uint8Array instead of a string.
     *
     * The returned Uint8Array is only valid until the next call to parse().
     * If you need to keep the returned data around, call Uint8Array.slice() to make a copy,
     * as each call to parse() uses the same underlying memory.
     *
     * This only provides a performance benefit when you never need to convert the output
     * to a string. In most cases you're better off leaving this unset or false.
     */
    bytes: {
      type: Boolean,
      default: false
    },
    /** Allow "javascript:" URIs in links */
    allowJsUri: {
      type: Boolean,
      default: false
    },
    /**
     * Optional callback function that is called for each code block.
     * The langname parameter holds the "language tag", if any, of the block.
     *
     * The returned value is inserted into the resulting HTML verbatim, without HTML escaping.
     * Therefore, you should take care of properly escaping any special HTML characters.
     *
     * If the function returns null or undefined, or an exception occurs, the body will be
     * included as-is after going through HTML escaping.
     *
     * Note that using this callback has an adverse impact on performance as it causes
     * calls and data to be bridged between WASM and JS on every invocation.
     */
    onCodeBlock: {
      type: Function as PropType<(langname: string, body: string | Uint8Array) => MarkdownOutput>
    },
    /** Enable debug logging (default: false) */
    debug: {
      type: Boolean,
      default: false
    },
    /** Output special characters as HTML entity references */
    verbatimEntities: {
      type: Boolean,
      default: true
    },
    /** Disable anchor tags in headlines (default: false) */
    disableHeadlineAnchors: {
      type: Boolean,
      default: false
    }
  },
  /** Event emitters */
  emits: {
    render: (value: MarkdownOutput) => true
  },
  /**
   * Component setup function
   *
   * @param props - Component properties
   * @param context - Component context
   */
  setup(props, context) {
    /** DOM element reference */
    const placeholder: Ref<HTMLElement | undefined> = ref();
    /** Rendered HTML output */
    const html: Ref<MarkdownOutput> = ref('');

    /** Render markdown */
    watch(
      () => props,
      async value => {
        html.value = render(value.modelValue, {
          parseFlags: value.parseFlags,
          xhtml: value.format === 'xhtml',
          bytes: props.bytes,
          allowJSURIs: value.allowJsUri,
          onCodeBlock: value.onCodeBlock!,
          debug: value.debug,
          verbatimEntities: value.verbatimEntities,
          disableHeadlineAnchors: value.disableHeadlineAnchors
        });
        await nextTick();
      },
      { deep: true }
    );

    // SSR support: Only call ready() on client-side
    onMounted(async () => {
      if (globalThis.window !== undefined) {
        await ready();
        html.value = render(props.modelValue, {
          parseFlags: props.parseFlags,
          xhtml: props.format == 'xhtml',
          bytes: props.bytes,
          allowJSURIs: props.allowJsUri,
          onCodeBlock: props.onCodeBlock!,
          debug: props.debug,
          verbatimEntities: props.verbatimEntities,
          disableHeadlineAnchors: props.disableHeadlineAnchors
        });
      }
    });

    /**
     * Converts markdown source to HTML.
     *
     * @param source - Markdown source text or binary data.
     * @param options - markdown-wasm parse options configuration.
     * @returns Rendered HTML output or null.
     */
    const render = (source: string | Uint8Array, options: ParseOptions): MarkdownOutput => {
      // SSR support: Return empty string on server-side
      if (globalThis.window === undefined) {
        return '';
      }

      const ret = parse(source, options);
      context.emit('render', ret);
      return ret;
    };

    context.expose({
      render
    });

    return {
      placeholder,
      html
    };
  },
  render() {
    // <template>
    //   <article ref="placeholder" class="vue-markdown" v-html="html" />
    // </template>
    return h(this.$props.tag, {
      ref: 'placeholder',
      class: 'vue-markdown',
      innerHTML: this.html
    });
  }
});

/**
 * Plugin installation function for Vue applications
 * @param app - Vue application instance
 */
const installVueMarkdown = (app: any): void => app.component('VueMarkdown', VueMarkdown);

export { VueMarkdown as default, installVueMarkdown as install, Meta };
