import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import { imagetools } from 'vite-imagetools';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/

function includes(str1: string, str2: string): boolean {
	return str1.indexOf(str2) !== -1;
}

export default defineConfig(({ command }) => {
	if (command === 'serve') {
		return {
			plugins: [imagetools(), svelte(), purgeCss()],
			base: '/'
		};
	} else {
		return {
			plugins: [imagetools(), svelte(), purgeCss(), splitVendorChunkPlugin()],
			base: 'https://cdn.jsdelivr.net/npm/@skyquest/realskyquest-github-io@0.0.6/',
			build: {
				rollupOptions: {
					output: {
						manualChunks: (id: string) => {
							if (includes(id, 'node_modules')) {
								return 'vendor';
							}
						}
					}
				}
			}
		};
	}
});
