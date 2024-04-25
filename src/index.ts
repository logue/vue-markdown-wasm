import Meta from '@/Meta';
import VueMarkdown from '@/components/VueMarkdown';

const installVueMarkdown = (app: any): void =>
  app.component('VueMarkdown', VueMarkdown);

export { VueMarkdown as default, installVueMarkdown as install, Meta };
