<script>
	import ButtonLihatSemua from '$lib/components/ButtonLihatSemua.svelte';
	import CardAbout from '$lib/components/CardAbout.svelte';
	import CardBesar from '$lib/components/CardBesar.svelte';
	import CardKecil from '$lib/components/CardKecil.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBarL from '$lib/components/NavBarL.svelte';
</script>

<NavBarL />

<!-- SECTION HERO -->
<HeroSection />

<!-- SECTION ABOUT KERATON -->
<section class="about-keraton-section">
	<h2 class="section-title">Tentang Kraton Solo</h2>
	<div class="about-cards">
		<CardAbout
			content="Keraton Surakarta Hadiningrat adalah istana resmi Kesultanan Surakarta, yang didirikan oleh Paku Buwono II pada tahun 1745..."
			imageSrc="/KeratonSurakartaAbt.jpg"
			bgColor="#AC9794"
		/>
		<CardAbout
			content="Keraton Surakarta menaungi berbagai organisasi dan komunitas yang berkomitmen untuk melestarikan budaya lokal..."
			imageSrc="/KeratonSurakartaAbt2.jpg"
			bgColor="#7BA8D3"
		/>
		<CardAbout
			content="Keraton Surakarta memiliki jumlah abdi yang sangat banyak, mencakup berbagai peran dan tingkatan dalam struktur keraton..."
			imageSrc="/KeratonSurakartaAbt3.jpg"
			bgColor="#AE9980"
		/>
	</div>
</section>

<!-- SECTION SITUS BERSEJARAH -->
<section class="section-padding bg-gray-100">
	<div class="flex justify-between items-center mb-8">
		<h2 class="section-title">Situs Bersejarah</h2>
		<ButtonLihatSemua href="/situsBersejarah" label="Lihat Semua" />
	</div>
	<div class="grid-layout">
		<CardBesar title="Keraton Surakarta Hadiningrat" content="..." imageSrc="/KeratonSurakarta.jpg" />
		<CardBesar title="Pesanggerahan Langenharjo" content="..." imageSrc="/Langenharjo.jpg" />
		<CardBesar title="Bunker Kuno Surakarta" content="..." imageSrc="/BunkerKunoSurakarta.jpg" />
		<CardBesar title="Umbul Tirto Mulyo" content="..." imageSrc="/UmbulTirtoMulyo.jpg" />
	</div>
</section>

<!-- SECTION ACARA -->
<section class="section-padding bg-gray-100">
	<div class="flex justify-between items-center mb-8">
		<h2 class="section-title">Acara</h2>
		<ButtonLihatSemua href="/acara/acaraAkanDatang" label="Lihat Semua" />
	</div>
	<div class="grid-layout">
		<CardBesar title="Kirab Malam 1 Suro" content="..." imageSrc="/Kirab1Suro.jpg" href="/loginKraton" />
		<CardBesar title="Garebeg Pasa" content="..." imageSrc="/GarebegPasa.jpg" />
		<CardBesar title="Tinggalan Dalem Jumenengan" content="..." imageSrc="/TinggalanDalemJumenengan.jpg" />
		<CardBesar title="Sesaji Mahesa Lawung" content="..." imageSrc="/SesajiMahesaLawung.jpg" />
	</div>
</section>

<!-- SECTION ORGANISASI -->
<section class="section-padding bg-gray-100">
	<div class="flex justify-between items-center mb-8">
		<h2 class="section-title">Organisasi</h2>
		<ButtonLihatSemua href="/kelompok/organisasi" label="Lihat Semua" />
	</div>
	<div class="grid-layout">
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="/Bregada.png" />
		<CardKecil title="Putri Narpo Wandowo" imageSrc="/PutriNarpoWandowo.jpg" />
		<CardKecil title="Lembaga Dewan Adat Keraton Surakarta" imageSrc="/LembagaDewanAdatKeratonSurakarta.jpg" />
		<CardKecil title="Bregada - Prajurit Karaton Surakarta" imageSrc="/Bregada.png" />
	</div>
</section>

<!-- SECTION KOMUNITAS -->
<section class="section-padding bg-gray-100">
	<div class="flex justify-between items-center mb-8">
		<h2 class="section-title">Komunitas</h2>
		<ButtonLihatSemua href="/kelompok/komunitas" label="Lihat Semua" />
	</div>
	<div class="grid-layout">
		<CardKecil title="Pakasa" imageSrc="/Pakasa.jpg" />
		<CardKecil title="Sinau Batik" imageSrc="/SinauBatik.jpg" />
		<CardKecil title="Solo Societeit" imageSrc="/SoloSocieteit.JPG" />
		<CardKecil title="Pakasa" imageSrc="/Pakasa.jpg" />
	</div>
</section>

<style>
	.section-title {
		font-size: 24px;
		color: #004da3;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		margin-bottom: 24px;
		margin-top: 0px;
		text-align: center;
	}

	.section-padding {
		padding: 20px 20px;
	}

	.about-keraton-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
	}

	.about-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		justify-content: center;
		width: 100%;
		max-width: 1200px;
	}

	.grid-layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	/* Responsif untuk layar kecil */
	@media (max-width: 768px) {
		.section-title {
			font-size: 20px;
		}

		.section-padding {
			padding: 10px;
		}

		.grid-layout,
		.about-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
