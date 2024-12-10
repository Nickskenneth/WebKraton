<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { getKomunitas } from '$lib/api'; // Fungsi untuk mengambil data API
	import CardKecil from '$lib/components/CardKecil.svelte';

	let komunitasList = [];
	let isLoading = true;
	let errorMessage = '';

	// Mengambil data komunitas dari API
	onMount(async () => {
		try {
			const data = await getKomunitas();

			if (data.Status === 200 && Array.isArray(data.Data)) {
				komunitasList = data.Data.map((kom) => ({
					title: kom.NamaKomunitas || 'Komunitas Tanpa Nama',
					imageSrc: kom.FotoKomunitas || '/defaultImage.png', // Placeholder jika FotoKomunitas kosong
					href: `/kelompok/komunitas/${kom.IdKomunitas}` // Gunakan IdKomunitas untuk tautan detail
				}));
			} else {
				throw new Error('Data tidak valid atau kosong');
			}
		} catch (error) {
			errorMessage = 'Terjadi kesalahan saat mengambil data: ' + error.message;
		} finally {
			isLoading = false;
		}
	});
</script>

<section class="bg-gray-100 py-10 px-5">
	<div class="container mx-auto">
		{#if isLoading}
			<p>Loading...</p>
		{:else if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each komunitasList as komunitas}
					<CardKecil
						title={komunitas.title}
						imageSrc={komunitas.imageSrc}
						href={komunitas.href}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
