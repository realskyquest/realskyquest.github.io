import { writable, type Writable } from 'svelte/store';

const CreateSystemThemeHandler = () => {
	const store: Writable<string | null> = writable(null);

	// Get the system theme
	const getSystemTheme: MediaQueryList = matchMedia('(prefers-color-scheme: dark)');

	function Init() {
		// Get current system theme
		const currentSystemTheme: MediaQueryList = matchMedia('(prefers-color-scheme: dark)');
		if (currentSystemTheme.matches) {
			store.set('dark');
		} else {
			store.set('light');
		}
	}

	// Initialise
	Init();
	getSystemTheme.addEventListener('change', Init);

	// Remove the event listener
	function Disable() {
		getSystemTheme.removeEventListener('change', Init);
	}

	return {
		subscribe: store.subscribe,
		Init,
		Disable
	};
};

// Creates a new handler
export const systemThemeHandler = CreateSystemThemeHandler();
