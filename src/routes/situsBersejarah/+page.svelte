<script lang="ts">
	//@ts-nocheck
	import CardBesar from '$lib/components/CardBesar.svelte';
	import NavBarL from '$lib/components/NavBarL.svelte';

	// State for storing search term
	let searchTerm = '';

	// List of historical sites (situsList)
	let situsList = [
		{
			title: 'Keraton Surakarta Hadiningrat',
			content:
				'Keraton Surakarta Hadiningrat didirikan oleh Paku Buwono II pada tahun 1745 di Surakarta, Jawa Tengah. Keraton ini merupakan pusat kebudayaan dan pemerintahan Kesultanan Surakarta...',
			imageSrc: '/KeratonSurakarta.jpg',
			href: '/detailSitus'
		},
		{
			title: 'Pesanggerahan Langenharjo',
			content:
				'Pesanggrahan Langenharjo dibangun pada masa Pakubuwono X di akhir abad ke-19 di Sukoharjo, Jawa Tengah, sebagai tempat istirahat keluarga Keraton Surakarta...',
			imageSrc: '/Langenharjo.jpg',
			href: '/detailSitus'
		},
		{
			title: 'Bunker Kuno Surakarta',
			content:
				'Berukuran 16×24 meter, bunker ini pertama kali ditemukan pada tahun 2012. Saat diteliti oleh tim arkeologi dari Yogyakarta, bunker ini diperkirakan dibangun pada tahun 1800-an...',
			imageSrc: '/BunkerKunoSurakarta.jpg',
			href: '/detailSitus'
		},
		{
			title: 'CC Surakarta Hadiningrat',
			content:
				'Keraton Surakarta Hadiningrat didirikan oleh Paku Buwono II pada tahun 1745 di Surakarta, Jawa Tengah. Keraton ini merupakan pusat kebudayaan dan pemerintahan Kesultanan Surakarta...',
			imageSrc: '/KeratonSurakarta.jpg',
			href: '/detailSitus'
		},
		{
			title: 'AA Langenharjo',
			content:
				'Pesanggrahan Langenharjo dibangun pada masa Pakubuwono X di akhir abad ke-19 di Sukoharjo, Jawa Tengah, sebagai tempat istirahat keluarga Keraton Surakarta...',
			imageSrc: '/Langenharjo.jpg',
			href: '/detailSitus'
		},
		{
			title: 'BB Kuno Surakarta',
			content:
				'Berukuran 16×24 meter, bunker ini pertama kali ditemukan pada tahun 2012. Saat diteliti oleh tim arkeologi dari Yogyakarta, bunker ini diperkirakan dibangun pada tahun 1800-an...',
			imageSrc: '/BunkerKunoSurakarta.jpg',
			href: '/detailSitus'
		}
	];

	// Filtered situs list based on the search term
	$: filteredSitusList = situsList.filter((situs) =>
		situs.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<NavBarL />
<section class="p-8 bg-gray-100">
	<h1 class="text-3xl font-bold text-blue-600 text-center mb-8">Situs Bersejarah</h1>

	<!-- Search bar -->
	<div class="flex justify-center mb-6">
		<input
			type="text"
			placeholder="Cari Situs Bersejarah..."
			bind:value={searchTerm}
			class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
		/>
	</div>

	<!-- Display filtered list of historical sites -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl px-4">
		{#each filteredSitusList as situs}
			<CardBesar
				title={situs.title}
				content={situs.content}
				imageSrc={situs.imageSrc}
				href={situs.href}
			/>
		{/each}
	</div>
</section>

<style>
	/* Tidak diperlukan styling manual karena semuanya menggunakan Tailwind CSS */
</style>
