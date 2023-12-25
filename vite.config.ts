import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import { imagetools } from 'vite-imagetools';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
	if (command === 'serve') {
		return {
			plugins: [imagetools(), svelte(), purgeCss()],
			base: '/'
		};
	} else {
		return {
			plugins: [imagetools(), svelte(), purgeCss()],
			base: 'https://cdn.jsdelivr.net/gh/realskyquest/realskyquest.github.io@gh-pages/',
			build: {
				rollupOptions: {
					output: {
						assetFileNames: (assetInfo) => {
							if (assetInfo.name == 'index.css') return 'assets/index.min.css';
							return 'assets/[name][extname]';
						},
						entryFileNames: 'assets/[name].min.js'
					}
				}
			}
		};
	}
});
