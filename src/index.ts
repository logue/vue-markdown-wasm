import VueMarkdown from '@/components/VueMarkdown';
import Meta from '@/Meta';

const installVueMarkdown = (app: any) =>
  app.component('VueMarkdown', VueMarkdown);

export { VueMarkdown as default, installVueMarkdown as install, Meta };

// For CDN. (Maybe Vue2 only)
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(installVueMarkdown);
}
