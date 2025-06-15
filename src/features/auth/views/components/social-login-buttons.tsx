import { ColorTypes, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { useAppTheme } from '@/providers';
import { IconButton } from '@/shared/components/ui';
import { icons } from '@assets/icons';
import React, { useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

type SocialLoginButtonsProps = {
  handlePressLoginWithFacebook: () => void;
  handlePressLoginWithGoogle: () => void;
  handlePressLoginWithApple: () => void;
};

const SocialLoginButtons = ({
  handlePressLoginWithFacebook,
  handlePressLoginWithGoogle,
  handlePressLoginWithApple,
}: SocialLoginButtonsProps) => {
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.circleButtonContainer}>
      <IconButton icon={icons.facebook} size="lg" onPress={handlePressLoginWithFacebook} />
      <IconButton icon={icons.google} size="lg" onPress={handlePressLoginWithGoogle} />
      {Platform.OS === 'ios' && <IconButton icon={icons.apple} size="lg" onPress={handlePressLoginWithApple} />}
    </View>
  );
};

export default SocialLoginButtons;

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    circleButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scaleWidth(spacing_tokens.s_20),
      marginBottom: scaleHeight(spacing_tokens.s_20),
    },
  });
