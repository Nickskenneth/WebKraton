<script>
	import NavBarL from '$lib/components/NavBarL.svelte';
	import RiwayatOrganisasiKomunitasLog from '$lib/components/RiwayatOrganisasiKomunitasLog.svelte';

	let abdiInfo = {
		nama: 'Sri Apriliani Ririn',
		namaDalem: 'Ranu Wijayanti',
		jenisKelamin: 'Perempuan',
		noTelepon: '081357474986',
		hobi: 'Menonton film, mendengar musik',
		jabatanOrganisasi: '-',
		jabatanKomunitas: '-',
		gelar: 'Nyi Lurah (Ny.L)'
	};

	let organisasi = [
		{
			namaOrganisasi: 'Bregada - Prajurit Keraton Surakarta',
			tanggalBergabung: 'DD-MM-YYYY',
			peran: 'Anggota',
			jumlahAnggota: 50
		},
		{
			namaOrganisasi: 'Lembaga Dewan Adat Keraton',
			tanggalBergabung: '10-02-2022',
			peran: 'Ketua',
			jumlahAnggota: 100
		}
	];

	let komunitas = [
		{
			namaOrganisasi: 'Sinau Batik',
			tanggalBergabung: '19 Juli 2023 (1 Suro 2023)',
			peran: 'Anggota',
			jumlahAnggota: 50
		}
	];

	let searchTermOrganisasi = '';
	let searchTermKomunitas = '';

	$: filteredOrganisasi = organisasi.filter((org) =>
		org.namaOrganisasi.toLowerCase().includes(searchTermOrganisasi.toLowerCase())
	);

	$: filteredKomunitas = komunitas.filter((kom) =>
		kom.namaOrganisasi.toLowerCase().includes(searchTermKomunitas.toLowerCase())
	);
</script>

<NavBarL />

<section class="bg-gray-100 p-6">
	<h2 class="text-3xl font-bold text-blue-600 text-center mb-6">Cari Abdi</h2>

	<div class="flex flex-col md:flex-row md:items-center mb-6 gap-4">
		<label for="id-abdi" class="text-lg font-semibold">ID Abdi</label>
		<div class="flex items-center w-full md:w-auto">
			<input
				type="text"
				id="id-abdi"
				placeholder="Masukkan ID Abdi"
				class="w-full md:w-64 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
			/>
			<button class="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
				Cari
			</button>
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		<!-- Bagian kiri: Informasi Abdi -->
		<div class="bg-white shadow-md rounded-lg p-6 flex flex-col items-left">
			<img src="/iconProfile.svg" alt="Foto Abdi" class="w-24 h-24 rounded-full mb-4" />
			<div class="text-left space-y-2">
				<p class="text-gray-600">
					<strong class="block font-medium">Nama</strong>
					<span class="text-gray-800">{abdiInfo.nama}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Nama Dalem</strong>
					<span class="text-gray-800">{abdiInfo.namaDalem}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Jenis Kelamin</strong>
					<span class="text-gray-800">{abdiInfo.jenisKelamin}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">No Telepon</strong>
					<span class="text-blue-600 font-semibold">{abdiInfo.noTelepon}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Hobi</strong>
					<span class="text-gray-800">{abdiInfo.hobi}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Jabatan Organisasi</strong>
					<span class="text-gray-800">{abdiInfo.jabatanOrganisasi}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Jabatan Komunitas</strong>
					<span class="text-gray-800">{abdiInfo.jabatanKomunitas}</span>
				</p>
				<p class="text-gray-600">
					<strong class="block font-medium">Gelar</strong>
					<span class="text-gray-800">{abdiInfo.gelar}</span>
				</p>
			</div>
		</div>

		<!-- Bagian tengah: Organisasi -->
		<div class="bg-white shadow-md rounded-lg p-6">
			<h3 class="text-lg font-bold text-blue-600 mb-4">Organisasi</h3>
			<input
				type="text"
				placeholder="Cari Organisasi"
				class="w-full mb-4 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
				bind:value={searchTermOrganisasi}
			/>
			<div class="space-y-4">
				{#each filteredOrganisasi as org}
					<RiwayatOrganisasiKomunitasLog
						namaOrganisasi={org.namaOrganisasi}
						tanggalBergabung={org.tanggalBergabung}
						peran={org.peran}
						jumlahAnggota={org.jumlahAnggota.toString()}
					/>
				{/each}
			</div>
		</div>

		<!-- Bagian kanan: Komunitas -->
		<div class="bg-white shadow-md rounded-lg p-6">
			<h3 class="text-lg font-bold text-blue-600 mb-4">Komunitas</h3>
			<input
				type="text"
				placeholder="Cari Komunitas"
				class="w-full mb-4 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-300 focus:outline-none"
				bind:value={searchTermKomunitas}
			/>
			<div class="space-y-4">
				{#each filteredKomunitas as kom}
					<RiwayatOrganisasiKomunitasLog
						namaOrganisasi={kom.namaOrganisasi}
						tanggalBergabung={kom.tanggalBergabung}
						peran={kom.peran}
						jumlahAnggota={kom.jumlahAnggota.toString()}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
