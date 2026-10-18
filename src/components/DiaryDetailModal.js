import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

export default function DiaryDetailModal({
  visible,
  onClose,
  entry,
}) {
  if (!entry) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ScrollView style={styles.container}>
        <Image
          source={entry.moodImage}
          style={styles.hero}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {entry.title}
          </Text>

          <Text style={styles.date}>
            {entry.date}
          </Text>

          <Text style={styles.body}>
            {entry.body}
          </Text>

          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Tutup detail diary"
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              Tutup
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  hero: {
    width: '100%',
    height: 300,
    backgroundColor: '#F7F1F3',
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },

  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },

  body: {
    fontSize: TYPO.body,
    lineHeight: 22,
    color: COLORS.text,
  },

  button: {
    marginTop: SPACE.l,
    padding: SPACE.m,
    minHeight: 48,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});