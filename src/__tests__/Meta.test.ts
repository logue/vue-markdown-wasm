import { describe, it, expect } from 'vitest';
import { Meta } from '@/index';

describe('Meta', () => {
  it('should export Meta object', () => {
    expect(Meta).toBeDefined();
    expect(typeof Meta).toBe('object');
  });

  it('should have required meta properties', () => {
    expect(Meta).toHaveProperty('name');
    expect(Meta).toHaveProperty('version');
    expect(Meta).toHaveProperty('author');
  });

  it('should have correct package name', () => {
    expect(Meta.name).toBe('vue-markdown-wasm');
  });

  it('should have author information', () => {
    expect(Meta.author).toBeDefined();
    expect(typeof Meta.author).toBe('object');
  });
});
