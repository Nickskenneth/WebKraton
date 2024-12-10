<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Untuk menangkap parameter ID dari URL
	import { getAcaraDetails } from '$lib/api'; // Fungsi API untuk mengambil detail acara
	import NavBarL from '$lib/components/NavBarL.svelte';

	let acara = {
		title: '',
		penanggungJawab: '',
		jamAcara: '',
		tanggalAcara: '',
		tipeAcara: '',
		lokasi: '',
		description: '',
		imageSrc: '',
		additionalImages: []
	};
	let showModal = false;
	let selectedImage = '';
	let idAcara = $page.params.id; // Tangkap parameter ID dari URL

	// Fungsi untuk membuka modal dengan gambar yang dipilih
	function openModal(image) {
		selectedImage = image;
		showModal = true;
	}

	// Fungsi untuk menutup modal
	function closeModal() {
		showModal = false;
		selectedImage = '';
	}

	// Ambil detail acara dari API
	onMount(async () => {
		try {
			const response = await getAcaraDetails(idAcara); // Panggil API berdasarkan ID
			if (response.Status === 200 && response.Data && response.Data.length > 0) {
				const acaraData = response.Data[0];
				acara = {
					title: acaraData.NamaAcara || 'Tidak ada',
					penanggungJawab: acaraData.PenanggungJawab || 'Tidak ada',
					jamAcara: acaraData.JamAcara || 'Tidak ada',
					tanggalMulai: acaraData.TanggalMulai || 'Tidak ada',
                    tanggalSelesai: acaraData.TanggalSelesai || 'Tidak ada',
					tipeAcara: acaraData.TipeAcara || 'Tidak ada',
					lokasi: acaraData.Lokasi || 'Tidak ada',
					description: acaraData.Deskripsi || 'Tidak ada',
					imageSrc: acaraData.FotoAcara || '/default-image.jpg', // Gambar default jika tidak ada
					additionalImages: acaraData.AdditionalImages || ['/default-image.jpg'] // Gambar tambahan default
				};
			} else {
				console.error('Data acara tidak ditemukan.');
			}
		} catch (error) {
			console.error('Error saat mengambil detail acara:', error);
		}
	});
</script>

<div class="container mx-auto p-6">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Bagian kiri: Gambar acara -->
		<div class="left-section">
			<img src={acara.imageSrc} alt={acara.title} class="rounded-lg mb-4" />

			<!-- Gambar tambahan -->
			<div class="additional-images flex gap-2">
				{#each acara.additionalImages as image}
					<img
						src={image}
						alt="Additional Image"
						class="w-24 h-24 object-cover rounded cursor-pointer"
						on:click={() => openModal(image)}
					/>
				{/each}
			</div>
		</div>

		<!-- Bagian kanan: Detail informasi acara -->
		<div class="right-section">
			<h1 class="text-3xl font-bold text-[#0b2e4b] mb-4">{acara.title}</h1>
			<div class="info space-y-2">
				<p><strong>Penanggung Jawab Acara:</strong> {acara.penanggungJawab}</p>
				<p><strong>Jam Acara:</strong> {acara.jamAcara}</p>
				<p><strong>Tanggal Mulai:</strong> {acara.tanggalMulai}</p>
                <p><strong>Tanggal Selesai:</strong> {acara.tanggalSelesai}</p>
				<p><strong>Jenis Acara:</strong> {acara.tipeAcara}</p>
				<p><strong>Lokasi Acara:</strong> {acara.lokasi}</p>
			</div>

			<div class="description mt-4">
				<h2 class="text-xl font-semibold text-[#0b2e4b]">Deskripsi</h2>
				<p>{acara.description}</p>
			</div>

			<!-- Tombol daftar acara -->
			<a
				href="/daftarAcara"
				class="btn-daftar mt-6 inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
			>
				Daftar Acara
			</a>
		</div>
	</div>

	<!-- Modal untuk memperbesar gambar -->
	{#if showModal}
		<div class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="modal-content bg-white p-6 rounded-lg relative">
				<span
					class="close absolute top-2 right-2 text-gray-600 cursor-pointer text-2xl"
					on:click={closeModal}>&times;</span
				>
				<img src={selectedImage} alt="Enlarged Image" class="rounded-lg max-w-full max-h-screen" />
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}
	.left-section img {
		width: 100%;
		border-width: 1px;
		border-color: #0b2e4b;
		outline-width: 2px;
	}
	.additional-images img {
		cursor: pointer;
	}
	.modal {
		background: rgba(0, 0, 0, 0.5);
	}
	.info p strong {
		font-weight: bold;
	}
</style>
