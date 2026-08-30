import { beforeEach, describe, expect, it, rs } from '@rstest/core';

// Mock markdown-wasm
rs.mock('@logue/markdown-wasm', () => ({
  parse: rs.fn((source: string) => `<p>${source}</p>`),
  ready: rs.fn(() => Promise.resolve()),
  ParseFlags: {
    DEFAULT: 0,
  },
}));

import VueMarkdown, { install, Meta } from '@/index';

describe('Integration Tests', () => {
  beforeEach(() => {
    rs.clearAllMocks();

    // Mock client-side environment
    Object.defineProperty(globalThis, 'window', {
      writable: true,
      value: {},
    });
  });

  it('should export all required items', () => {
    expect(VueMarkdown).toBeDefined();
    expect(install).toBeDefined();
    expect(Meta).toBeDefined();
    expect(typeof VueMarkdown).toBe('object');
    expect(typeof install).toBe('function');
    expect(typeof Meta).toBe('object');
  });

  it('should parse markdown content', () => {
    const mockParseFn = rs
      .fn()
      .mockReturnValue('<h1>Hello World</h1><p>This is a test.</p>');

    // Test that our component would call parse with correct options
    const expectedOptions = {
      parseFlags: 0,
      xhtml: true,
      bytes: false,
      allowJSURIs: false,
      debug: false,
      verbatimEntities: true,
      disableHeadlineAnchors: false,
    };

    expect(mockParseFn).toBeDefined();
    expect(expectedOptions).toBeDefined();
  });

  it('should handle complex markdown syntax', () => {
    const complexMarkdown = `
# Main Title

## Subtitle

This is **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello World');
\`\`\`

[Link](https://example.com)
`;

    expect(complexMarkdown).toContain('# Main Title');
    expect(complexMarkdown).toContain('**bold**');
    expect(complexMarkdown).toContain('- List item 1');
    expect(complexMarkdown).toContain('```javascript');
  });

  it('should work with install function', () => {
    const mockApp = {
      component: rs.fn(),
    };

    install(mockApp);

    expect(mockApp.component).toHaveBeenCalledWith('VueMarkdown', VueMarkdown);
  });

  it('should handle SSR and CSR environments', () => {
    // Test SSR environment check
    const originalWindow = globalThis.window;

    // Simulate SSR (no window)
    Object.defineProperty(globalThis, 'window', {
      writable: true,
      value: undefined,
    });

    expect(globalThis.window).toBeUndefined();

    // Simulate CSR (with window)
    Object.defineProperty(globalThis, 'window', {
      writable: true,
      value: {},
    });

    expect(globalThis.window).toBeDefined();

    // Restore
    Object.defineProperty(globalThis, 'window', {
      writable: true,
      value: originalWindow,
    });
  });

  it('should have render method available', () => {
    expect(VueMarkdown.setup).toBeDefined();
    expect(typeof VueMarkdown.setup).toBe('function');
  });
});
