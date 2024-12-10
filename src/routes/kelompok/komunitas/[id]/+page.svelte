<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Untuk menangkap parameter ID dari URL
	import { getKomunitasDetails } from '$lib/api'; // Mengimpor fungsi dari api.js

	let komunitas = {
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
	let idKomunitas = $page.params.id; // Tangkap parameter ID dari URL

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

	// Mengambil data komunitas dari API menggunakan api.js
	async function fetchDetailKomunitas() {
		try {
			const data = await getKomunitasDetails(idKomunitas); // Panggil API dengan ID
			if (data.Status === 200 && data.Data && data.Data.length > 0) {
				const kom = data.Data[0];
				komunitas = {
					title: kom.NamaKomunitas || 'Tidak ada nama komunitas',
					lokasi: kom.Alamat || 'Tidak ada lokasi',
					penanggungJawab: kom.PenanggungJawab || 'Tidak ada penanggung jawab',
					pembina: kom.Pembina || 'Tidak ada pembina',
					pelindung: kom.Pelindung || 'Tidak ada pelindung',
					email: kom.Email || 'Tidak ada email',
					nomorTelepon: kom.NoTelp || 'Tidak ada nomor telepon',
					jumlahAnggota: kom.JumlahAnggota || 0,
					description: kom.Deskripsi || 'Tidak ada deskripsi',
					imageSrc: kom.FotoKomunitas || '/default-image.png', // Ganti dengan gambar default jika tidak ada
					additionalImages: kom.AdditionalImages || ['/default-image.png'] // Pastikan array ini tersedia
				};
			} else {
				console.error('Data komunitas tidak ditemukan.');
			}
		} catch (error) {
			console.error('Error saat mengambil data komunitas:', error);
		}
	}

	// Mengambil data saat komponen pertama kali dimuat
	onMount(fetchDetailKomunitas);
</script>

<div class="container mx-auto p-6">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Bagian kiri: Gambar komunitas -->
		<div class="left-section">
			<img src={komunitas.imageSrc} alt={komunitas.title} class="rounded-lg mb-4" />
			<!-- Gambar tambahan -->
			<div class="additional-images flex gap-2">
				{#each komunitas.additionalImages as image}
					<img
						src={image}
						alt="Additional Image"
						class="w-24 h-24 object-cover rounded cursor-pointer"
						on:click={() => openModal(image)}
					/>
				{/each}
			</div>
		</div>
		<!-- Bagian kanan: Detail informasi komunitas -->
		<div class="right-section">
			<h1 class="text-3xl font-bold text-[#0b2e4b] mb-4">{komunitas.title}</h1>
			<div class="info space-y-2">
				<p><strong>Lokasi Komunitas:</strong> {komunitas.lokasi}</p>
				<p><strong>Penanggung Jawab:</strong> {komunitas.penanggungJawab}</p>
				<p><strong>Pembina:</strong> {komunitas.pembina}</p>
				<p><strong>Pelindung:</strong> {komunitas.pelindung}</p>
				<p><strong>Email:</strong> {komunitas.email}</p>
				<p><strong>Nomor Telepon:</strong> {komunitas.nomorTelepon}</p>
				<p><strong>Jumlah Anggota:</strong> {komunitas.jumlahAnggota}</p>
			</div>
			<div class="description mt-4">
				<h2 class="text-xl font-semibold text-[#0b2e4b]">Deskripsi</h2>
				<p>{komunitas.description}</p>
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
