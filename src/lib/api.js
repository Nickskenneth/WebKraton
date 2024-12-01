export async function getOrganisasi() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8080/organisasi');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching organisasi:', error);
		throw error;
	}
}

export async function getKomunitas() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8080/komunitas');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching komunitas:', error);
		throw error;
	}
}

// Fungsi untuk login
export async function signin(username, password) {
	try {
		// Membuat URL dengan query params
		const url = new URL('http://manpro.crossnet.co.id:8080/signin');
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
// api.js

// import { fetch } from 'svelte-fetch';

export async function signup(username, password) {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8080/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const data = await response.json();

		if (data.success) {
			return { success: true, message: 'Pendaftaran berhasil!' };
		} else {
			return { success: false, message: data.message || 'Terjadi kesalahan' };
		}
	} catch (error) {
		console.error(error);
		return { success: false, message: 'Terjadi kesalahan koneksi' };
	}
}

// Fungsi untuk mengambil detail organisasi dari API
export async function getOrganisasiDetails() {
	const url = 'http://manpro.crossnet.co.id:8080/detail_organisasi';

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Gagal memuat data organisasi');
		}

		const data = await response.json();
		return data; // Mengembalikan data JSON yang diterima dari API
	} catch (error) {
		console.error('Error saat mengambil data organisasi:', error);
		throw error; // Melemparkan error agar bisa ditangani di tempat lain
	}
}
