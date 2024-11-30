<script>
	export let imageSrc;
	export let imageAlt = 'gambar'; // Default alt text
	export let title;
	export let href = '#'; // Default URL
	export let linkText = 'Selanjutnya →'; // Default link text
</script>

<a {href} class="block text-decoration-none">
	<div
		class="flex flex-col justify-between bg-white shadow-lg rounded-2xl overflow-hidden w-[340px] h-[300px] hover:scale-105 transition-transform duration-300"
	>
		<!-- Image -->
		<img src={imageSrc} alt={imageAlt} class="w-full h-[180px] object-cover" />
		<!-- Card Body -->
		<div class="flex flex-col justify-between px-6 py-4 h-[120px]">
			<!-- Title -->
			<h2 class="text-lg font-semibold text-blue-900 mb-2">{title}</h2>
			<!-- Link -->
			<span class="text-green-600 font-bold hover:underline self-end">{linkText}</span>
		</div>
	</div>
</a>
