import './app.css';
import App from './App.svelte';

if (import.meta.env.DEV === false) {
	const script: HTMLScriptElement = document.createElement('script');
	script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
	script.defer = true;
	script.dataset.cfBeacon = '{"token": "c0ae7063fd9b4cd58c35d0016261c940"}';
	document.body.appendChild(script);
}

const app = new App({
	target: document.getElementById('app') as HTMLElement
});

export default app;
