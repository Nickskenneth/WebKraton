<script>
    import CarouselComponent from './Carousel.svelte';
</script>

<section class="relative bg-cover bg-center h-[500px] md:h-[700px] w-full bg-[url('/KeratonSoloBG.jpg')]">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white h-full w-full px-4">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold">Maha Menteri Keraton Surakarta</h1>
        <p class="mt-4 text-m md:text-2lg">Keraton Surakarta, atau lebih dikenal dengan nama Keraton Kasunanan Surakarta, merupakan salah satu simbol penting kebudayaan Jawa yang terletak di Surakarta, Jawa Tengah. Didirikan pada tahun 1745 oleh Sultan Susuhunan Pakubuwono II, keraton ini menjadi pusat pemerintahan dan budaya di wilayah Surakarta. Sebagai tempat tinggal sultan dan keluarga kerajaan, Keraton Surakarta juga berfungsi sebagai pusat kegiatan seni, budaya, dan tradisi Jawa, termasuk seni tari, musik gamelan, batik, serta upacara-upacara adat yang masih dijaga hingga kini.</p>

        <!-- Carousel di bawah tulisan -->
        <div class="mt-8 text-2xl font-bold">
            <!-- Acara Mendatang -->
        </div>
    </div>
</section>


<style>
    section {
        position: relative;
        height: 500px;
        background-size: cover;
        background-position: center;
    }

    /* Make sure the section adapts well on larger screens */
    @media (min-width: 768px) {
        section {
            height: 700px;
        }
    }

    /* Full width for carousel */
    .carousel-container {
        width: 100%;
        max-width: 100%;
    }
</style>
