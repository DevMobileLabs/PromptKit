import { useAppTheme } from '@/app/providers';
import { ColorTypes, fonts, layout_tokens, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import TextInputField from '@/shared/components/form/text-input';
import { SafeAreaView, TouchHideKeyboard } from '@/shared/components/layouts';
import { AppIcon } from '@/shared/components/ui';
import { Button } from '@/shared/components/ui/button';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useLayoutEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useForgotPasswordScreen from '../../viewmodel/use-forgot-password-screen';

export const ForgotPasswordScreen = () => {
  const { colors } = useAppTheme();
  const { navigation } = useAppNavigation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { email, handleChangeEmail, handlePressForgotPassword, handlePressBackToLogin } = useForgotPasswordScreen();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchHideKeyboard>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoContainer}>
            <AppIcon name="logo" size={scaleWidth(80)} iconStyle={styles.logoIcon} />
            <Text style={styles.headerText}>Forgot Password</Text>
            <Text style={styles.subHeaderText}>Please enter your email to reset your password</Text>
          </View>

          <View style={styles.formContainer}>
            <TextInputField label="Email" value={email} onChangeText={handleChangeEmail} />

            <Button title="Continue" onPress={handlePressForgotPassword} />
          </View>

          <TouchableOpacity style={styles.backToLogin} onPress={handlePressBackToLogin}>
            <Text style={styles.backToLoginText}>Back to Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchHideKeyboard>
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
    safeArea: {
      flex: 1,
    },
    logoContainer: {
      marginVertical: scaleHeight(spacing_tokens.s_20),
    },
    logoIcon: {
      borderRadius: scaleWidth(layout_tokens.border_radius),
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
      textAlign: 'center',
    },
    formContainer: {
      gap: scaleHeight(spacing_tokens.s_12),
    },
    backToLogin: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleHeight(spacing_tokens.s_12),
      backgroundColor: colors.background.secondary,
      padding: scaleHeight(spacing_tokens.s_12),
      borderRadius: scaleWidth(layout_tokens.border_radius),
    },
    backToLoginText: {
      fontSize: scaleWidth(fonts.size.small),
      color: colors.text.primary,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
  });

export default ForgotPasswordScreen;
