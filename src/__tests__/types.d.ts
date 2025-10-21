/// <reference types="vitest/globals" />

declare module '@vue/test-utils' {
  export interface VueWrapper<T = any> {
    vm: T;
    element: Element;
    exists(): boolean;
    classes(): string[];
    props(): Record<string, any>;
    props(key: string): any;
    setProps(props: Record<string, any>): Promise<void>;
    emitted(): Record<string, any[]>;
    emitted(event: string): any[];
    $nextTick(): Promise<void>;
  }

  export function mount<T = any>(
    component: T,
    options?: {
      props?: Record<string, any>;
      slots?: Record<string, any>;
      global?: {
        plugins?: any[];
        mocks?: Record<string, any>;
      };
    }
  ): VueWrapper<T>;
}
