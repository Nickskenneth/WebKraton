// src/lib/store/profileStore.js
import { writable } from 'svelte/store';

// Store untuk menyimpan data profil
export const profileStore = writable({
  namaLengkap: 'Sri Apriliani Ririn',
  tempatLahir: 'Solo',
  tanggalLahir: '12-12-2000',
  jenisKelamin: 'Perempuan',
  alamat: 'Jl. Surakarta',
  noTelepon: '08123456789',
  email: 'sriapriliani@gmail.com',
  pekerjaan: 'Pekerjaan',
  hobi: 'Bermain gitar',
  wongso: 'Jawa',
  agama: 'Agama',
  asmaDalem: 'Ranu Wijayanti',
  namaAyah: 'Nama Ayah',
  namaIbu: 'Nama Ibu',
  ayahAbdi: 'Yes',
  ibuAbdi: 'Yes',
});
