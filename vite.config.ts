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
			base: 'https://cdn.jsdelivr.net/npm/@skyquest/realskyquest-github-io@0.0.4/'
		};
	}
});
