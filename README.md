# Diary App

**Nama:** Fany Ananta Rahmah  
**NIM:** 2430511045  
**Kelas:** 5C

## Deskripsi Aplikasi

Diary App adalah aplikasi sederhana yang dibuat menggunakan React Native dan Expo untuk menampilkan catatan harian beserta gambar dan suasana hati.

## Fitur yang Dikerjakan

- Menampilkan minimal lima catatan harian.
- Menampilkan judul dan tanggal setiap catatan.
- Menggunakan gambar lokal dari folder `assets/moods`.
- Menambahkan avatar pengguna pada bagian header menggunakan `Image`.
- Memberikan variasi border kartu berdasarkan suasana hati.
- Menggunakan komponen `DiaryCard` agar kode lebih rapi dan dapat digunakan kembali.

## Teknologi yang Digunakan

- React Native
- Expo
- JavaScript

## Cara Menjalankan Proyek

1. Buka folder proyek di Visual Studio Code.
2. Buka terminal pada folder proyek.
3. Jalankan perintah berikut untuk memasang kebutuhan proyek:

   `npm install`

4. Jalankan aplikasi menggunakan perintah:

   `npx expo start`

5. Pindai QR code menggunakan Expo Go untuk membuka aplikasi di HP.

## Struktur Folder

```text
diary-app/
├── assets/
│   └── moods/
│       ├── awan.jpg
│       ├── pemograman.jpg
│       ├── produktif.jpg
│       ├── senja.jpg
│       └── waktu.jpg
├── src/
│   ├── components/
│   │   └── DiaryCard.js
│   └── screens/
│       └── DiaryListScreen.js
├── App.js
├── package.json
└── README.md
```