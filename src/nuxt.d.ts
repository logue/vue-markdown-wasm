type NuxtAppLike = {
  vueApp: {
    component: (name: string, component: unknown) => void;
  };
};

export default function nuxtPlugin(nuxtApp: NuxtAppLike): void;
