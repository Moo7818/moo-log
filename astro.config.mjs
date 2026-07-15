import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages 部署到子路径 /moo-log/，Cloudflare Pages 部署到根路径
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://moo7818.github.io' : 'https://moo7818.cc.cd',
  base: isGitHubPages ? '/moo-log/' : '/',
  build: {
    format: 'directory',
  },
  integrations: [mdx()],
});
