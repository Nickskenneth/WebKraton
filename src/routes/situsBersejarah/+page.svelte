<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { getSitus } from '$lib/api'; // Mengambil fungsi dari api.js
	import CardBesar from '$lib/components/CardBesar.svelte';
	import NavBarL from '$lib/components/NavBarL.svelte';

	// State untuk menyimpan data situs dan status loading
	let situsList = [];
	let searchTerm = '';
	let isLoading = true;
	let errorMessage = '';

	// Ambil data situs dari API saat komponen dimuat
	onMount(async () => {
		try {
			const data = await getSitus(); // Panggil fungsi API

			// Memeriksa apakah data berhasil diambil
			if (data.Status === 200 && Array.isArray(data.Data)) {
				// Memetakan data situs jika valid
				situsList = data.Data.map((situs) => ({
					title: situs.Nama || 'Situs Tanpa Nama', // NamaSitus atau fallback
					content: situs.Deskripsi || 'Deskripsi tidak tersedia', // Deskripsi atau fallback
					imageSrc: situs.ImageUrl || '/defaultImage.png', // Gambar atau fallback
					href: `/situsBersejarah/${situs.Id}` // Link detail menggunakan ID situs
				}));
			} else {
				throw new Error('Data tidak valid atau tidak ada');
			}
		} catch (error) {
			errorMessage = 'Terjadi kesalahan saat mengambil data: ' + error.message;
		} finally {
			isLoading = false; // Set status loading selesai
		}
	});
</script>

<NavBarL />

<section class="p-8 bg-gray-100">
	<div class="max-w-screen-xl mx-auto">
		<!-- Header section with title and button -->
		<div class="flex justify-center items-center mb-6">
			<h1 class="text-3xl font-bold text-blue-600 text-center">Situs Bersejarah</h1>
		</div>

		<!-- Search bar -->
		<div class="flex justify-center mb-6">
			<input
				type="text"
				placeholder="Cari Situs Bersejarah..."
				bind:value={searchTerm}
				class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
			/>
		</div>

		<!-- Display loading, error, or situs list -->
		{#if isLoading}
			<p>Loading...</p>
		{:else if errorMessage}
			<p class="text-red-500">{errorMessage}</p>
		{:else}
			<!-- Display filtered list of historical sites -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each situsList.filter((situs) => situs.title
						.toLowerCase()
						.includes(searchTerm.toLowerCase())) as situs}
					<CardBesar
						title={situs.title}
						content={situs.content}
						imageSrc={situs.imageSrc}
						href={situs.href}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>
