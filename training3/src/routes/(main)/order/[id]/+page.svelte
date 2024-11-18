<script>
	// @ts-nocheck
	import { browser } from '$app/environment';
	import { catalog } from '$lib/catalog';
	import { onMount } from 'svelte';

	export let data;
	const chosenPoster = catalog[data.id];

	let ordered = [];
	onMount(() => {
		if (browser) {
			ordered = JSON.parse(localStorage.getItem(chosenPoster.title)) ?? [];
		}
	});
	let selected = [];
</script>

<h1>{chosenPoster.title}</h1>

<div class="h-4 p-4 mb-2 border rounded aspect-video">Layar</div>
{#each { length: 10 } as _, i}
	<div class="flex items-center gap-2 mb-2">
		{#each { length: 10 } as _, j}
			<button
				on:click={() => {
					selected = [...selected, `${i},${j}`];
				}}
				class:bg-emerald-600={selected.find((v) => v === `${i},${j}`)}
				class:bg-rose-600={ordered.find((v) => v === `${i},${j}`)}
				class="p-4 border rounded"
			>
			</button>
		{/each}
	</div>
{/each}

<button
	on:click={() => {
		ordered = [...ordered, ...selected];
		selected = [];
		if (browser) localStorage.setItem(chosenPoster.title, JSON.stringify(ordered));
	}}
	class="p-2 border rounded">Buy</button
>
