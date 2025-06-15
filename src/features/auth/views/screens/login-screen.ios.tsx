import { useAppTheme } from '@/app/providers';
import { ColorTypes, fonts, layout_tokens, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { SafeAreaView } from '@/shared/components/layouts';
import { AppIcon, TextDivider } from '@/shared/components/ui';
import { Button } from '@/shared/components/ui/button';
import { IconButton } from '@/shared/components/ui/icon-button';
import { icons } from '@assets/icons';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLoginScreen } from '../../viewmodel';

export const LoginScreen = () => {
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const {
    handlePressLoginWithEmail,
    handlePressLoginWithGoogle,
    handlePressLoginWithFacebook,
    handlePressLoginWithApple,
  } = useLoginScreen();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={{ gap: 20 }}>
        <AppIcon
          name="logo"
          size={scaleWidth(100)}
          iconStyle={{ borderRadius: scaleWidth(layout_tokens.border_radius) }}
        />
        <Text style={styles.headerText}>Explore the prompt of the day!</Text>

        <View style={styles.contentContainer}>
          <Button
            onPress={handlePressLoginWithEmail}
            variant="primary"
            titleStyle={styles.emailButtonText}
            title="Continue with email"
            buttonStyle={styles.emailButton}
          />

          <TextDivider label="Or" />

          <View style={styles.circleButtonContainer}>
            <IconButton icon={icons.facebook} size="lg" onPress={handlePressLoginWithFacebook} />
            <IconButton icon={icons.google} size="lg" onPress={handlePressLoginWithGoogle} />
            <IconButton icon={icons.apple} size="lg" onPress={handlePressLoginWithApple} />
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor: colors.background.primary,
    },

    contentContainer: {
      gap: scaleHeight(spacing_tokens.s_20),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    headerText: {
      fontSize: scaleWidth(fonts.size.large),
      fontWeight: 'bold',
      marginTop: scaleHeight(spacing_tokens.s_16),
      textAlign: 'center',
      color: colors.text.primary,
    },
    subHeaderText: {
      fontSize: scaleWidth(fonts.size.medium),
      color: colors.text.secondary,
      marginBottom: scaleHeight(spacing_tokens.s_16),
      textAlign: 'center',
    },

    emailButton: {
      backgroundColor: colors.button.primary,
      width: '100%',
      borderRadius: scaleWidth(layout_tokens.border_radius),
    },
    emailButtonText: {
      color: colors.text.general_white,
      fontWeight: '600',
    },
    circleButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scaleWidth(spacing_tokens.s_20),
      marginBottom: scaleHeight(spacing_tokens.s_20),
    },
    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    loginText: {
      color: colors.text.secondary,
    },
    loginLink: {
      color: colors.button.primary,
      fontWeight: '600',
    },
  });

export default LoginScreen;
