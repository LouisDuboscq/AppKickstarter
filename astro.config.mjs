import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";  
import preact from '@astrojs/preact';
import { theme } from './syntax-highlighting-theme';
import remarkSmartypants from 'remark-smartypants';
import { remarkFallbackLang } from './plugins/remark-fallback-lang';
//import rehypeSlug from 'rehype-slug';
		 
export default defineConfig({
  site: "https://appkickstarter.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(), 
		preact({ compat: true }),
  ],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: { theme },
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			[remarkSmartypants, { dashes: false }],
			// Add our custom plugin that marks links to fallback language pages
			remarkFallbackLang(), 
		],
	/*	rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
			// Translates the autolink headings anchors
			rehypei18nAutolinkHeadings(),
		],*/
	},
});
