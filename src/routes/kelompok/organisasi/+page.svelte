<script>
	import CardKecil from '$lib/components/CardKecil.svelte'; // Gunakan CardKecil untuk menampilkan organisasi

	let organisasiList = [
		{
			title: 'Bregada - Prajurit Karaton Surakarta',
			imageSrc: '/Bregada.png',
			href: '/detailOrganisasi'
		},
		{
			title: 'Putri Narpo Wandowo',
			imageSrc: '/PutriNarpoWandowo.jpg',
			href: '/detailOrganisasi'
		},
		{
			title: 'Lembaga Dewan Adat Keraton Surakarta',
			imageSrc: '/LembagaDewanAdatKeratonSurakarta.jpg',
			href: '/detailOrganisasi'
		},
		{
			title: 'Bregada - Prajurit Karaton Surakarta',
			imageSrc: '/Bregada.png',
			href: '/detailOrganisasi'
		},
		{
			title: 'Bregada - Prajurit Karaton Surakarta',
			imageSrc: '/Bregada.png',
			href: '/detailOrganisasi'
		},
		{
			title: 'Putri Narpo Wandowo',
			imageSrc: '/PutriNarpoWandowo.jpg',
			href: '/detailOrganisasi'
		},
		{
			title: 'Lembaga Dewan Adat Keraton Surakarta',
			imageSrc: '/LembagaDewanAdatKeratonSurakarta.jpg',
			href: '/detailOrganisasi'
		},
		{
			title: 'Bregada - Prajurit Karaton Surakarta',
			imageSrc: '/Bregada.png',
			href: '/detailOrganisasi'
		}
	];
</script>

<section class="bg-gray-100 py-10 px-5">
	<div class="container mx-auto">
		<!-- Grid Card -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each organisasiList as organisasi}
				<CardKecil title={organisasi.title} imageSrc={organisasi.imageSrc} href={organisasi.href} />
			{/each}
		</div>
	</div>
</section>
