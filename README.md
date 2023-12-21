# Svelte + TS + Vite

This my template for a web app that uses svelte library.

`by realskyquest`

```bash
pnpm create vite@latest my-app
cd my-app
pnpm install
```

Add eslint

```bat
pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-svelte
```

Add prettier and tailwind + daisyui

```bat
pnpm i -D prettier prettier-plugin-svelte prettier-plugin-tailwindcss daisyui autoprefixer postcss tailwindcss @tailwindcss/typography
```

Add eslint config files along with prettier

`.eslintrc.cjs`

```js
/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
```

`.prettierrc`

```json
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
```

`.prettierignore` + `.eslintignore`

```
.DS_Store
node_modules
/dist
/package
.env
.env.*
!.env.example

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock
```

Finally update the `package.json`

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
    "lint": "prettier --check src/**/*.{ts,svelte} && eslint src/**/*.{ts,svelte}",
    "format": "prettier --write src/**/*.{ts,svelte}"
}
```

Update the project files

`main.ts`

```js
import './app.css';
import App from './App.svelte';

const app = new App({
	target: document.getElementById('app') as HTMLElement
});

export default app;
```

`app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`App.svelte`

```html
<script lang="ts">
	import svelteLogo from './assets/svelte.svg';
	import viteLogo from '/vite.svg';
	let msg = 'Lorem ipsum';
</script>

<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img src="{viteLogo}" alt="Vite Logo" class="max-w-sm rounded-lg shadow-2xl" />
			<img src="{svelteLogo}" alt="Svelte Logo" class="max-w-sm rounded-lg shadow-2xl" />
			<div>
				<div class="card m-5 mx-auto w-96 bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">Hello world!</h2>
						<p>{msg}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
```
