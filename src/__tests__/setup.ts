import { rs } from '@rstest/core';

// Mock markdown-wasm module for testing
rs.mock('@logue/markdown-wasm', () => ({
  parse: rs.fn((source: string) => `<p>${source}</p>`),
  ready: rs.fn(() => Promise.resolve()),
  ParseFlags: {
    DEFAULT: 0,
  },
}));

// Setup DOM environment properly
Object.defineProperty(globalThis, 'window', {
  writable: true,
  value: globalThis.window || {},
});
