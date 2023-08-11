import VueMarkdown from '@/components/VueMarkdown';
import Meta from '@/Meta';

const installVueMarkdown = (app: any): void =>
  app.component('VueMarkdown', VueMarkdown);

export { VueMarkdown as default, installVueMarkdown as install, Meta };
