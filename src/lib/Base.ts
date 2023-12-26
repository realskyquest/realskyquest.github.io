import { writable, type Writable } from 'svelte/store';

const CreateBase = () => {
	const store: Writable<string | null> = writable(null);

	function Init() {
		const dev: boolean = import.meta.env.DEV;
		if (dev === true) {
			store.set('http://localhost:5173/');
		} else {
			store.set('https://realskyquest.github.io/');
		}
	}

	Init();

	return {
		subscribe: store.subscribe,
		Init
	};
};

export const base = CreateBase();
