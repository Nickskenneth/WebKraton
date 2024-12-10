<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { getOrganisasi } from '$lib/api'; // Fungsi untuk mengambil data API
	import CardKecil from '$lib/components/CardKecil.svelte';

	let organisasiList = [];
	let isLoading = true;
	let errorMessage = '';

	onMount(async () => {
		try {
			const data = await getOrganisasi();

			if (data.Status === 200 && Array.isArray(data.Data)) {
				organisasiList = data.Data.map((org) => ({
					title: org.NamaOrganisasi || 'Organisasi Tanpa Nama',
					imageSrc: org.FotoOrganisasi || '/defaultImage.png', // Placeholder jika FotoOrganisasi kosong
					href: `/kelompok/organisasi/${org.IdOrganisasi}` // Gunakan IdOrganisasi untuk tautan detail
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
