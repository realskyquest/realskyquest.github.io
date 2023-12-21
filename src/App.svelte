<script lang="ts">
	import svelteLogo from './assets/svelte.svg';
	import viteLogo from '/vite.svg';
	let msg = 'Lorem ipsum';
</script>

<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<img src={viteLogo} alt="Vite Logo" class="max-w-sm rounded-lg shadow-2xl" />
			<img src={svelteLogo} alt="Svelte Logo" class="max-w-sm rounded-lg shadow-2xl" />
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
