import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://moo7818.cc.cd',
  build: {
    format: 'directory',
  },
  integrations: [mdx()],
});
