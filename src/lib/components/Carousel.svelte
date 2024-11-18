<script>
    let images = [
        { src: "/Carousel1.jpg", alt: "Carousel 1" },
        { src: "/Carousel2.jpg", alt: "Carousel 2" },
        { src: "/Carousel3.jpg", alt: "Carousel 3" },
    ];

    let currentIndex = 0;
    let showModal = false;
    let modalImage = null;

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    };

    const openModal = (image) => {
        modalImage = image;
        showModal = true;
    };

    const closeModal = () => {
        modalImage = null;
        showModal = false;
    };
</script>

<div class="relative w-full h-[300px] overflow-hidden">
    <!-- Tombol Previous -->
    <button
        on:click={prevSlide}
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
    >
        ‹
    </button>

    <!-- Carousel Slides -->
    <div
        class="flex transition-transform duration-500"
        style="transform: translateX(-{currentIndex * 100}%)"
    >
        {#each images as { src, alt }}
            <img
                src={src}
                alt={alt}
                class="w-full h-[300px] object-cover cursor-pointer"
                on:click={() => openModal({ src, alt })}
            />
        {/each}
    </div>

    <!-- Tombol Next -->
    <button
        on:click={nextSlide}
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
    >
        ›
    </button>
</div>

<!-- Modal -->
{#if showModal}
<div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
    <div class="relative">
        <img
            src={modalImage.src}
            alt={modalImage.alt}
            class="max-w-full max-h-[80vh] rounded-lg"
        />
        <button
            on:click={closeModal}
            class="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-300"
        >
            ✕
        </button>
    </div>
</div>
{/if}
