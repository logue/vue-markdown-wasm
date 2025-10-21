import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock markdown-wasm
vi.mock('@logue/markdown-wasm', () => ({
  parse: vi.fn((source: string) => `<p>${source}</p>`),
  ready: vi.fn(() => Promise.resolve()),
  ParseFlags: {
    DEFAULT: 0,
  },
}));

import VueMarkdown from '@/index';
const { parse: mockParse, ready: mockReady } = (await vi.importMock(
  '@logue/markdown-wasm'
)) as {
  parse: ReturnType<typeof vi.fn>;
  ready: ReturnType<typeof vi.fn>;
};

describe('VueMarkdown', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockParse.mockReturnValue('<p>Hello World</p>');
    mockReady.mockResolvedValue(undefined);
  });

  it('should be a valid Vue component', () => {
    expect(VueMarkdown).toBeDefined();
    expect(VueMarkdown.name).toBe('VueMarkdown');
    expect(VueMarkdown.props).toBeDefined();
  });

  it('has correct default props', () => {
    expect(VueMarkdown.props.modelValue.default).toBe('');
    expect(VueMarkdown.props.tag.default).toBe('article');
    expect(VueMarkdown.props.parseFlags.default).toBe(0);
    expect(VueMarkdown.props.format.default).toBe('xhtml');
    expect(VueMarkdown.props.bytes.default).toBe(false);
    expect(VueMarkdown.props.allowJsUri.default).toBe(false);
    expect(VueMarkdown.props.debug.default).toBe(false);
    expect(VueMarkdown.props.verbatimEntities.default).toBe(true);
    expect(VueMarkdown.props.disableHeadlineAnchors.default).toBe(false);
  });

  it('has correct prop types', () => {
    expect(VueMarkdown.props.modelValue.type).toBe(String);
    expect(VueMarkdown.props.tag.type).toBe(String);
    expect(VueMarkdown.props.parseFlags.type).toBe(Number);
    expect(VueMarkdown.props.format.type).toBe(String);
    expect(VueMarkdown.props.bytes.type).toBe(Boolean);
    expect(VueMarkdown.props.allowJsUri.type).toBe(Boolean);
    expect(VueMarkdown.props.debug.type).toBe(Boolean);
    expect(VueMarkdown.props.verbatimEntities.type).toBe(Boolean);
    expect(VueMarkdown.props.disableHeadlineAnchors.type).toBe(Boolean);
  });

  it('has correct emits definition', () => {
    expect(VueMarkdown.emits).toBeDefined();
    if (VueMarkdown.emits && typeof VueMarkdown.emits === 'object') {
      expect('render' in VueMarkdown.emits).toBe(true);
    }
  });

  it('has render function', () => {
    expect(VueMarkdown.render).toBeDefined();
    expect(typeof VueMarkdown.render).toBe('function');
  });
});
