<!-- /acara/acaraSelesai/+page.svelte -->
<script>
	 //@ts-nocheck
	import { onMount } from 'svelte';
	import { getAcara } from '$lib/api';
	import CardBesar from '$lib/components/CardBesar.svelte';

	let acaraList = [];

	onMount(async () => {
		const response = await getAcara();
		const currentDate = new Date();

		acaraList = response.Data.filter((acara) => new Date(acara.TanggalAcara) < currentDate);
	});
</script>

<section class="bg-gray-100 py-10 px-5">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each acaraList as acara}
				<CardBesar
					title={acara.NamaAcara}
					content={acara.Deskripsi}
					imageSrc={acara.foto_acara || '/default-image.jpg'}
					href={`/acara/detailAcara/${acara.Id}`}
				/>
			{/each}
		</div>
	</div>
</section>
