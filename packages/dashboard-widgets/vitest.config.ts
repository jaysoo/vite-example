import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    isolate: false,
    pool: 'forks',
    poolOptions: {
      forks: {
        minForks: 1,
        maxForks: 2,
      },
    },
    environment: 'jsdom',
    watch: false,
  },
});
