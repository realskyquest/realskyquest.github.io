<script lang="ts">
	let msg = 'Lorem ipsum';

	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import Example from './components/Example.svelte';

	import Picture from './lib/Picture.svelte';

	import bannerAvif from './assets/banner.jpg?format=avif&as=srcset';
	import bannerWebp from './assets/banner.jpg?format=webp&as=srcset';
	import banner from './assets/banner.jpg?as=metadata';
</script>

<main>
	<Navbar />

	<section class="mt-40 mb-20">
		<article class="prose mx-auto">
			<Picture
				alt="banner"
				loading="eager"
				fetchpriority="high"
				image={banner}
				srcsetAvif={bannerAvif}
				srcsetWebp={bannerWebp}
				css="shadow-2xl rounded-lg"
				size="500;500"
			/>

			<h1 class="text-center">
				{msg}
			</h1>
		</article>
	</section>

	<section class="m-5">
		<Example></Example>
	</section>

	<Footer />
</main>
