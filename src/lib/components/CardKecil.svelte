<script>
	export let imageSrc;
	export let imageAlt = 'Situs Bersejarah'; // Deskripsi gambar default
	export let title;
	export let href = '/loginKraton'; // Default URL jika tidak diberikan
	export let linkText = 'Selanjutnya →'; // Teks default untuk tautan
</script>

<a href={href} class="block text-decoration-none hover:scale-105 transition-transform duration-300">
	<div class="rounded-2xl shadow-lg overflow-hidden w-[340px] h-[300px] flex flex-col">
		<img src={imageSrc} alt={imageAlt} class="w-full h-[180px] object-cover" />
		<div class="flex flex-col justify-between px-6 py-4 bg-white flex-grow">
			<h2 class="text-lg font-semibold text-blue-900">{title}</h2>
			<span class="text-green-600 font-bold mt-4 self-end hover:underline">
				{linkText}
			</span>
		</div>
	</div>
</a>
