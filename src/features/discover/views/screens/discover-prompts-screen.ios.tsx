import { ColorTypes } from '@/app/theme';
import { useAppTheme } from '@/providers';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DiscoverPromptsScreen = () => {
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      <Text>discover-prompts-screen</Text>
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
  });

export default DiscoverPromptsScreen;
