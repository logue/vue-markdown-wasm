import Markdown from './components/VueMarkdown';
import Meta from './Meta';

// TODO: Move phrases props to option.
const installMarkdown = (app: any) => app.component('VueMarkdown', Markdown);

export { Markdown as default, installMarkdown as install, Meta };

// For CDN. (Maybe Vue2 only)
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(installMarkdown);
}
