	<script>
		//@ts-nocheck
		import { onMount } from 'svelte';
		import { getAcara } from '$lib/api';
		import CardBesar from '$lib/components/CardBesar.svelte';

		let acaraList = [];

		onMount(async () => {
			try {
				const response = await getAcara();
				const currentDate = new Date();

				// Filter acara yang akan datang menggunakan TanggalMulai
				acaraList = response.Data.filter((acara) => new Date(acara.TanggalMulai) >= currentDate);
			} catch (error) {
				console.error('Error saat memuat data acara akan datang:', error);
			}
		});
	</script>

	<section class="bg-gray-100 py-10 px-5">
		<div class="container mx-auto">
			{#if acaraList.length === 0}
				<p class="text-center text-gray-500">Tidak ada acara akan datang.</p>
			{:else}
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{#each acaraList as acara}
						<CardBesar
							title={acara.NamaAcara}
							content={acara.Deskripsi}
							imageSrc={acara.FotoAcara || '/default-image.jpg'}
							href={`/acara/acaraAkanDatang/${acara.Id}`}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</section>
