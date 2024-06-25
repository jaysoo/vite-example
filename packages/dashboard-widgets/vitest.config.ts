import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    isolate: false,
    pool: 'forks',
    poolOptions: {
      forks: {
        maxForks: 1,
      },
    },
    environment: 'jsdom',
    watch: false,
  },
});
