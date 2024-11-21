<script>
    import CarouselComponent from './Carousel.svelte';
</script>

<section class="relative bg-cover bg-center h-[500px] md:h-[700px] w-full bg-[url('/KeratonSoloBG.jpg')]">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white h-full w-full px-4">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold">Maha Menteri Keraton Surakarta</h1>
        <p class="mt-4 text-lg md:text-2xl">Deskripsi singkat mengenai Maha Menteri Keraton Surakarta</p>

        <!-- Carousel di bawah tulisan -->
        <div class="mt-8 text-2xl font-bold">
            Acara Mendatang
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
