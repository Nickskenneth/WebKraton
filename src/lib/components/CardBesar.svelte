<script lang="ts">
    export let imageSrc: string;
    export let imageAlt: string = 'Situs Bersejarah'; // Default alt text
    export let title: string;
    export let content: string;
    export let href: string = ''; // URL untuk navigasi, default kosong

    // Function to navigate to the link
    const navigate = () => {
        if (href) window.location.href = href;
    };
</script>

<!-- Card Structure -->
<div
    class="w-[340px] h-[440px] rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 cursor-pointer"
    role="link"
    tabindex="0"
    on:click={navigate}
    on:keypress={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && href) navigate();
    }}
>
    <img
        src={imageSrc}
        alt={imageAlt}
        class="w-full h-[200px] object-cover"
    />
    <div class="flex flex-col justify-between flex-grow p-5 bg-white">
        <h2 class="text-lg font-semibold text-blue-900 mb-2">{title}</h2>
        <p class="text-sm text-blue-900 text-justify flex-grow leading-relaxed">
            {content}
        </p>
        <span class="text-green-600 font-bold mt-4 self-end">Selanjutnya →</span>
    </div>
</div>
