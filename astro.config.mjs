import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://moo7818.github.io',
  base: '/moo-log/',
  build: {
    format: 'directory',
  },
  integrations: [mdx()],
});
