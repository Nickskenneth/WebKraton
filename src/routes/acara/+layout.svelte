<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import TabNav from '$lib/components/TabNav.svelte';

	const buttons = [
		{ text: 'Akan Datang', href: '/acara/acaraAkanDatang' },
		{ text: 'Selesai', href: '/acara/acaraSelesai' },
	];
</script>

<main class="bg-white">
	<NavBarL />
	<h1 class="text-3xl font-bold text-center text-blue-600 bg-gray-100 py-6">Acara</h1>
	<div class="bg-gray-100">
		<TabNav {buttons} />
	</div>
	<slot />
</main>
