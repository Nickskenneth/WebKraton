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

<section class="situs-page">
	<h1 class="section-title">Situs Bersejarah</h1>

	<!-- Search bar -->
	<div class="search-bar">
		<input
			type="text"
			placeholder="Cari Situs Bersejarah..."
			bind:value={searchTerm}
			class="search-input"
		/>
	</div>

	<!-- Display filtered list of historical sites -->
	<div class="grid-layout">
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
	.situs-page {
		padding: 20px 40px;
		background-color: #f5f5f5;
	}

	.section-title {
		font-size: 36px;
		color: #004da3;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		padding-top: 24px;
		padding-bottom: 16px;
		text-align: center;
	}

	/* Styling the search bar */
	.search-bar {
		margin: 20px 0;
		display: flex;
		justify-content: flex-start;
	}

	.search-input {
		padding: 10px;
		width: 100%;
		max-width: 400px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.grid-layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin-top: 20px;
	}

	@media (max-width: 1200px) {
		.grid-layout {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.grid-layout {
			grid-template-columns: 1fr;
		}
	}
</style>
