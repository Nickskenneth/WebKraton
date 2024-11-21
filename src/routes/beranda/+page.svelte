<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import ButtonLihatSemua from '$lib/components/ButtonLihatSemua.svelte';
	import CardAbout from '$lib/components/CardAbout.svelte';
	import CardBesar from '$lib/components/CardBesar.svelte';
	import CardKecil from '$lib/components/CardKecil.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<!-- Navbar -->
<NavBarL />

<!-- SECTION HERO -->
<HeroSection />

<!-- SECTION ABOUT KERATON -->
<section class="py-10 px-5 bg-gray-100">
	<h2 class="text-2xl font-bold text-blue-600 text-center mb-6">Tentang Kraton Solo</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
		<CardAbout
			content="Keraton Surakarta Hadiningrat adalah istana resmi Kesultanan Surakarta, yang didirikan oleh Paku Buwono II pada tahun 1745..."
			imageSrc="\KeratonSurakartaAbt.jpg"
			bgColor="#AC9794"
		/>
		<CardAbout
			content="Keraton Surakarta menaungi berbagai organisasi dan komunitas yang berkomitmen untuk melestarikan budaya lokal..."
			imageSrc="\KeratonSurakartaAbt2.jpg"
			bgColor="#7BA8D3"
		/>
		<CardAbout
			content="Keraton Surakarta memiliki jumlah abdi yang sangat banyak, mencakup berbagai peran dan tingkatan dalam struktur keraton..."
			imageSrc="\KeratonSurakartaAbt3.jpg"
			bgColor="#AE9980"
		/>
	</div>
</section>

<!-- SECTION SITUS BERSEJARAH -->
<section class="py-10 px-5 bg-white">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Situs Bersejarah</h2>
		<ButtonLihatSemua href="/situsBersejarah" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardBesar
			title="Keraton Surakarta Hadiningrat"
			content="..."
			imageSrc="/KeratonSurakarta.jpg"
		/>
		<CardBesar title="Pesanggerahan Langenharjo" content="..." imageSrc="/Langenharjo.jpg" />
		<CardBesar title="Bunker Kuno Surakarta" content="..." imageSrc="/BunkerKunoSurakarta.jpg" />
		<CardBesar title="Umbul Tirto Mulyo" content="..." imageSrc="/UmbulTirtoMulyo.jpg" />
	</div>
</section>

<!-- SECTION ACARA -->
<section class="py-10 px-5 bg-gray-100">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Acara</h2>
		<ButtonLihatSemua href="/acara/acaraAkanDatang" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardBesar title="Kirab Malam 1 Suro" content="..." imageSrc="/Kirab1Suro.jpg" />
		<CardBesar title="Garebeg Pasa" content="..." imageSrc="/GarebegPasa.jpg" />
		<CardBesar
			title="Tinggalan Dalem Jumenengan"
			content="..."
			imageSrc="/TinggalanDalemJumenengan.jpg"
		/>
		<CardBesar title="Sesaji Mahesa Lawung" content="..." imageSrc="/SesajiMahesaLawung.jpg" />
	</div>
</section>

<!-- SECTION ORGANISASI -->
<section class="py-10 px-5 bg-white">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Organisasi</h2>
		<ButtonLihatSemua href="/kelompok/organisasi" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="/Bregada.png" />
		<CardKecil title="Putri Narpo Wandowo" imageSrc="/PutriNarpoWandowo.jpg" />
		<CardKecil
			title="Lembaga Dewan Adat Keraton Surakarta"
			imageSrc="/LembagaDewanAdatKeratonSurakarta.jpg"
		/>
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="/Bregada.png" />
	</div>
</section>

<!-- SECTION KOMUNITAS -->
<section class="py-10 px-5 bg-gray-100">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Komunitas</h2>
		<ButtonLihatSemua href="/kelompok/komunitas" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardKecil title="Pakasa" imageSrc="/Pakasa.jpg" />
		<CardKecil title="Sinau Batik" imageSrc="/SinauBatik.jpg" />
		<CardKecil title="Solo Societeit" imageSrc="/SoloSocieteit.JPG" />
		<CardKecil title="Pakasa" imageSrc="/Pakasa.jpg" />
	</div>
</section>
