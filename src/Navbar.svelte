<script lang="ts">
	import { themeHandler } from './lib/themeHandler';
	$: console.log($themeHandler);

	const base: string = import.meta.env.BASE_URL;

	let currentTheme = false;

	if ($themeHandler === 'dark') {
		currentTheme = true;
	}

	function handleThemeChange() {
		if ($themeHandler === 'light') {
			themeHandler.ChangeTheme('dark');
		} else if ($themeHandler === 'dark') {
			themeHandler.ChangeTheme('light');
		}
	}
</script>

<nav class="z-50 top-0 fixed w-full bg-base-100 shadow-sm">
	<div class="navbar">
		<div class="navbar-start">
			<div class="dropdown">
				<div title="mobileMenu" tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href={base}>Home</a></li>
					<li><a href={base}>Example</a></li>
				</ul>
			</div>
			<div class="btn btn-ghost text-xl">realSkyQuest</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href={base}>Home</a></li>
				<li><a href={base}>Example</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<label class="flex cursor-pointer gap-2" for="themeToggle" title="Light mode and Dark mode" />

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><circle cx="12" cy="12" r="5" /><path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/></svg
			>

			<input
				type="checkbox"
				class="toggle theme-controller ml-1 mr-1"
				name="light mode or dark mode toggle"
				id="themeToggle"
				bind:checked={currentTheme}
				on:click={() => handleThemeChange()}
			/>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
			>
		</div>
	</div>
	<div class="divider mt-0 mb-0 h-0"></div>
</nav>
