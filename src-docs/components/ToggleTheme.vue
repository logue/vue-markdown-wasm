<script setup vapor lang="ts">
import { useDark, useToggle } from '@vueuse/core';
/** Bootstrap 5.3 Toggle Dark mode */
import { watch } from 'vue';
import CircleHalf from './CircleHalf.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

watch(
  () => isDark.value,
  (dark) =>
    document.documentElement.setAttribute(
      'data-bs-theme',
      dark ? 'dark' : 'light',
    ),
);
</script>

<template>
  <button
    type="button"
    class="btn btn-link nav-link"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleDark()"
  >
    <CircleHalf />
  </button>
</template>
