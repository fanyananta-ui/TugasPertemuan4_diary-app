import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

import {
  COLORS,
  SPACE,
  TYPO,
  BREAKPOINTS,
} from '../styles/tokens';

// Data diary menggunakan gambar lokal dari project sebelumnya.
const DATA = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Menikmati suasana pagi yang tenang.',
    body: 'Hari ini saya memulai aktivitas dengan suasana yang tenang. Saya berharap semua kegiatan berjalan dengan lancar.',
    moodImage: require('../../assets/moods/awan.jpg'),
    moodColor: '#86CFA5',
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan tugas dan belajar di kampus.',
    body: 'Hari ini saya berusaha menyelesaikan tugas kuliah dan memahami materi yang diberikan. Walaupun cukup melelahkan, banyak hal yang bisa dipelajari.',
    moodImage: require('../../assets/moods/produktifdikampus.jpg'),
    moodColor: '#8BB8F0',
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati pemandangan sore hari.',
    body: 'Saya menghabiskan waktu sore dengan menikmati suasana taman. Waktu sebentar untuk beristirahat membuat pikiran terasa lebih segar.',
    moodImage: require('../../assets/moods/senja.jpg'),
    moodColor: '#D5A1E8',
  },
  {
    id: '4',
    title: 'Belajar Pemrograman',
    date: '2025-10-03',
    preview: 'Mencoba memahami kode program.',
    body: 'Hari ini saya belajar pemrograman dan mencoba memahami cara kerja kode. Ada beberapa bagian yang masih membingungkan, tetapi saya akan terus berlatih.',
    moodImage: require('../../assets/moods/pemograman.jpg'),
    moodColor: '#F0C477',
  },
  {
    id: '5',
    title: 'Waktu Bersama Teman',
    date: '2025-10-02',
    preview: 'Mengobrol dan menghabiskan waktu bersama.',
    body: 'Hari ini saya bisa menghabiskan waktu bersama teman-teman. Kami mengobrol dan saling berbagi cerita sehingga suasana menjadi lebih menyenangkan.',
    moodImage: require('../../assets/moods/waktu.jpg'),
    moodColor: '#F09BAA',
  },
  {
    id: '6',
    title: 'Semangat Hari Baru',
    date: '2025-10-07',
    preview: 'Memulai hari dengan semangat baru.',
    body: 'Saya mencoba menjalani hari dengan lebih semangat dan menyelesaikan kegiatan satu per satu. Semoga kebiasaan baik ini bisa terus dipertahankan.',
    moodImage: require('../../assets/moods/semangat.jpg'),
    moodColor: '#86CFA5',
  },
  {
    id: '7',
    title: 'Belajar Hal Baru',
    date: '2025-10-08',
    preview: 'Menambah pengalaman dan pengetahuan.',
    body: 'Hari ini saya mencoba mempelajari hal baru yang bisa menambah pengetahuan. Saya sadar bahwa belajar membutuhkan proses dan latihan yang konsisten.',
    moodImage: require('../../assets/moods/halbaru.jpg'),
    moodColor: '#F0C477',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();

  // Lebar 600 px atau lebih menggunakan dua kolom.
  const twoCols = width >= BREAKPOINTS.tablet;

  const [selected, setSelected] = useState(null);

  // Mengubah key ketika jumlah kolom berubah.
  const keyForCols = useMemo(
    () => (twoCols ? 'grid2' : 'list1'),
    [twoCols]
  );

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.itemWrap,
        twoCols && styles.itemWrap2,
      ]}
    >
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodImage={item.moodImage}
        moodColor={item.moodColor}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>

      <Text style={styles.subtitle}>
        Cerita kecil dari hari-hariku
      </Text>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        columnWrapperStyle={
          twoCols ? styles.columnWrapper : undefined
        }
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Belum ada catatan harian.
          </Text>
        }
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
  },

  subtitle: {
    fontSize: TYPO.body,
    color: COLORS.muted,
    paddingHorizontal: SPACE.l,
    marginTop: SPACE.xs,
  },

  listContent: {
    padding: SPACE.l,
    gap: SPACE.m,
    paddingBottom: SPACE.xl,
  },

  itemWrap: {
    width: '100%',
  },

  itemWrap2: {
    flex: 1,
    minWidth: 0,
  },

  columnWrapper: {
    gap: SPACE.m,
  },

  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});