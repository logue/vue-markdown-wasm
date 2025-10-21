import { vi } from 'vitest';

// Mock markdown-wasm module for testing
vi.mock('@logue/markdown-wasm', () => ({
  parse: vi.fn((source: string) => `<p>${source}</p>`),
  ready: vi.fn(() => Promise.resolve()),
  ParseFlags: {
    DEFAULT: 0,
  },
}));

// Setup DOM environment properly
Object.defineProperty(globalThis, 'window', {
  writable: true,
  value: globalThis.window || {},
});

// Mock ShadowRoot for DOM compatibility
globalThis.ShadowRoot ??= function ShadowRoot() {} as any;
