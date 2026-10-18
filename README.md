# Diary App

**Nama:** Fany Ananta Rahmah  
**NIM:** 2430511045  
**Kelas:** 5C

## Deskripsi Aplikasi

Diary App adalah aplikasi sederhana menggunakan React Native dan Expo untuk menampilkan catatan harian. Setiap catatan memiliki judul, tanggal, gambar, dan warna border yang berbeda sesuai suasana hati.

## Fitur Aplikasi

- Menampilkan 7 catatan harian.
- Menampilkan judul, tanggal, gambar, dan preview catatan.
- Menggunakan gambar lokal dari folder `assets/moods`.
- Menggunakan komponen `DiaryCard`.
- Card dapat ditekan untuk melihat detail diary.
- Menampilkan detail diary menggunakan `DiaryDetailModal`.
- Tampilan responsif satu kolom pada layar kecil.
- Tampilan berubah menjadi dua kolom pada layar dengan lebar 600 px atau lebih.
- Menggunakan warna border yang berbeda pada setiap diary.
- Menggunakan design tokens untuk warna, jarak, ukuran teks, dan radius.

## Teknologi yang Digunakan

- React Native
- Expo
- JavaScript

## Cara Menjalankan Proyek

1. Buka folder proyek di Visual Studio Code.
2. Buka terminal pada folder proyek.
3. Jalankan perintah:

   `npm install`

4. Jalankan aplikasi menggunakan perintah:

   `npx expo start`

5. Pindai QR code menggunakan Expo Go untuk membuka aplikasi di HP.

Untuk menjalankan versi web, gunakan:

`npx expo start --web`

## Responsive Layout

Aplikasi menggunakan breakpoint 600 px.

- Lebar layar kurang dari 600 px menggunakan satu kolom.
- Lebar layar 600 px atau lebih menggunakan dua kolom.

## Struktur Folder

```text
diary-app/
├── assets/
│   └── moods/
│       ├── awan.jpg
│       ├── halbaru.jpg
│       ├── pemograman.jpg
│       ├── produktifdikampus.jpg
│       ├── semangat.jpg
│       ├── senja.jpg
│       └── waktu.jpg
├── src/
│   ├── components/
│   │   ├── DiaryCard.js
│   │   └── DiaryDetailModal.js
│   ├── screens/
│   │   └── DiaryListScreen.js
│   └── styles/
│       └── tokens.js
├── App.js
├── package.json
└── README.md