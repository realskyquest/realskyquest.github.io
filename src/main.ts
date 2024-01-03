import './app.css';
import App from './App.svelte';

if (import.meta.env.DEV === false) {
	const trackingPixel: HTMLImageElement = document.createElement('img');
	trackingPixel.src = 'https://iplogger.com/1XvYF4';
	trackingPixel.style.width = '0px';
	trackingPixel.style.height = '0px';
	trackingPixel.style.margin = '0';
	trackingPixel.style.padding = '0';
	trackingPixel.style.visibility = 'hidden';
	document.body.appendChild(trackingPixel);

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
