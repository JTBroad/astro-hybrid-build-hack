import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import { HybridBuild } from './_hybrid_hack/HybridIntegration';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), HybridBuild(
		[
			'src/pages/blog',
			'src/pages/about.md',
			'src/pages/blog.astro',
			'src/pages/index.astro',
		])],
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});
