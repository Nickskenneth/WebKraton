<script>
	//@ts-nocheck
	import { signup } from '$lib/api';

	let step = 1; // Untuk melacak tahap
	let formData = {
		username: '',
		password: '',
		asma_timur: '',
		asma_dalem: '',
		wongso: '',
		ttl: '',
		jenis_kelamin: '',
		domisili: '',
		email: '',
		no_telp: '',
		nama_ayah: '',
		nama_ibu: ''
	};

	let isLoading = false;
	let successMessage = '';
	let errorMessage = '';

	// Fungsi untuk pindah ke tahap 2
	function nextStep() {
		if (step === 1 && formData.username && formData.password) {
			step = 2; // Pindah ke tahap kedua jika tahap pertama valid
		} else {
			errorMessage = 'Username dan Password harus diisi.';
		}
	}

	// Fungsi untuk autofill form
	function autofillData() {
		formData = {
			username: 'autouser',
			password: 'password123',
			asma_timur: 'Auto Timur',
			asma_dalem: 'Auto Dalem',
			wongso: 'Indonesia',
			ttl: '2000-01-01',
			jenis_kelamin: 'Laki-laki',
			domisili: 'Jakarta',
			email: 'autouser@example.com',
			no_telp: '08123456789',
			nama_ayah: 'Auto Ayah',
			nama_ibu: 'Auto Ibu'
		};
		successMessage = 'Form telah diisi otomatis.';
	}

	// Fungsi untuk menangani pendaftaran
	async function handleSignup() {
		isLoading = true;
		successMessage = '';
		errorMessage = '';

		try {
			const response = await signup(formData);
			if (response.Status === 200) {
				successMessage = 'Pendaftaran berhasil! Silakan login.';
				formData = {
					username: '',
					password: '',
					asma_timur: '',
					asma_dalem: '',
					wongso: '',
					ttl: '',
					jenis_kelamin: '',
					domisili: '',
					email: '',
					no_telp: '',
					nama_ayah: '',
					nama_ibu: ''
				};
				step = 1; // Reset ke tahap pertama setelah sukses
			} else {
				errorMessage = response.Message || 'Terjadi kesalahan saat mendaftar.';
			}
		} catch (error) {
			errorMessage = 'Terjadi kesalahan: ' + error.message;
			console.error(error);
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="signup-container">
	<div class="form-box">
		<img src="/logoKraton.png" alt="Logo Keraton" class="logo" />
		<h2 class="form-title">Signup</h2>

		<!-- Success & Error Messages -->
		{#if successMessage}
			<p class="success-message">{successMessage}</p>
		{/if}
		{#if errorMessage}
			<p class="error-message">{errorMessage}</p>
		{/if}

		<!-- Tahap 1 -->
		{#if step === 1}
			<form on:submit|preventDefault={nextStep} class="form">
				<input
					type="text"
					placeholder="Username"
					bind:value={formData.username}
					required
					class="input"
				/>
				<input
					type="password"
					placeholder="Password"
					bind:value={formData.password}
					required
					class="input"
				/>
				<button type="submit" class="btn">Lanjut</button>
				<button type="button" class="btn autofill-btn" on:click={autofillData}>
					Autofill
				</button>
			</form>
		{/if}

		<!-- Tahap 2 -->
		{#if step === 2}
			<form on:submit|preventDefault={handleSignup} class="form">
				<input type="text" placeholder="Asma Timur" bind:value={formData.asma_timur} class="input" />
				<input type="text" placeholder="Asma Dalem" bind:value={formData.asma_dalem} class="input" />
				<input type="text" placeholder="Wongso" bind:value={formData.wongso} class="input" />
				<input type="date" placeholder="Tanggal Lahir" bind:value={formData.ttl} class="input" />
				<select bind:value={formData.jenis_kelamin} required class="input">
					<option value="" disabled selected>Pilih Jenis Kelamin</option>
					<option value="Laki-laki">Laki-laki</option>
					<option value="Perempuan">Perempuan</option>
				</select>
				<input type="text" placeholder="Domisili" bind:value={formData.domisili} class="input" />
				<input type="email" placeholder="Email" bind:value={formData.email} required class="input" />
				<input type="tel" placeholder="No Telepon" bind:value={formData.no_telp} class="input" />
				<input type="text" placeholder="Nama Ayah" bind:value={formData.nama_ayah} class="input" />
				<input type="text" placeholder="Nama Ibu" bind:value={formData.nama_ibu} class="input" />
				<button type="submit" class="btn" disabled={isLoading}>
					{isLoading ? 'Loading...' : 'Daftar'}
				</button>
			</form>
		{/if}
	</div>
</div>

<style>
	.signup-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-image: url('/KeratonSoloBG.jpg');
		background-size: cover;
		background-position: center;
	}

	.form-box {
		background: rgba(255, 255, 255, 0.9);
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
		width: 100%;
		max-width: 400px;
		text-align: center;
	}

	.logo {
		width: 100px;
		margin: 0 auto 20px;
	}

	.form-title {
		font-size: 24px;
		color: #333;
		margin-bottom: 20px;
	}

	.input {
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px 15px;
		margin-bottom: 15px;
		font-size: 16px;
	}

	.btn {
		width: 100%;
		padding: 10px 0;
		background-color: #004da3;
		color: white;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		text-align: center;
		margin-bottom: 10px;
	}

	.autofill-btn {
		background-color: #00a36c;
	}

	.success-message {
		color: green;
		margin-bottom: 10px;
	}

	.error-message {
		color: red;
		margin-bottom: 10px;
	}
</style>
