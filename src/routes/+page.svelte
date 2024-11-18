<script>
	import ButtonLihatSemua from '$lib/components/ButtonLihatSemua.svelte';
	import CardAbout from '$lib/components/CardAbout.svelte';
	import CardBesar from '$lib/components/CardBesar.svelte';
	import CardKecil from '$lib/components/CardKecil.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBarNl from '$lib/components/NavBarNL.svelte';
</script>

<NavBarNl />

<!-- SECTION HERO -->
<HeroSection />

<!-- SECTION ABOUT KERATON -->
<section class="py-10 px-5 bg-gray-100">
	<h2 class="text-2xl font-bold text-blue-600 text-center mb-6">Tentang Kraton Solo</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
		<CardBesar title="Keraton Surakarta Hadiningrat" content="..." imageSrc="\KeratonSurakarta.jpg" />
		<CardBesar title="Pesanggerahan Langenharjo" content="..." imageSrc="\Langenharjo.jpg" />
		<CardBesar title="Bunker Kuno Surakarta" content="..." imageSrc="\BunkerKunoSurakarta.jpg" />
		<CardBesar title="Umbul Tirto Mulyo" content="..." imageSrc="\UmbulTirtoMulyo.jpg" />
	</div>
</section>

<!-- SECTION ACARA -->
<section class="py-10 px-5 bg-gray-100">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Acara</h2>
		<ButtonLihatSemua href="/acara/acaraAkanDatang" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardBesar title="Kirab Malam 1 Suro" content="..." imageSrc="\Kirab1Suro.jpg" />
		<CardBesar title="Garebeg Pasa" content="..." imageSrc="\GarebegPasa.jpg" />
		<CardBesar title="Tinggalan Dalem Jumenengan" content="..." imageSrc="\TinggalanDalemJumenengan.jpg" />
		<CardBesar title="Sesaji Mahesa Lawung" content="..." imageSrc="\SesajiMahesaLawung.jpg" />
	</div>
</section>

<!-- SECTION ORGANISASI -->
<section class="py-10 px-5 bg-white">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Organisasi</h2>
		<ButtonLihatSemua href="/kelompok/organisasi" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="\Bregada.png" />
		<CardKecil title="Putri Narpo Wandowo" imageSrc="\PutriNarpoWandowo.jpg" />
		<CardKecil title="Lembaga Dewan Adat Keraton Surakarta" imageSrc="\LembagaDewanAdatKeratonSurakarta.jpg" />
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="\Bregada.png" />
	</div>
</section>

<!-- SECTION KOMUNITAS -->
<section class="py-10 px-5 bg-gray-100">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-2xl font-bold text-blue-600">Komunitas</h2>
		<ButtonLihatSemua href="/kelompok/komunitas" label="Lihat Semua" />
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		<CardKecil title="Pakasa" imageSrc="\Pakasa.jpg" />
		<CardKecil title="Sinau Batik" imageSrc="\SinauBatik.jpg" />
		<CardKecil title="Solo Societeit" imageSrc="\SoloSocieteit.JPG" />
		<CardKecil title="Pakasa" imageSrc="\Pakasa.jpg" />
	</div>
</section>


<style>
	/* Title Section */
	.section-title {
		font-size: 24px;
		color: #004da3;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		text-align: center;
		margin-bottom: 16px;
	}

	/* General Padding for Sections */
	.section-padding {
		padding: 40px 20px;
		background-color: #f5f5f5; /* Menambahkan warna background untuk section */
	}

	/* Grid Layout for About Section */
	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		justify-content: center;
		align-items: start;
	}

	/* General Card Grid */
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		justify-content: center;
		align-items: stretch; /* Agar card memiliki tinggi konsisten */
	}

	/* Full Width Background for Sections */
	.bg-gray-100 {
		background-color: #f5f5f5; /* Warna background konsisten */
		width: 100%;
	}

	/* Card Style Fixes */
	.card-grid .card {
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.section-title {
			font-size: 22px;
		}

		.card-grid,
		.about-grid {
			grid-template-columns: repeat(2, 1fr); /* 2 kolom untuk tablet */
		}

		.section-padding {
			padding: 30px 15px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 20px;
		}

		.card-grid,
		.about-grid {
			grid-template-columns: 1fr; /* 1 kolom untuk layar kecil */
		}

		.section-padding {
			padding: 20px 10px;
		}
	}

	@media (max-width: 430px) {
		.section-title {
			font-size: 18px;
		}

		.section-padding {
			padding: 15px 8px;
		}

		.card-grid,
		.about-grid {
			grid-template-columns: 1fr;
			gap: 15px;
		}
	}
</style>
