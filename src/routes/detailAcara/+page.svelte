<script>
    import NavBarL from '$lib/components/NavBarL.svelte';

	// Data acara
	let acara = {
		title: 'Kirab 1 Suro',
		penanggungJawab: 'xxx',
		jamAcara: '23.59 - Selesai',
		tanggalAcara: '07 Juli 2024 / Minggu Kliwon, 29 Besar 1957',
		tipeAcara: 'Umum',
		lokasi: 'Jl. Kamandungan, Baluwarti, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57144. -7.577540524712154, 110.82866091423664',
		description: `Kirab Pusaka Malam 1 Suro di Keraton Surakarta adalah perayaan tahunan yang menandai tahun baru Jawa
                      dengan pengusungan pusaka keraton. Acara dimulai dengan doa bersama di keraton, diikuti oleh prosesi 
                      mengarak pusaka seperti keris dan barang bersejarah, disertai iringan musik gamelan dan tarian tradisional.`,
		imageSrc: '/Kirab1Suro.jpg',
		additionalImages: ['/Kirab1Suro.jpg', '/Kirab1Suro.jpg', '/Kirab1Suro.jpg']
	};

	let showModal = false;
	let selectedImage = '';

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
</script>

<!-- NavBarL Component -->
<NavBarL />

<div class="container mx-auto p-6">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Bagian kiri: Gambar acara -->
		<div class="left-section">
			<img src={acara.imageSrc} alt={acara.title} class="rounded-lg mb-4" />

			<!-- Gambar tambahan -->
			<div class="additional-images flex gap-2">
				{#each acara.additionalImages as image}
					<img src={image} alt="Additional Image" class="w-24 h-24 object-cover rounded cursor-pointer"
						on:click={() => openModal(image)} />
				{/each}
			</div>
		</div>

		<!-- Bagian kanan: Detail informasi acara -->
		<div class="right-section">
			<h1 class="text-3xl font-bold text-[#0b2e4b] mb-4">{acara.title}</h1>
			<div class="info space-y-2">
				<p><strong>Penanggung Jawab Acara:</strong> {acara.penanggungJawab}</p>
				<p><strong>Jam Acara:</strong> {acara.jamAcara}</p>
				<p><strong>Tanggal Acara:</strong> {acara.tanggalAcara}</p>
				<p><strong>Jenis Acara:</strong> {acara.tipeAcara}</p>
				<p><strong>Lokasi Acara:</strong> {acara.lokasi}</p>
			</div>

			<div class="description mt-4">
				<h2 class="text-xl font-semibold text-[#0b2e4b]">Deskripsi</h2>
				<p>{acara.description}</p>
			</div>

			<!-- Tombol daftar acara -->
			<a href="\daftarAcara" class="btn-daftar mt-6 inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
				Daftar Acara
			</a>
		</div>
	</div>

	<!-- Modal untuk memperbesar gambar -->
	{#if showModal}
		<div class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="modal-content bg-white p-6 rounded-lg relative">
				<span class="close absolute top-2 right-2 text-gray-600 cursor-pointer text-2xl" on:click={closeModal}>&times;</span>
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
