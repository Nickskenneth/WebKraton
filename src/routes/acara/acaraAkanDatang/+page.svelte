<script>
	import CardBesar from '$lib/components/CardBesar.svelte';

	let acaraList = [
		{
			title: 'Kirab Malam 1 Suro',
			content: 'Kirab satu Suro di Keraton Surakarta berasal...',
			imageSrc: '/Kirab1Suro.jpg',
			href: '/detailAcara'
		},
		{
			title: 'Garebeg Pasa',
			content: 'Garebeg Pasa adalah tradisi tahunan...',
			imageSrc: '/GarebegPasa.jpg',
			href: '/detailAcara'
		},
		{
			title: 'Tinggalan Dalem Jumenengan',
			content: 'Tingalan Dalem Jumenengan adalah tradisi...',
			imageSrc: '/TinggalanDalemJumenengan.jpg',
			href: '/detailAcara'
		},
		{
			title: 'Sesaji Mahesa Lawung',
			content: 'Sesaji Mahesa Lawung adalah tradisi dalam...',
			imageSrc: '/SesajiMahesaLawung.jpg',
			href: '/detailAcara'
		}
	];
</script>

<section class="bg-gray-100 py-10 px-5">
	<div class="container mx-auto">
		<!-- Grid Card -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each acaraList as acara}
				<CardBesar
					title={acara.title}
					content={acara.content}
					imageSrc={acara.imageSrc}
					href={acara.href}
				/>
			{/each}
		</div>
	</div>
</section>
