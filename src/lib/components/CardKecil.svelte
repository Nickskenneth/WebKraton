<script>
	// Properti yang bisa digunakan oleh berbagai halaman
	export let imageSrc;
	export let imageAlt = 'Situs Bersejarah'; // Deskripsi gambar default
	export let title;
	export let href = '/loginKraton'; // Default ke '#' jika tidak ada href yang diberikan
	export let linkText = 'Selanjutnya →'; // Teks default untuk tautan
</script>

<a href={href} class="card-wrapper">
	<div class="card">
		<img src={imageSrc} alt={imageAlt} class="card-img" />
		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<span class="card-link">{linkText}</span> <!-- Hanya teks, bukan link mandiri -->
		</div>
	</div>
</a>

<style>
	.card-wrapper {
		text-decoration: none; /* Menghilangkan underline pada seluruh area yang bisa diklik */
		display: block; /* Memastikan card bisa diklik penuh */
	}

	.card {
		width: 340px;
		height: 300px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		font-family: 'Poppins', sans-serif;
		display: flex;
		flex-direction: column;
		position: relative;
		transition: transform 0.3s ease; /* Animasi untuk efek hover */
	}

	/* Efek saat di-hover: memperbesar card */
	.card-wrapper:hover .card {
		transform: scale(1.05);
	}

	.card-img {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.card-body {
		padding: 20px 24px 24px 24px; /* Jarak padding untuk body */
		display: flex;
		flex-direction: column;
		justify-content: space-between; /* Pastikan judul dan konten tersusun dengan baik */
		flex-grow: 1;
	}

	.card-title {
		font-size: 16px;
		font-weight: 600;
		color: #0b2e4b;
	}

	.card-link {
		font-size: 16px;
		color: #629a34;
		text-decoration: none;
		font-weight: bold;
		cursor: pointer;
		position: absolute; /* Position absolute untuk memposisikan di bawah kanan */
		right: 20px;
		bottom: 12px;
	}

	.card-link:hover {
		text-decoration: underline;
	}
</style>
