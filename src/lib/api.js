//@ts-nocheck

// SIGNUP
// export async function signup(data) {
// 	try {
// 		const response = await fetch('http://manpro.crossnet.co.id:8800/signup', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(data)
// 		});

// 		const result = await response.json();
// 		return result;
// 	} catch (error) {
// 		console.error('Error during signup:', error);
// 		throw error;
// 	}
// }

export async function signup(formData) {
	try {
		// Kirim data ke API menggunakan POST
		const response = await fetch('http://manpro.crossnet.co.id:8800/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData) // Mengirim data form
		});

		// Pastikan respons diterima dengan baik
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json(); // Parse JSON dari response
		return data; // Mengembalikan data JSON
	} catch (error) {
		console.error('Error during signup:', error);
		return {
			Status: 500,
			Message: 'Terjadi kesalahan saat terhubung ke server'
		}; // Return error untuk menangani kegagalan API
	}
}

// Fungsi untuk login
export async function signin(username, password) {
	try {
		// Membuat URL dengan query params
		const url = new URL('http://manpro.crossnet.co.id:8800/signin');
		const params = new URLSearchParams();
		params.append('username', username);
		params.append('password', password);
		url.search = params.toString(); // Menambahkan query params ke URL

		// Mengirimkan request GET
		const response = await fetch(url, {
			method: 'GET'
		});

		// Menangani respons API
		const data = await response.json();

		if (response.ok && data.status === 'success') {
			return { success: true, message: data.message };
		} else {
			return { success: false, message: data.message || 'Invalid credentials' };
		}
	} catch (error) {
		// Menangani error koneksi atau lainnya
		return { success: false, message: error.message || 'Terjadi kesalahan, coba lagi.' };
	}
}

// SITUS
export const getSitus = async () => {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8800/situs');
		if (!response.ok) {
			throw new Error('Gagal mengambil data situs');
		}
		const data = await response.json();
		return data; // Kembalikan data yang didapat dari API
	} catch (error) {
		console.error('Error:', error);
		return { Status: 500, Data: [] }; // Mengembalikan status error dan data kosong
	}
};

// DETAIL SITUS
export async function getSitusDetails(id) {
	try {
		const response = await fetch(
			`http://manpro.crossnet.co.id:8800/detail_situs?id_situs=${id}` // Endpoint API
		);
		if (!response.ok) {
			throw new Error('Gagal mendapatkan detail situs.');
		}
		const data = await response.json();
		return data; // Mengembalikan data situs
	} catch (error) {
		console.error('Error:', error);
		throw error; // Lemparkan error jika terjadi
	}
}

// ACARA
export async function getAcara() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8800/acara', {
			method: 'GET', // Menggunakan method GET
			headers: {
				'Content-Type': 'application/json' // Menyatakan format data yang diharapkan
			}
		});

		// Memeriksa apakah status response adalah 200 OK
		if (!response.ok) {
			throw new Error('Gagal memuat data acara');
		}

		const data = await response.json();
		return data; // Mengembalikan data acara
	} catch (error) {
		console.error('Error saat mengambil data: ' + error.message);
		return { Status: 500, Message: 'Gagal mengambil data' }; // Return error jika gagal
	}
}

// DETAIL ACARA
export async function getAcaraDetails(id) {
	try {
		const response = await fetch(`http://manpro.crossnet.co.id:8800/detail_acara?id_acara=${id}`);
		if (!response.ok) {
			throw new Error('Gagal mendapatkan detail acara.');
		}
		return await response.json();
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

// ORGANISASI
export async function getOrganisasi() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8800/organisasi');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching organisasi data:', error);
		return { Status: 500, Data: [] };
	}
}

// DETAIL ORGANISASI
export async function getOrganisasiDetails(id) {
	try {
		const response = await fetch(
			`http://manpro.crossnet.co.id:8800/detail_organisasi?id_organisasi=${id}`
		);
		if (!response.ok) {
			throw new Error('Gagal mendapatkan data');
		}
		const data = await response.json();
		console.log('Respons API Detail:', data); // Tambahkan log
		return data;
	} catch (error) {
		console.error('Error fetching detail organisasi:', error);
		throw error;
	}
}

// KOMUNITAS
export async function getKomunitas() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8800/komunitas');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching organisasi data:', error);
		return { Status: 500, Data: [] };
	}
}

// DETAIL KOMUNITAS
export async function getKomunitasDetails(id) {
	try {
		const response = await fetch(
			`http://manpro.crossnet.co.id:8800/detail_komunitas?id_komunitas=${id}`
		);
		if (!response.ok) {
			throw new Error('Gagal mendapatkan data');
		}
		const data = await response.json();
		console.log('Respons API Detail:', data); // Tambahkan log
		return data;
	} catch (error) {
		console.error('Error fetching detail organisasi:', error);
		throw error;
	}
}

// CARI ABDI
export async function getAbdiDetails(id) {
	try {
		const response = await fetch(
			`http://manpro.crossnet.co.id:8800/user?id_user=${id}` // Sesuaikan endpoint
		);
		if (!response.ok) {
			throw new Error('Gagal mendapatkan detail Abdi.');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
