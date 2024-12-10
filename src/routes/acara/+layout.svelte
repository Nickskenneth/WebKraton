<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import TabNav from '$lib/components/TabNav.svelte';
	import { page } from '$app/stores'; // Untuk memantau rute saat ini

	// Menyusun button untuk tab navigasi
	const buttons = [
		{ text: 'Akan Datang', href: '/acara/acaraAkanDatang' },
		{ text: 'Selesai', href: '/acara/acaraSelesai' }
	];

	// Periksa apakah rute saat ini adalah halaman detail
	$: isDetailPage = $page.url.pathname.startsWith('/acara/acaraAkanDatang/') || $page.url.pathname.startsWith('/acara/acaraSelesai/');
</script>

<main class="bg-white">
	<!-- Navbar -->
	<NavBarL />

	<!-- Judul Halaman -->
	{#if !isDetailPage}
		<h1 class="text-3xl font-bold text-center text-blue-600 bg-gray-100 py-6">Acara</h1>

		<!-- Tab Navigation -->
		<div class="bg-gray-100">
			<TabNav {buttons} />
		</div>
	{/if}

	<!-- Slot untuk konten dinamis berdasarkan route -->
	<slot />
</main>

<style>
	main {
		min-height: 100vh;
	}
</style>
