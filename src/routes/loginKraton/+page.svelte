<script>
	import { signin } from '$lib/api.js'; // Mengimpor fungsi signin dari api.js
  
	let username = '';
	let password = '';
	let errorMessage = '';
	let successMessage = '';
  
	// Fungsi untuk menangani login
	async function login() {
	  const result = await signin(username, password); // Menggunakan fungsi signin dari api.js
  
	  if (result.success) {
		successMessage = 'Login successful!';
		window.location.href = '/beranda'; // Arahkan ke halaman utama setelah login sukses
	  } else {
		errorMessage = result.message; // Menampilkan pesan error dari API
	  }
	}
  </script>
  
  <div class="container">
	<div class="login-form">
	  <img src="/logoKraton.png" alt="logoKraton" />
	  <h3>Masuk</h3>
  
	  {#if successMessage}
		<p class="success-message">{successMessage}</p>
	  {/if}
	  {#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	  {/if}
  
	  <form on:submit|preventDefault={login} class="flex flex-col justify-between h-full">
		<div class="flex-grow">
		  <input
			type="text"
			placeholder="Username"
			bind:value={username}
			required
			class="input-field"
		  />
		  <input
			type="password"
			placeholder="Kata Sandi"
			bind:value={password}
			required
			class="input-field"
		  />
		</div>
		<div>
		  <button
			type="submit"
			class="submit-btn"
		  >
			Masuk
		  </button>
		  <p>
			Belum punya akun? <a href="/daftarKraton" class="text-blue-600 hover:underline">Daftar</a>
		  </p>
		</div>
	  </form>
	</div>
  </div>
  
  <style>
	.container {
	  height: 100vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-image: url('/KeratonSoloBG.jpg');
	  background-size: cover;
	  background-position: center;
	}
  
	.login-form {
	  background-color: rgba(255, 255, 255, 0.8);
	  padding: 2rem;
	  border-radius: 10px;
	  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	  text-align: center;
	  width: 500px;
	  height: 708px;
	  margin: 0 auto;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	}
  
	.login-form h3 {
	  margin-bottom: 1.5rem;
	  font-family: sans-serif;
	  color: #333;
	  font-size: 36px;
	  font-weight: bolder;
	}
  
	.login-form img {
	  display: block;
	  margin: 0 auto 1.5rem auto;
	}
  
	.login-form .input-field {
	  width: 100%;
	  padding: 0.75rem;
	  margin-bottom: 1rem;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	  font-size: 1rem;
	  border-color: #0b2e4b;
	}
  
	.login-form .submit-btn {
	  width: 100%;
	  padding: 0.75rem;
	  background-color: #007bff;
	  color: white;
	  border: none;
	  border-radius: 5px;
	  font-size: 1rem;
	  cursor: pointer;
	}
  
	.login-form .submit-btn:hover {
	  background-color: #0056b3;
	}
  
	.login-form p {
	  margin-top: 1rem;
	}
  
	.login-form a {
	  color: #007bff;
	  text-decoration: none;
	}
  
	.login-form a:hover {
	  text-decoration: underline;
	}
  
	.success-message {
	  color: green;
	  margin-bottom: 1rem;
	  font-size: 1rem;
	}
  
	.error-message {
	  color: red;
	  margin-bottom: 1rem;
	  font-size: 1rem;
	}
  </style>
  