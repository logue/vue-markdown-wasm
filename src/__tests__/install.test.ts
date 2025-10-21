import { describe, it, expect, vi } from 'vitest';
import { install } from '@/index';

describe('Install Function', () => {
  it('should register VueMarkdown component', () => {
    const mockApp = {
      component: vi.fn(),
    };

    install(mockApp);

    expect(mockApp.component).toHaveBeenCalledWith(
      'VueMarkdown',
      expect.any(Object)
    );
  });

  it('should be a function', () => {
    expect(typeof install).toBe('function');
  });

  it('should handle multiple app instances', () => {
    const mockApp1 = {
      component: vi.fn(),
    };
    const mockApp2 = {
      component: vi.fn(),
    };

    install(mockApp1);
    install(mockApp2);

    expect(mockApp1.component).toHaveBeenCalledTimes(1);
    expect(mockApp2.component).toHaveBeenCalledTimes(1);
  });
});
