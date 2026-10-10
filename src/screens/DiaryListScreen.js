
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import awanImage from '../../assets/moods/awan.jpg';
import produktifImage from '../../assets/moods/produktif.jpg';
import senjaImage from '../../assets/moods/senja.jpg';
import pemrogramanImage from '../../assets/moods/pemograman.jpg';
import waktuImage from '../../assets/moods/waktu.jpg';

import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodImage: awanImage,
    moodColor: '#86CFA5',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodImage: produktifImage,
    moodColor: '#8BB8F0',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodImage: senjaImage,
    moodColor: '#D5A1E8',
  },
  {
    id: 4,
    title: 'Belajar Pemrograman',
    date: '2025-10-03',
    preview:
      'Hari ini belajar React Native dan berhasil menjalankan aplikasi di HP.',
    moodImage: pemrogramanImage,
    moodColor: '#F0C477',
  },
  {
    id: 5,
    title: 'Waktu Bersama Teman',
    date: '2025-10-02',
    preview:
      'Berdiskusi dan mengerjakan tugas bersama teman-teman di kampus.',
    moodImage: waktuImage,
    moodColor: '#F09BAA',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.heading}>Buku Harian</Text>
          <Text style={styles.subtitle}>
            Cerita kecil dari hari-hariku
          </Text>
        </View>

        <Image
          source={{ uri: 'https://picsum.photos/seed/avatarfany/100' }}
          style={styles.avatar}
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard key={entry.id} entry={entry} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F5',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
    paddingVertical: 8,
  },
  headerText: {
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#493B46',
  },
  subtitle: {
    fontSize: 13,
    color: '#8B7D86',
    marginTop: 4,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#F0C9D2',
  },
});
