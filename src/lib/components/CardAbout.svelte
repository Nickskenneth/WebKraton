<script>
    export let content;
    export let imageSrc;
    export let bgColor = '#AC9794'; // Default background color
</script>

<div
    class="w-[372px] h-[440px] rounded-xl p-6 shadow-lg flex flex-col justify-start items-center"
    style="background-color: {bgColor};"
>
    <img
        src={imageSrc}
        alt="Card Image"
        class="w-[302px] h-[178px] rounded-xl object-cover mb-6 border border-white"
    />
    <p class="text-sm text-blue-900 font-poppins text-justify">
        {content}
    </p>
</div>
