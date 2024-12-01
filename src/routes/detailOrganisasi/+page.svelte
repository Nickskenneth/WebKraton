<script>
	import { onMount } from 'svelte';
	import { getOrganisasiDetails } from '$lib/api'; // Mengimpor fungsi dari api.js
	import NavBarL from '$lib/components/NavBarL.svelte';

	let organisasi = {
		title: '',
		lokasi: '',
		penanggungJawab: '',
		pembina: '',
		pelindung: '',
		email: '',
		nomorTelepon: '',
		jumlahAnggota: 0,
		description: '',
		imageSrc: '',
		additionalImages: []
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

	// Mengambil data organisasi dari API menggunakan api.js
	async function fetchDetailOrganisasi() {
		try {
			const data = await getOrganisasiDetails(); // Panggil fungsi dari api.js
			organisasi = {
				title: data.title || 'Tidak ada nama organisasi',
				lokasi: data.lokasi || 'Tidak ada lokasi',
				penanggungJawab: data.penanggungJawab || 'Tidak ada penanggung jawab',
				pembina: data.pembina || 'Tidak ada pembina',
				pelindung: data.pelindung || 'Tidak ada pelindung',
				email: data.email || 'Tidak ada email',
				nomorTelepon: data.nomorTelepon || 'Tidak ada nomor telepon',
				jumlahAnggota: data.jumlahAnggota || 0,
				description: data.description || 'Tidak ada deskripsi',
				imageSrc: data.imageSrc || '/default-image.png', // Ganti dengan gambar default jika tidak ada
				additionalImages: data.additionalImages || ['/default-image.png'] // Ganti dengan gambar default jika tidak ada
			};
		} catch (error) {
			console.error('Error saat mengambil data organisasi:', error);
		}
	}

	// Mengambil data saat komponen pertama kali dimuat
	onMount(fetchDetailOrganisasi);
</script>

<!-- NavBarL Component -->
<NavBarL />

<div class="container mx-auto p-6">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Bagian kiri: Gambar organisasi -->
		<div class="left-section">
			<img src={organisasi.imageSrc} alt={organisasi.title} class="rounded-lg mb-4" />

			<!-- Gambar tambahan -->
			<div class="additional-images flex gap-2">
				{#each organisasi.additionalImages as image}
					<img
						src={image}
						alt="Additional Image"
						class="w-24 h-24 object-cover rounded cursor-pointer"
						on:click={() => openModal(image)}
					/>
				{/each}
			</div>
		</div>

		<!-- Bagian kanan: Detail informasi organisasi -->
		<div class="right-section">
			<h1 class="text-3xl font-bold text-[#0b2e4b] mb-4">{organisasi.title}</h1>
			<div class="info space-y-2">
				<p><strong>Lokasi Organisasi:</strong> {organisasi.lokasi}</p>
				<p><strong>Penanggung Jawab:</strong> {organisasi.penanggungJawab}</p>
				<p><strong>Pembina:</strong> {organisasi.pembina}</p>
				<p><strong>Pelindung:</strong> {organisasi.pelindung}</p>
				<p><strong>Email:</strong> {organisasi.email}</p>
				<p><strong>Nomor Telepon:</strong> {organisasi.nomorTelepon}</p>
				<p><strong>Jumlah Anggota:</strong> {organisasi.jumlahAnggota}</p>
			</div>

			<div class="description mt-4">
				<h2 class="text-xl font-semibold text-[#0b2e4b]">Deskripsi</h2>
				<p>{organisasi.description}</p>
			</div>
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
