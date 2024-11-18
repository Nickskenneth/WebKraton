<script lang="ts">
	import { page } from '$app/stores'; // Mendapatkan URL saat ini
	import { get } from 'svelte/store';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	// Fungsi untuk memeriksa apakah path saat ini sesuai dengan path target
	function isActive(path: string) {
		const currentPath = get(page).url.pathname; // Mendapatkan path saat ini
		return currentPath.startsWith(path); // Cek apakah path aktif
	}
</script>

<nav class="bg-blue-900 text-white p-4 relative">
	<div class="flex justify-between items-center">
		<!-- Logo -->
		<img src="/logoKraton.png" alt="logoKraton" class="h-16 w-auto" />

		<!-- Hamburger Menu Button (Visible on Mobile) -->
		<div class="md:hidden" on:click={toggleNavbar}>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<!-- Navigation Links (Hidden on Mobile) -->
		<div class="hidden md:flex space-x-6">
			<a href="/beranda" class:is-active={isActive('/beranda')} class="text-xl hover:text-yellow-400">Beranda</a>
			<a href="/situsBersejarah" class:is-active={isActive('/situsBersejarah')} class="text-xl hover:text-yellow-400">Situs</a>
			<a href="/acara/acaraAkanDatang" class:is-active={isActive('/acara')} class="text-xl hover:text-yellow-400">Acara</a>
			<a href="/kelompok/organisasi" class:is-active={isActive('/kelompok')} class="text-xl hover:text-yellow-400">Kelompok</a>
			<a href="/abdi" class:is-active={isActive('/abdi')} class="text-xl hover:text-yellow-400">Abdi</a>
		</div>

		<!-- Profile Icon -->
		<div class="hidden md:block">
			<a href="/profile">
				<img src="/iconProfile.svg" alt="Profile" class="h-14 w-14 rounded-full" />
			</a>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if showMenu}
	<div class="absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col space-y-4 p-4 md:hidden z-50 shadow-lg">
		<a href="/beranda" class:is-active={isActive('/beranda')} class="hover:text-yellow-400">Beranda</a>
		<a href="/situsBersejarah" class:is-active={isActive('/situsBersejarah')} class="hover:text-yellow-400">Situs</a>
		<a href="/acara/acaraAkanDatang" class:is-active={isActive('/acara')} class="hover:text-yellow-400">Acara</a>
		<a href="/kelompok/organisasi" class:is-active={isActive('/kelompok')} class="hover:text-yellow-400">Kelompok</a>
		<a href="/abdi" class:is-active={isActive('/abdi')} class="hover:text-yellow-400">Abdi</a>
		<a href="/profile" class="hover:text-yellow-400">Profile</a>
	</div>
	{/if}
</nav>

<style>
	/* Gaya untuk link aktif */
	a.is-active {
		color: rgb(250, 204, 21); /* Warna kuning untuk halaman aktif */
		font-weight: bold;
		text-decoration: underline; /* Garis bawah untuk membedakan */
	}
</style>
