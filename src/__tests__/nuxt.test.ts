import { describe, expect, it } from '@rstest/core';

import VueMarkdown, { install } from '@/index';

describe('Nuxt Plugin', () => {
  it('exports the component and install hook', () => {
    expect(VueMarkdown).toBeDefined();
    expect(typeof install).toBe('function');
  });
});
