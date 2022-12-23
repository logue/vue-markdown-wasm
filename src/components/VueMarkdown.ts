import {
  defineComponent,
  onMounted,
  ref,
  watch,
  type PropType,
  type Ref,
  type SetupContext,
} from 'vue-demi';

// Helpers

import { ready, parse } from '@/helpers/markdown.es';
import h from '@/helpers/h-demi';
import type { ParseOptions } from 'markdown-wasm';

/** Vue Markdown Component */
export default defineComponent({
  /** Component Name */
  name: 'VueMarkdown',
  /** Model Definition */
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  /** Props Definition */
  props: {
    /** Model value */
    modelValue: {
      type: String as PropType<string | Text>,
      default: '',
    },
    /**
     * Markdown wasm Options
     *
     * @see {@link https://github.com/rsms/markdown-wasm#api}
     */
    options: {
      type: Object as PropType<ParseOptions>,
      default: () => {},
    },
    /**
     * Using tag
     */
    tag: {
      type: String,
      default: 'article',
    },
  },
  /** Emits */
  emits: ['update:modelValue', 'ready'],
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
    const html: Ref<string> = ref('');

    /** Re rednder markdown */
    watch(
      () => props.modelValue,
      value => (html.value = parse(value, props.options))
    );

    onMounted(async () => {
      // Setup markdown-wasm
      await ready;
      // Render markdown
      html.value = parse(props.modelValue, props.options);
      context.emit('ready');
    });

    return {
      placeholder,
      html,
    };
  },
  render() {
    // <template>
    //   <div ref="placeholder" class="vue-markdown-wasm" v-html="html">
    // </template>
    return h(this.$props.tag, {
      ref: 'placeholder',
      class: 'vue-markdown-wasm',
      domProps: {
        innerHTML: this.html,
      },
    });
  },
});
