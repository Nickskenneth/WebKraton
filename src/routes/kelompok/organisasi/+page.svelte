<script>
	import { onMount } from 'svelte';
	import { getOrganisasi } from '$lib/api'; // Mengambil fungsi dari api.js
	import CardKecil from '$lib/components/CardKecil.svelte';

	let organisasiList = [];
	let isLoading = true;
	let errorMessage = '';

	// Ambil data dari API menggunakan fungsi getOrganisasi
	onMount(async () => {
		try {
			const data = await getOrganisasi(); // Memanggil API

			// Memeriksa apakah Status API adalah 200
			if (data.Status === 200 && Array.isArray(data.Data)) {
				// Memetakan data jika Data adalah array
				organisasiList = data.Data.map((org) => ({
					title: org.NamaKomunitas || 'Organisasi Tanpa Nama', // NamaKomunitas atau fallback
					imageSrc: '/defaultImage.png', // Gambar placeholder
					href: `/detailOrganisasi/${org.Id}` // ID digunakan untuk link ke detail
				}));
			} else {
				throw new Error('Data tidak valid atau tidak ada');
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
		<!-- Grid Card -->
		{#if isLoading}
			<p>Loading...</p>
		{:else if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each organisasiList as organisasi}
					<CardKecil
						title={organisasi.title}
						imageSrc={organisasi.imageSrc}
						href={organisasi.href}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
