<script>
	import NavBarL from '$lib/components/NavBarL.svelte';

	// Data komunitas
	let komunitas = {
		title: 'Paguyuban Kawula Keraton Surakarta (Pakasa)',
		lokasi: 'Surakarta',
		penanggungJawab: 'Abraham Cristofer',
		pembina: 'Nicholas Kenneth',
		pelindung: 'Laura Wijaya',
		email: 'pakasa@gmail.com',
		nomorTelepon: '08123456789',
		jumlahAnggota: 100,
		description: `Paguyuban Kawula Keraton Surakarta adalah sebuah organisasi atau komunitas yang terdiri dari para abdi dalem dan pendukung Keraton Kasunanan Surakarta Hadiningrat. 
                      Paguyuban ini bertujuan untuk melestarikan nilai-nilai budaya, tradisi, dan adat istiadat yang berasal dari Keraton Surakarta. Selain itu, mereka juga berperan aktif 
                      dalam berbagai kegiatan kebudayaan, seperti upacara adat, seni pertunjukan tradisional, serta menjaga hubungan antara keraton dan masyarakat luas.`,
		imageSrc: '/Pakasa.jpg',
		additionalImages: ['/Pakasa.jpg', '/Pakasa.jpg', '/Pakasa.jpg']
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
				<p><strong>Lokasi Organisasi:</strong> {komunitas.lokasi}</p>
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
	.additional-images {
		display: flex; /* Atur dengan flex agar rapi */
		gap: 10px; /* Jarak antara gambar */
		justify-content: center;
		margin-top: 20px;
	}

	.additional-images img {
		width: 120px; /* Ukuran gambar tambahan */
		height: 80px;
		object-fit: cover; /* Agar gambar tetap terlihat proporsional */
		border-radius: 8px; /* Tambahkan radius jika diperlukan */
		cursor: pointer;
		transition: transform 0.3s ease;
	}

	.additional-images img:hover {
		transform: scale(1.05); /* Efek hover agar gambar membesar sedikit */
	}

	.modal {
		background: rgba(0, 0, 0, 0.5);
	}
	.info p strong {
		font-weight: bold;
	}
</style>
