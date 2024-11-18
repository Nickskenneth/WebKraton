<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import RiwayatOrganisasiKomunitasLog from '$lib/components/RiwayatOrganisasiKomunitasLog.svelte';
	import RiwayatKomunitas from '$lib/components/RiwayatKomunitas.svelte';

	// Data untuk informasi Abdi
	let abdiInfo = {
		nama: 'Sri Apriliani Ririn',
		namaDalem: 'Ranu Wijayanti',
		jenisKelamin: 'Perempuan',
		noTelepon: '081357474986',
		hobi: 'Menonton film, mendengar musik',
		jabatanOrganisasi: '-',
		jabatanKomunitas: '-',
		gelar: 'Nyi Lurah (Ny.L)'
	};

	// Data organisasi
	let organisasi = [
		{
			namaOrganisasi: 'Bregada - Prajurit Keraton Surakarta',
			tanggalBergabung: 'DD-MM-YYYY',
			peran: 'Anggota',
			jumlahAnggota: 50
		},
		{
			namaOrganisasi: 'Lembaga Dewan Adat Keraton',
			tanggalBergabung: '10-02-2022',
			peran: 'Ketua',
			jumlahAnggota: 100
		}
	];

	// Data komunitas
	let komunitas = [
		{
			namaOrganisasi: 'Sinau Batik',
			tanggalBergabung: '19 Juli 2023 (1 Suro 2023)',
			peran: 'Anggota',
			jumlahAnggota: 50
		}
	];

	// State untuk pencarian organisasi dan komunitas
	let searchTermOrganisasi = '';
	let searchTermKomunitas = '';

	// Fungsi untuk filter organisasi berdasarkan search term
	$: filteredOrganisasi = organisasi.filter((org) =>
		org.namaOrganisasi.toLowerCase().includes(searchTermOrganisasi.toLowerCase())
	);

	// Fungsi untuk filter komunitas berdasarkan search term
	$: filteredKomunitas = komunitas.filter((kom) =>
		kom.namaOrganisasi.toLowerCase().includes(searchTermKomunitas.toLowerCase())
	);
</script>

<NavBarL />

<section class="abdi-page p-8">
	<h2 class="section-title">Cari Abdi</h2>

	<div class="search-bar">
		<label for="id-abdi" class="search-label">ID Abdi</label>
		<input type="text" id="id-abdi" placeholder="ID Abdi" class="search-input" />
		<button class="search-button">Cari</button>
	</div>

	<div class="container">
		<!-- Bagian kiri: Informasi Abdi -->
		<div class="left-section">
			<div class="info-card">
				<img src="/iconProfile.svg" alt="Foto Abdi" class="profile-img" />
				<div class="info-content">
					<p><strong>Nama</strong><br />{abdiInfo.nama}</p>
					<p><strong>Nama Dalem</strong><br />{abdiInfo.namaDalem}</p>
					<p><strong>Jenis Kelamin</strong><br />{abdiInfo.jenisKelamin}</p>
					<p><strong>No Telepon</strong><br />{abdiInfo.noTelepon}</p>
					<p><strong>Hobi</strong><br />{abdiInfo.hobi}</p>
					<p><strong>Jabatan Organisasi</strong><br />{abdiInfo.jabatanOrganisasi}</p>
					<p><strong>Jabatan Komunitas</strong><br />{abdiInfo.jabatanKomunitas}</p>
					<p><strong>Gelar</strong><br />{abdiInfo.gelar}</p>
				</div>
			</div>
		</div>

		<!-- Bagian kanan: Organisasi dan Komunitas -->
		<div class="right-section">
			<!-- Organisasi -->
			<div class="center-section">
				<div class="riwayat-header">
					<h3 class="section-title2">Organisasi</h3>
					<input
						type="text"
						placeholder="Cari Organisasi"
						class="search-input"
						bind:value={searchTermOrganisasi}
					/>
				</div>

				<div class="riwayat-content">
					{#each filteredOrganisasi as org}
						<RiwayatOrganisasiKomunitasLog
							namaOrganisasi={org.namaOrganisasi}
							tanggalBergabung={org.tanggalBergabung}
							peran={org.peran}
							jumlahAnggota={org.jumlahAnggota.toString()}
						/>
					{/each}
				</div>
			</div>

			<!-- Komunitas -->
			<div class="bottom-section">
				<div class="riwayat-header">
					<h3 class="section-title2">Komunitas</h3>
					<input
						type="text"
						placeholder="Cari Komunitas"
						class="search-input"
						bind:value={searchTermKomunitas}
					/>
				</div>

				<div class="riwayat-content">
					{#each filteredKomunitas as kom}
						<RiwayatOrganisasiKomunitasLog
							namaOrganisasi={kom.namaOrganisasi}
							tanggalBergabung={kom.tanggalBergabung}
							peran={kom.peran}
							jumlahAnggota={kom.jumlahAnggota.toString()}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.abdi-page {
		background-color: #f5f5f5;
		padding: 20px;
	}

	.section-title {
		font-size: 36px;
		color: #004da3;
		font-weight: bold;
		text-align: center;
		padding-top: 24px;
		padding-bottom: 16px;
	}

	.section-title2 {
		font-size: 24px;
		color: #004da3;
		font-weight: bold;
		text-align: center;
	}

	.search-bar {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 24px;
	}

	.search-label {
		font-size: 16px;
		margin-right: 8px;
		margin-top: 8px;
	}

	.search-input {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 8px;
		margin-right: 8px;
		width: 200px;
	}

	.search-button {
		background-color: #004da3;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
	}

	.search-button:hover {
		background-color: #003f8e;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 20px;
	}

	.left-section,
	.center-section,
	.bottom-section {
		background-color: #e6e9ed;
		padding: 16px;
		border-radius: 8px;
	}

	.left-section {
		display: flex;
		flex-direction: column;
	}

	.info-card {
		width: 100%;
		background-color: #fff;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: start;
	}

	.profile-img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin-bottom: 16px;
		margin: 0 auto 16px auto;
	}

	.info-content p {
		margin-bottom: 12px;
		text-align: left;
	}

	.riwayat-header {
		display: flex;
		justify-content: space-between; /* Memposisikan elemen ke sebelah kanan */
		align-items: center;
		margin-bottom: 12px;
	}

	.search-input {
		padding: 6px; /* Ukuran kecil */
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 150px; /* Sesuaikan ukuran */
	}

	.riwayat-content {
		max-height: 250px;
		overflow-y: auto;
	}

	.center-section,
	.bottom-section {
		width: 100%;
	}

	.right-section {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 20px;
	}

	/* Agar ukuran kontainer sama */
	.center-section,
	.bottom-section {
		height: 100%;
	}
</style>
