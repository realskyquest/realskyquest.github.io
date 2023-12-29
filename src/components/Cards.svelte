<script lang="ts">
	export let cards: cardsType;
	export let icons: Array<any>;

	interface cardsType {
		title: string;
		list: Array<Array<string>>;
	}
</script>

<section class="m-5">
	<div
		class="border-4 border-black border-opacity-30 mx-auto card xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[350px] bg-base-200 shadow-xl"
	>
		<div class="card-body">
			<article class="prose mx-auto">
				<article class="prose mb-2">
					<h2 class="text-center">{cards.title}</h2>
					<div class="flex mt-10 mb-5">
						{#each icons as icon}
							<svelte:component this={icon} size={60} class="mx-auto"></svelte:component>
						{/each}
					</div>
					<div class="divider"></div>
				</article>
				<div class="flex flex-col gap-y-4">
					{#each cards.list as card}
						<div
							class="border-4 border-black border-opacity-20 mx-auto card w-full bg-base-100 shadow-xl"
						>
							<div class="card-body">
								<h3 class="card-title">{card[0]}</h3>
								<p>
									{card[1]}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</article>
		</div>
	</div>
</section>
