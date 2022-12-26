import {
  defineComponent,
  ref,
  watch,
  type PropType,
  type Ref,
  type SetupContext,
  onMounted,
  nextTick,
} from 'vue-demi';

// Helpers
import h from '@/helpers/h-demi';
import {
  parse,
  ParseFlags,
  ready,
  type UTF8Bytes,
} from '@/helpers/markdown.es';
import type { ParseOptions } from 'markdown-wasm';

/** Vue Markdown Component */
export default defineComponent({
  /** Component Name */
  name: 'VueMarkdown',
  /** Model Definition */
  model: {
    prop: 'modelValue',
  },
  /** Props Definition */
  props: {
    /** Model value */
    modelValue: {
      type: String as PropType<string | ArrayLike<number>>,
      default: '',
    },
    /**
     * Using tag
     */
    tag: {
      type: String,
      default: 'article',
    },
    /** Customize parsing */
    parseFlags: {
      type: Number as PropType<ParseFlags>,
      default: ParseFlags.DEFAULT,
    },

    /** Select output format. */
    format: {
      type: String as PropType<'html' | 'xhtml'>,
      default: 'html',
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
      default: false,
    },
    /** Allow "javascript:" in links */
    allowJSURIs: {
      type: Boolean,
      default: false,
    },
    /**
     * Optional callback which if provided is called for each code block.
     * langname holds the "language tag", if any, of the block.
     *
     * The returned value is inserted into the resulting HTML verbatim, without HTML escaping.
     * Thus, you should take care of properly escaping any special HTML characters.
     *
     * If the function returns null or undefined, or an exception occurs, the body will be
     * included as-is after going through HTML escaping.
     *
     * Note that use of this callback has an adverse impact on performance as it casues
     * calls and data to be bridged between WASM and JS on every invocation.
     */
    onCodeBlock: {
      type: Function as PropType<
        (
          langname: string,
          body: UTF8Bytes
        ) => Uint8Array | string | null | undefined
      >,
      default: () => undefined,
    },
  },
  /** Emits */
  emits: ['render'],
  /**
   * Setup
   *
   * @param props  - Props
   * @param context - Context
   */
  setup(props, context: SetupContext) {
    /** Editor DOM */
    const placeholder: Ref<HTMLElement | undefined> = ref();
    /** Output HTML */
    const html: Ref<string | Uint8Array> = ref('');

    /** Rednder markdown */
    watch(
      () => props,
      async value => {
        html.value = await render(value.modelValue, {
          parseFlags: value.parseFlags,
          format: value.format,
          bytes: props.bytes,
          allowJSURIs: value.allowJSURIs,
          onCodeBlock: value.onCodeBlock,
        });
        await nextTick();
      },
      { deep: true }
    );

    onMounted(async () => (html.value = await render()));

    /**
     * Markdown source at s and converts it to HTML.
     *
     * @param markdown - Markdown source.
     * @param config - markdown-wasm parse options
     */
    const render = async (
      markdown: string | ArrayLike<number> = props.modelValue,
      config: ParseOptions = {
        parseFlags: props.parseFlags,
        format: props.format,
        bytes: props.bytes,
        allowJSURIs: props.allowJSURIs,
        onCodeBlock: props.onCodeBlock,
      }
    ): Promise<string | Uint8Array> => {
      await ready;
      const ret = parse(markdown, config);
      context.emit('render', ret);
      return ret;
    };

    context.expose({ render });

    return {
      placeholder,
      html,
      render,
    };
  },
  render() {
    // <template>
    //   <article ref="placeholder" class="vue-markdown" v-html="html" />
    // </template>
    return h(this.$props.tag, {
      ref: 'placeholder',
      class: 'vue-markdown',
      domProps: {
        innerHTML: this.html,
      },
    });
  },
});
