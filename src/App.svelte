<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	import { cardsList } from './lib/cards';
	import Cards from './components/Cards.svelte';

	import {
		Code2,
		Database,
		FolderGit2,
		Frame,
		Github,
		Mail,
		PenBox,
		TerminalSquare
	} from 'lucide-svelte';

	import Picture from './components/Picture.svelte';

	import bannerAvif from './assets/banner.jpg?format=avif&as=metadata';
	import bannerAvifM from './assets/banner-m.jpg?format=avif&as=metadata';
	import bannerAvifS from './assets/banner-s.jpg?format=avif&as=metadata';

	import bannerWebp from './assets/banner.jpg?format=webp&as=metadata';
	import bannerWebpM from './assets/banner-m.jpg?format=webp&as=metadata';
	import bannerWebpS from './assets/banner-s.jpg?format=webp&as=metadata';

	const bannerAvifSrcset: string = `${bannerAvif.src} ${bannerAvif.width}w, ${bannerAvifM.src} ${bannerAvifM.width}w, ${bannerAvifS.src} ${bannerAvifS.width}w`;
	const bannerWebpSrcset: string = `${bannerWebp.src} ${bannerWebp.width}w, ${bannerWebpM.src} ${bannerWebpM.width}w, ${bannerWebpS.src} ${bannerWebpS.width}w`;

	import banner from './assets/banner.jpg?as=metadata';
</script>

<main>
	<Navbar />
	<section class="mt-40 mb-20">
		<div
			class="border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] m-6 bg-base-100 shadow-xl"
		>
			<Picture
				alt="banner"
				loading="eager"
				fetchpriority="high"
				image={banner}
				srcsetAvif={bannerAvifSrcset}
				srcsetWebp={bannerWebpSrcset}
				css="rounded-t-xl"
				size="auto"
			/>
			<div class="card-body">
				<article class="prose mx-auto">
					<h1 class="text-center">About me</h1>
					<p class="text-center">
						Hello! I'm realSkyQuest, a young programmer with 4 years of experience. <br /> I specialize
						in programming and has some experience in user interface, currently expanding my skills and
						knowledge. Also welcome to my website
					</p>
				</article>
			</div>
		</div>
	</section>

	<Cards cards={cardsList[0]} icons={[Code2, TerminalSquare, FolderGit2]}></Cards>
	<Cards cards={cardsList[1]} icons={[Frame, Database, Github, PenBox]}></Cards>

	<section class="m-5">
		<div
			class="border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] m-6 bg-base-100 shadow-xl"
		>
			<div class="card-body">
				<article class="prose mx-auto">
					<h2 class="text-center">Contact me</h2>
					<div class="divider"></div>
					<div class="sm:flex gap-x-10">
						<a href="mailto:connectskyquest@outlook.com" title="Email">
							<Mail size="150" />
						</a>
						<a href="https://github.com/realskyquest/" target="_blank" title="Github">
							<Github size="150" />
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>

	<Footer />
</main>
