import { describe, it, expect, vi } from 'vitest';
import h, { slot } from '@/helpers/h-demi';

// Mock vue-demi
vi.mock('vue-demi', () => ({
  h: vi.fn((type, props, children) => ({ type, props, children })),
  isVue2: false,
}));

describe('h-demi', () => {
  it('should create VNode with correct parameters', () => {
    const result = h('div', { class: 'test' });

    expect(result).toBeDefined();
    expect(result.type).toBe('div');
  });

  it('should handle Vue 3 event handlers', () => {
    const mockHandler = vi.fn();
    const result = h('button', {
      on: {
        click: mockHandler,
      },
    });

    expect(result).toBeDefined();
    expect(result.props).toHaveProperty('onClick');
  });

  it('should merge props correctly', () => {
    const result = h('div', {
      class: 'test',
      props: { 'data-id': 'test-id' } as any,
      domProps: { innerHTML: 'content' } as any,
    });

    expect(result).toBeDefined();
  });

  it('should handle children', () => {
    const children = ['Hello', 'World'];
    const result = h('div', {}, children);

    expect(result.children).toEqual(children);
  });

  it('should handle empty options', () => {
    const result = h('div');

    expect(result).toBeDefined();
    expect(result.type).toBe('div');
  });
});

describe('slot function', () => {
  it('should return function result if slot is function', () => {
    const mockSlot = vi.fn(() => 'slot content');
    const result = slot(mockSlot);

    expect(mockSlot).toHaveBeenCalled();
    expect(result).toBe('slot content');
  });

  it('should return slot directly if not function', () => {
    const slotContent = 'direct slot content';
    const result = slot(slotContent);

    expect(result).toBe(slotContent);
  });

  it('should handle undefined slot', () => {
    const result = slot(undefined);

    expect(result).toBeUndefined();
  });
});
