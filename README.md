# Diary App

**Nama:** Fany Ananta Rahmah  
**NIM:** 2430511045  
**Kelas:** 5C

## Deskripsi Aplikasi

Diary App adalah aplikasi sederhana yang dibuat menggunakan React Native dan Expo untuk menampilkan catatan harian. Setiap catatan memiliki judul, tanggal, gambar, dan warna yang menggambarkan suasana hati.

## Fitur Aplikasi

- Menampilkan 5 catatan harian.
- Menampilkan judul dan tanggal setiap catatan.
- Menggunakan gambar lokal yang disimpan di folder `assets/moods`.
- Menampilkan avatar pada bagian header.
- Menggunakan warna border yang berbeda sesuai suasana hati.
- Menggunakan komponen `DiaryCard` agar kode lebih rapi dan mudah dikelola.

## Teknologi yang Digunakan

- React Native
- Expo
- JavaScript

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

## Cara Menjalankan Aplikasi

1. Buka folder proyek di VS Code.
2. Buka terminal pada folder proyek.
3. Jalankan perintah `npm install`.
4. Jalankan aplikasi menggunakan perintah `npx expo start`.
5. Buka aplikasi melalui Expo Go untuk melihat hasilnya.

## Kesimpulan

Diary App dibuat untuk menerapkan penggunaan React Native dan Expo dalam membangun aplikasi sederhana. Aplikasi ini menampilkan beberapa catatan harian dengan gambar lokal, avatar, serta warna border sesuai suasana hati. Struktur kode dibuat lebih rapi dengan memisahkan komponen kartu diary dari halaman utama.