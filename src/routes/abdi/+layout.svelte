<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Store untuk ID Abdi
	const idAbdi = writable('');
	setContext('idAbdi', idAbdi);

	let inputAbdi = ''; // Untuk input user
</script>

<NavBarL />

<section class="bg-gray-100 py-10 px-5">
	<div class="container mx-auto">
		<!-- Judul Halaman -->
		<h1 class="text-3xl font-bold text-center text-blue-600 mb-8">Cari Abdi</h1>

		<!-- Form Input ID Abdi -->
		<div class="mb-8">
			<label for="idAbdi" class="block text-lg font-semibold mb-2">ID Abdi</label>
			<div class="flex items-center gap-4">
				<input
					id="idAbdi"
					type="text"
					bind:value={inputAbdi}
					placeholder="Masukkan ID Abdi"
					class="w-full border rounded px-4 py-2"
				/>
				<button
					on:click={() => idAbdi.set(inputAbdi)}
					class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					aria-disabled={!inputAbdi.trim()} 
				>
					Cari
				</button>
			</div>
		</div>
		<!-- Slot untuk Konten -->
		<slot />
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
