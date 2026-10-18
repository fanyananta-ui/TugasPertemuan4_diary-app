
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  moodImage,
  moodColor,
  onPress,
  variant = 'list',
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#E5E7EB' }}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.card,
          { borderColor: moodColor || COLORS.border },
          variant === 'grid' && styles.cardGrid,
        ]}
      >
        <Image
          source={moodImage}
          style={styles.mood}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.date}>
            {date}
          </Text>

          <Text
            style={styles.preview}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: RADIUS.card,
    overflow: 'hidden',
  },

  pressed: {
    opacity: 0.85,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 1.5,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    minHeight: 100,
  },

  cardGrid: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.card,
    backgroundColor: '#EEF2FF',
  },

  content: {
    flex: 1,
    gap: SPACE.xs,
  },

  title: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },

  preview: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 20,
  },
});
