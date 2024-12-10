<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';
	import { getAbdiDetails } from '$lib/api'; // Fungsi API
	import NavBarL from '$lib/components/NavBarL.svelte';

	// Ambil context ID Abdi dari layout
	const idAbdi = getContext('idAbdi');
	let currentIdAbdi = '';
	let unsubscribe;

	let abdiInfo = {
		asmaTimur: 'Tidak tersedia',
		asmaDalem: 'Tidak tersedia',
		wongso: 'Tidak tersedia',
		ttl: 'Tidak tersedia',
		jenisKelamin: 'Tidak tersedia',
		domisili: 'Tidak tersedia',
		email: 'Tidak tersedia',
		noTelp: 'Tidak tersedia',
		namaAyah: 'Tidak tersedia',
		namaIbu: 'Tidak tersedia',
		gelar: 'Tidak tersedia'
	};

	let isLoading = false;
	let errorMessage = '';

	// Dengarkan perubahan ID Abdi
	onMount(() => {
		unsubscribe = idAbdi.subscribe(async (id) => {
			if (id.trim()) {
				currentIdAbdi = id;
				await fetchAbdiDetails();
			}
		});

		return () => unsubscribe();
	});

	// Ambil data Abdi dari API
	async function fetchAbdiDetails() {
		isLoading = true;
		errorMessage = '';
		try {
			const response = await getAbdiDetails(currentIdAbdi);
			if (response.Status === 200 && response.Data && response.Data.length > 0) {
				const abdiData = response.Data[0];
				abdiInfo = {
					asmaTimur: abdiData.AsmaTimur || 'Tidak tersedia',
					asmaDalem: abdiData.AsmaDalem || 'Tidak tersedia',
					wongso: abdiData.Wongso || 'Tidak tersedia',
					ttl: abdiData.TTL || 'Tidak tersedia',
					jenisKelamin: abdiData.JenisKelamin || 'Tidak tersedia',
					domisili: abdiData.Domisili || 'Tidak tersedia',
					email: abdiData.Email || 'Tidak tersedia',
					noTelp: abdiData.NoTelp || 'Tidak tersedia',
					namaAyah: abdiData.NamaAyah || 'Tidak tersedia',
					namaIbu: abdiData.NamaIbu || 'Tidak tersedia',
					gelar: `ID Gelar: ${abdiData.Id_Gelar}` || 'Tidak tersedia'
				};
			} else {
				errorMessage = 'Data Abdi tidak ditemukan.';
			}
		} catch (error) {
			console.error('Error:', error);
			errorMessage = 'Terjadi kesalahan saat mengambil data.';
		} finally {
			isLoading = false;
		}
	}
</script>

<section class="bg-gray-100 p-6" hidden={!currentIdAbdi}>
	<h2 class="text-3xl font-bold text-blue-600 text-center mb-6">Detail Abdi</h2>

	<!-- Loading dan Error -->
	{#if isLoading}
		<p class="text-center text-blue-500">Memuat data...</p>
	{:else if errorMessage}
		<p class="text-center text-red-500">{errorMessage}</p>
	{:else}
		<div class="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
			<!-- Detail Abdi -->
			<p><strong>Asma Timur:</strong> {abdiInfo.asmaTimur}</p>
			<p><strong>Asma Dalem:</strong> {abdiInfo.asmaDalem}</p>
			<p><strong>Wongso:</strong> {abdiInfo.wongso}</p>
			<p><strong>TTL:</strong> {abdiInfo.ttl}</p>
			<p><strong>Jenis Kelamin:</strong> {abdiInfo.jenisKelamin}</p>
			<p><strong>Domisili:</strong> {abdiInfo.domisili}</p>
			<p><strong>Email:</strong> {abdiInfo.email}</p>
			<p><strong>No Telepon:</strong> {abdiInfo.noTelp}</p>
			<p><strong>Nama Ayah:</strong> {abdiInfo.namaAyah}</p>
			<p><strong>Nama Ibu:</strong> {abdiInfo.namaIbu}</p>
			<p><strong>Gelar:</strong> {abdiInfo.gelar}</p>
		</div>
	{/if}
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
