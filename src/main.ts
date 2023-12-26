import './app.css';
import App from './App.svelte';

const dev = import.meta.env.DEV;

const analytics: HTMLElement | null = document.getElementById('analytics');
if (analytics && dev === false) {
	analytics.outerHTML = `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0481a5a0062e4985b3f3ec6378d209e1"}'></script><!-- End Cloudflare Web Analytics -->`;
}

const app = new App({
	target: document.getElementById('app') as HTMLElement
});

export default app;
