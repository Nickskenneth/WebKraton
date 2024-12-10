<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Untuk menangkap parameter ID dari URL
	import { getSitusDetails } from '$lib/api'; // Fungsi API untuk mengambil detail situs
	import NavBarL from '$lib/components/NavBarL.svelte';

	let detail = {
		title: '',
		deskripsi: '',
		alamat: '',
		koordinat: '',
		peraturanSitus: '',
		jamOperasional: '',
		tahunDidirikan: '',
		namaPendiri: '',
		penanggungJawab: '',
		imageSrc: '/default-image.jpg', // Gambar default
	};
	let showModal = false;
	let selectedImage = '';
	let idSitus = $page.params.id; // Tangkap parameter ID dari URL

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

	// Ambil detail situs dari API
	onMount(async () => {
		try {
			const response = await getSitusDetails(idSitus); // Panggil API berdasarkan ID
			if (response.Status === 200 && response.Data) {
				const situsData = response.Data[0];
				detail = {
					title: situsData.Nama || 'Tidak ada nama situs',
					deskripsi: situsData.Deskripsi || 'Tidak ada deskripsi',
					alamat: situsData.Alamat || 'Tidak ada alamat',
					koordinat: situsData.Koordinat || 'Tidak diketahui',
					peraturanSitus: situsData.PeraturanSitus || 'Tidak ada',
					jamOperasional: situsData.JamOperasional || 'Tidak diketahui',
					tahunDidirikan: new Date(situsData.TahunDidirikan).toLocaleDateString() || 'Tidak diketahui',
					namaPendiri: situsData.NamaPendiri || 'Tidak diketahui',
					penanggungJawab: situsData.PenanggungJawab || 'Tidak ada',
					imageSrc: situsData.FotoSitus || '/default-image.jpg', // Gambar default jika tidak ada
				};
			} else {
				console.error('Data situs tidak ditemukan.');
			}
		} catch (error) {
			console.error('Error saat mengambil detail situs:', error);
		}
	});
</script>

<NavBarL />

<div class="container">
	<!-- Gambar utama -->
	<img src={detail.imageSrc} alt={detail.title} class="main-image" />

	<!-- Informasi utama -->
	<div class="info-grid">
		<p><strong>Nama Situs:</strong> {detail.title}</p>
		<p><strong>Koordinat:</strong> {detail.koordinat}</p>
		<p><strong>Peraturan Situs:</strong> {detail.peraturanSitus}</p>
		<p><strong>Jam Operasional:</strong> {detail.jamOperasional}</p>
		<p><strong>Tahun Didirikan:</strong> {detail.tahunDidirikan}</p>
		<p><strong>Nama Pendiri:</strong> {detail.namaPendiri}</p>
		<p><strong>Penanggung Jawab:</strong> {detail.penanggungJawab}</p>
        <p><strong>Alamat:</strong> {detail.alamat}</p>
	</div>

	<!-- Deskripsi -->
	<div class="description">
		<h2>Deskripsi</h2>
		<p>{detail.deskripsi}</p>
	</div>

	<!-- Tombol riwayat acara -->
	<a href="#" class="btn-riwayat">Riwayat Acara</a>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 30px;
		font-family: 'Poppins', sans-serif;
		background-color: #f5f5f5;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.main-image {
		width: 100%;
		height: auto;
		border-radius: 10px;
		margin-bottom: 30px;
	}

	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin-bottom: 30px;
		padding: 20px;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
	}

	.info-grid p {
		font-size: 16px;
		color: #333;
		margin: 10px 0;
	}

	.description {
		margin-top: 20px;
		padding: 15px;
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
	}

	.description h2 {
		font-size: 24px;
		color: #004da3;
		margin-bottom: 15px;
	}

	.description p {
		font-size: 16px;
		color: #555;
		line-height: 1.6;
	}

	.btn-riwayat {
		display: inline-block;
		padding: 12px 25px;
		background-color: #004da3;
		color: white;
		font-size: 18px;
		font-weight: bold;
		border-radius: 8px;
		text-align: center;
		text-decoration: none;
		margin-top: 30px;
	}

	.btn-riwayat:hover {
		background-color: #003366;
	}
</style>
