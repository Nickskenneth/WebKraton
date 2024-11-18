<script lang="ts">
	import ProfileInfo from '$lib/components/ProfileInfo.svelte';
	import RiwayatAcara from '$lib/components/RiwayatAcara.svelte';
	import RiwayatOrganisasi from '$lib/components/RiwayatOrganisasi.svelte';
	import RiwayatKomunitas from '$lib/components/RiwayatKomunitas.svelte';
	import ButtonAction from '$lib/components/ButtonAction.svelte';
	import NavBarL from '$lib/components/NavBarL.svelte';
	import { goto } from '$app/navigation';

	// State untuk modal barcode dan logout
	let showModalBarcode = false;
	let showModalLogout = false;

	// Dummy data untuk komponen ProfileInfo
	let namaLengkap = 'Sri Apriliani Ririn';
	let asmaDalem = 'Ranu Wijayanti';
	let wongso = 'Jawa';
	let tempatLahir = 'Solo';
	let tanggalLahir = '12-12-2000';
	let jenisKelamin = 'Perempuan';
	let alamat = 'Jl. Surakarta';
	let email = 'sirapriliani@gmail.com';
	let noTelepon = '081357474986';
	let namaAyah = 'Ayah';
	let namaIbu = 'Ibu';
	let gelar = 'Nyi Lurah (NyL)';

	// Data Riwayat Acara, Organisasi, dan Komunitas
	let acara = [
		{
			title: 'Grebeg Maulud',
			location: 'Keraton Surakarta Hadiningrat',
			date: '19 Juli 2023 (1 Suro 2023)',
			organizer: 'Keraton Kasunanan Surakarta Hadiningrat'
		}
	];

	let organisasi = [
		{
			namaOrganisasi: 'Bregada - Prajurit Keraton Surakarta Hadiningrat',
			tanggalBergabung: 'DD-MM-YYYY',
			peran: 'Anggota',
			jumlahAnggota: 50
		}
	];

	let komunitas = [
		{
			namaOrganisasi: 'Sinau Batik',
			tanggalBergabung: 'DD-MM-YYYY',
			peran: 'Anggota',
			jumlahAnggota: 50
		}
	];

	// Fungsi untuk menampilkan modal barcode
	function toggleBarcodeModal() {
		showModalBarcode = !showModalBarcode;
	}

	// Fungsi untuk menampilkan modal logout
	function toggleLogoutModal() {
		showModalLogout = !showModalLogout;
	}

	// Fungsi untuk handle Logout
	function handleLogout() {
		showModalLogout = false;
		goto('/'); // Redirect ke halaman landing
	}

	// Fungsi untuk navigasi ke halaman ubah profil
	function gotoUbahProfile() {
		goto('/ubahProfile'); // Redirect ke halaman ubah profil
	}
</script>

<NavBarL />

<section class="profile-page">
	<h2 class="section-title">Profil</h2>

	<!-- Bagian atas profil (Profile Info) -->
	<section class="profile-container p-8">
		<div class="grid-layout">
			<!-- Foto Profil -->
			<div class="profile-picture">
				<img src="/iconProfile.svg" alt="Foto Profil" class="rounded-full" />
			</div>

			<!-- Info Profil -->
			<div class="profile-info p-6 rounded-lg">
				<ProfileInfo
					{namaLengkap}
					{asmaDalem}
					{wongso}
					{tempatLahir}
					{tanggalLahir}
					{alamat}
					{jenisKelamin}
					{email}
					{noTelepon}
					{namaAyah}
					{namaIbu}
					{gelar}
				/>
			</div>

			<!-- Tombol Aksi -->
			<div class="action-buttons-container">
				<div class="action-buttons p-6 rounded-lg flex justify-between">
					<ButtonAction label="Barcode" color="#ffc107" onClick={toggleBarcodeModal} />
					<ButtonAction label="Ubah" color="blue" onClick={gotoUbahProfile} />
					<ButtonAction label="Logout" color="red" onClick={toggleLogoutModal} />
				</div>
			</div>

			<!-- Riwayat -->
			<div class="history-container">
				<div class="p-6 rounded-lg">
					<RiwayatAcara {acara} />
				</div>

				<div class="p-6 rounded-lg">
					<RiwayatOrganisasi {organisasi} />
				</div>

				<div class="p-6 rounded-lg">
					<RiwayatKomunitas {komunitas} />
				</div>
			</div>
		</div>
	</section>

	<!-- Modal Barcode -->
	{#if showModalBarcode}
		<div class="modal">
			<div class="modal-content">
				<img src="/Bregada.jpg" alt="Barcode Image" />
				<button class="close-btn" on:click={toggleBarcodeModal}>Tutup</button>
			</div>
		</div>
	{/if}

	<!-- Modal Logout -->
	{#if showModalLogout}
		<div class="modal">
			<div class="modal-content">
				<p>Apakah Anda ingin logout?</p>
				<div class="logout-actions">
					<button on:click={toggleLogoutModal}>Tidak</button>
					<button on:click={handleLogout}>Logout</button>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- CSS -->
<style>
	.profile-container {
		background-color: #f5f5f5;
		padding: 0 24px;
	}

	.grid-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 20px;
	}

	.profile-picture {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.profile-picture img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 50%;
		background-color: #f5f5f5;
	}

	.profile-info {
		grid-column: 1;
		grid-row: 2;
	}

	.action-buttons-container {
		grid-column: 2;
		grid-row: 1;
		display: flex;
		justify-content: flex-end;
		height: fit-content;
		margin-top: 80px;
	}

	.action-buttons {
		display: flex;
		gap: 12px;
	}

	.history-container {
		grid-column: 2;
		grid-row: 2;
	}

	.section-title {
		font-size: 36px;
		color: #004da3;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		padding-top: 24px;
		padding-bottom: 16px;
		text-align: center;
		background-color: #f5f5f5;
	}

	/* Styles untuk modal */
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 8px;
		text-align: center;
		max-width: 400px;
	}

	.close-btn {
		background-color: red;
		color: white;
		border: none;
		padding: 10px;
		border-radius: 5px;
		margin-top: 10px;
		cursor: pointer;
	}

	.logout-actions {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
	}

	.logout-actions button {
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	}

	.logout-actions button:first-child {
		background-color: gray;
		color: white;
	}

	.logout-actions button:last-child {
		background-color: red;
		color: white;
	}
</style>
