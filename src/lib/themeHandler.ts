import { writable, type Writable } from 'svelte/store';
import { systemThemeHandler } from './systemThemeHandler';

const CreateThemeHandler = () => {
	const store: Writable<string | null> = writable(null);

	// Checked if theme is saved: disable event listener & set theme, get system theme
	function Init() {
		const savedTheme: string | null = localStorage.getItem('data-theme');

		if (savedTheme) {
			systemThemeHandler.Disable();
			document.documentElement.setAttribute('data-theme', savedTheme);
			store.set(savedTheme);
		} else {
			systemThemeHandler.subscribe((value) => {
				if (value) {
					document.documentElement.setAttribute('data-theme', value);
					store.set(value);
				}
			});
		}
	}

	// Initialise
	Init();

	// Change theme: disable event listener & save to local storage & set theme
	function ChangeTheme(newTheme: string) {
		systemThemeHandler.Disable();
		localStorage.setItem('data-theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		store.set(newTheme);
	}

	return {
		subscribe: store.subscribe,
		Init,
		ChangeTheme
	};
};

// Creates a new handler
export const themeHandler = CreateThemeHandler();
