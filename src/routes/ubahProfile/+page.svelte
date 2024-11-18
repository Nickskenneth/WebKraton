<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import { goto } from '$app/navigation';

	// State untuk menyimpan input dari user
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
	let ayahAbdi = 'Yes';
	let ibuAbdi = 'Yes';

	// Fungsi untuk simpan data (misal simpan ke backend atau state)
	function simpanData() {
		// Simpan data yang diinput user
		alert('Data berhasil disimpan!');
	}

	// Fungsi untuk kembali ke halaman profil
	function kembaliKeProfil() {
		goto('/profile'); // Arahkan ke halaman profil
	}
</script>

<NavBarL />

<section class="ubah-profil-container">
	<!-- Icon profil di tengah -->
	<div class="profil-header">
		<div class="profile-icon-container">
			<img src="/iconProfile.svg" alt="Profile Icon" class="profile-icon" />
		</div>
		<button class="ubah-foto-btn">Ubah Foto Profil</button>
	</div>

	<!-- Input fields untuk user mengubah profil -->
	<div class="input-fields-container">
		<div class="form-group">
			<label for="namaLengkap">Nama Lengkap</label>
			<input type="text" id="namaLengkap" bind:value={namaLengkap} />
		</div>
		<div class="form-group">
			<label for="asmaDalem">Asma Dalem</label>
			<input type="text" id="asmaDalem" bind:value={asmaDalem} disabled />
		</div>
		<div class="form-group">
			<label for="wongso">Wongso</label>
			<input type="text" id="wongso" bind:value={wongso} />
		</div>
		<div class="form-group">
			<label for="tempatLahir">Tempat Lahir</label>
			<input type="text" id="tempatLahir" bind:value={tempatLahir} />
		</div>
		<div class="form-group">
			<label for="tanggalLahir">Tanggal Lahir</label>
			<input type="date" id="tanggalLahir" bind:value={tanggalLahir} />
		</div>
		<div class="form-group">
			<label for="jenisKelamin">Jenis Kelamin</label>
			<select id="jenisKelamin" bind:value={jenisKelamin}>
				<option value="Perempuan">Perempuan</option>
				<option value="Laki-laki">Laki-laki</option>
			</select>
		</div>
		<div class="form-group">
			<label for="alamat">Alamat</label>
			<input type="text" id="alamat" bind:value={alamat} />
		</div>
		<div class="form-group">
			<label for="noTelepon">No Telepon</label>
			<input type="tel" id="noTelepon" bind:value={noTelepon} />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} />
		</div>
		<div class="form-group">
			<p>
				Ayah Seorang Abdi? <input type="radio" name="ayahAbdi" value="Yes" bind:group={ayahAbdi} />
				Yes <input type="radio" name="ayahAbdi" value="No" bind:group={ayahAbdi} /> No
			</p>
			<label for="namaAyah">Nama Ayah</label>
			<input type="text" id="namaAyah" bind:value={namaAyah} />
		</div>
		<div class="form-group">
			<p>
				Ibu Seorang Abdi? <input type="radio" name="ibuAbdi" value="Yes" bind:group={ibuAbdi} /> Yes
				<input type="radio" name="ibuAbdi" value="No" bind:group={ibuAbdi} /> No
			</p>
			<label for="namaIbu">Nama Ibu</label>
			<input type="text" id="namaIbu" bind:value={namaIbu} />
		</div>
	</div>

	<!-- Tombol simpan dan kembali -->
	<div class="action-buttons">
		<button class="kembali-btn" on:click={kembaliKeProfil}>Kembali</button>
		<button class="simpan-btn" on:click={simpanData}>Simpan Data</button>
	</div>
</section>

<style>
	.ubah-profil-container {
		padding: 24px;
		max-width: 800px;
		margin: 0 auto;
	}

	.profil-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 24px;
	}

	.profile-icon-container {
		margin-bottom: 16px;
	}

	.profile-icon {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.ubah-foto-btn {
		background-color: #4a90e2;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
	}

	.input-fields-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		margin-bottom: 24px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		margin-bottom: 4px;
		font-weight: bold;
	}

	.form-group input,
	.form-group select {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.action-buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 24px;
	}

	.kembali-btn {
		background-color: #e74c3c;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
	}

	.simpan-btn {
		background-color: #27ae60;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
