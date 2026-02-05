// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// GitHub Pages routing:
// - User/Org pages repo: <username>.github.io  -> base = '/'
// - Project pages repo: <repo>                -> base = '/<repo>/'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPages = repo?.endsWith('.github.io');
const base = isUserPages ? '/' : repo ? `/${repo}/` : '/';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://camilopestana.github.io',
	base,
	integrations: [mdx(), sitemap()],
});
