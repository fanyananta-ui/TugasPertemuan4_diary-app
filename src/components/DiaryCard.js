
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function DiaryCard({ entry }) {
  return (
    <View
      style={[
        styles.card,
        { borderColor: entry.moodColor },
      ]}
    >
      <Image
        source={
          entry.moodImage
            ? entry.moodImage
            : { uri: entry.moodUri }
        }
        style={styles.mood}
        resizeMode="cover"
      />

      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>
          {entry.title}
        </Text>

        <Text style={styles.date}>
          {entry.date}
        </Text>

        <Text
          style={styles.preview}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {entry.preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 14,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F4EDE8',
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#493B46',
  },
  date: {
    fontSize: 12,
    color: '#968994',
    marginTop: 4,
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    lineHeight: 20,
    color: '#635761',
  },
});
