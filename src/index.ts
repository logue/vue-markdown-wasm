import VueMarkdown from './components/VueMarkdown';
import Meta from './Meta';

const installVueMarkdown = (app: any): void =>
  app.component('VueMarkdown', VueMarkdown);

export { VueMarkdown as default, installVueMarkdown as install, Meta };

// For CDN. (Maybe Vue2 only)
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-expect-error
  window.Vue.use(installVueMarkdown);
}
