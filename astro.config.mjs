import sitemap from "@astrojs/sitemap"
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
	  tailwind(),
	  sitemap(),
	  vue(),
  ],
  base: '/',
  site: "https://liberluna.github.io"
});
