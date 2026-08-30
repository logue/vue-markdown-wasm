import { describe, expect, it, rs } from '@rstest/core';
import type { VNode, VNodeProps } from 'vue-demi';

import h, { slot } from '@/helpers/h-demi';

// Mock vue-demi
rs.mock('vue-demi', () => ({
  h: rs.fn((type, props, children) => ({
    type,
    props,
    children,
  })),
  isVue2: false,
}));

describe('h-demi', () => {
  it('should create VNode with correct parameters', () => {
    const result = h('div', {
      class: 'test',
    });

    expect(result).toBeDefined();
    expect(result.type).toBe('div');
  });

  it('should handle Vue 3 event handlers', () => {
    const mockHandler = rs.fn();
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
      props: {
        'data-id': 'test-id',
      } as VNodeProps,
      domProps: {
        innerHTML: 'content',
      } as VNodeProps,
    });

    expect(result).toBeDefined();
  });

  it('should handle children', () => {
    const children: VNode[] = [
      {
        type: 'span',
        props: {
          class: 'hello',
        },
      } as unknown as VNode,
      {
        type: 'span',
        props: {
          class: 'world',
        },
      } as unknown as VNode,
    ];
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
    const slotContent: VNode[] = [
      {
        type: 'span',
        props: {
          class: 'slot',
        },
      } as unknown as VNode,
    ];
    const mockSlot = rs.fn(() => slotContent);
    const result = slot(mockSlot);

    expect(mockSlot).toHaveBeenCalled();
    expect(result).toEqual(slotContent);
  });

  it('should return slot directly if not function', () => {
    const slotContent: VNode[] = [
      {
        type: 'span',
        props: {
          class: 'direct',
        },
      } as unknown as VNode,
    ];
    const result = slot(slotContent);

    expect(result).toEqual(slotContent);
  });

  it('should handle undefined slot', () => {
    const result = slot(undefined);

    expect(result).toEqual([]);
  });
});
