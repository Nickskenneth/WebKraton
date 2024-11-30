<script>
	import { onMount } from 'svelte';
	import { getKomunitas } from '$lib/api'; // Mengambil fungsi getKomunitas
	import CardKecil from '$lib/components/CardKecil.svelte'; // Menggunakan CardKecil untuk menampilkan komunitas

	let komunitasList = [];
	let isLoading = true;
	let errorMessage = '';

	// Ambil data dari API menggunakan fungsi getKomunitas
	onMount(async () => {
		try {
			const data = await getKomunitas(); // Memanggil API

			// Memeriksa apakah Status API adalah 200
			if (data.Status === 200 && Array.isArray(data.Data)) {
				// Memetakan data komunitas
				komunitasList = data.Data.map((komunitas) => ({
					title: komunitas.NamaKomunitas || 'Komunitas Tanpa Nama', // NamaKomunitas atau fallback
					imageSrc: komunitas.Gambar
						? `http://manpro.crossnet.co.id/images/${komunitas.Gambar}`
						: '/defaultImage.png', // Gambar dari API atau fallback
					href: `/detailKomunitas/${komunitas.Id}` // ID digunakan untuk link ke detail komunitas
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
		<!-- Menampilkan loading, error, atau daftar komunitas -->
		{#if isLoading}
			<p>Loading...</p>
		{:else if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{:else}
			<!-- Grid Card untuk menampilkan komunitas -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each komunitasList as komunitas}
					<CardKecil title={komunitas.title} imageSrc={komunitas.imageSrc} href={komunitas.href} />
				{/each}
			</div>
		{/if}
	</div>
</section>
