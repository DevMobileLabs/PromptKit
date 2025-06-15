import { ColorTypes, fonts, layout_tokens, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { RouteName } from '@/navigation';
import { useAppTheme } from '@/providers';
import TextInputField from '@/shared/components/form/text-input';
import { SafeAreaView, TouchHideKeyboard } from '@/shared/components/layouts';
import { AppIcon, TextDivider } from '@/shared/components/ui';
import { Button } from '@/shared/components/ui/button';
import CheckBox from '@/shared/components/ui/checkbox/check-box';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useLayoutEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLoginScreen } from '../../viewmodels';
import useLoginEmail from '../../viewmodels/use-login-email';
import SocialLoginButtons from '../components/social-login-buttons';

export const LoginEmailScreen = () => {
  const { colors } = useAppTheme();
  const { navigation } = useAppNavigation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { email, setEmail, password, setPassword, isRememberMe, handlePressLogin, handlePressIsRememberMe } =
    useLoginEmail();

  const { handlePressLoginWithApple, handlePressLoginWithFacebook, handlePressLoginWithGoogle } = useLoginScreen();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchHideKeyboard>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoContainer}>
            <AppIcon name="logo" size={scaleWidth(80)} iconStyle={styles.logoIcon} />
            <Text style={styles.headerText}>Welcome back</Text>
            <Text style={styles.subHeaderText}>Please enter your details</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.formFields}>
              <TextInputField label="Email" value={email} onChangeText={setEmail} />
              <TextInputField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
              <View style={styles.formOptions}>
                <CheckBox label="Remember me" checked={isRememberMe} onPress={handlePressIsRememberMe} />
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.AUTH_FORGOT_PASSWORD)}>
                  <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Button title="Login" onPress={handlePressLogin} />

            <View style={styles.contentContainer}>
              <TextDivider label="Or" />
              <SocialLoginButtons
                handlePressLoginWithFacebook={handlePressLoginWithFacebook}
                handlePressLoginWithGoogle={handlePressLoginWithGoogle}
                handlePressLoginWithApple={handlePressLoginWithApple}
              />
            </View>
          </View>
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
      gap: 20,
      justifyContent: 'flex-start',
      flex: 1,
    },
    logoContainer: {
      marginVertical: scaleHeight(spacing_tokens.s_20),
      gap: 10,
      alignItems: 'center',
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
      gap: scaleHeight(10),
    },
    formFields: {
      gap: scaleHeight(10),
      marginBottom: scaleHeight(spacing_tokens.s_12),
    },
    formOptions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: scaleWidth(spacing_tokens.s_4),
    },
    forgotPasswordText: {
      fontSize: scaleWidth(fonts.size.small),
      color: colors.text.primary,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    contentContainer: {
      marginTop: scaleHeight(spacing_tokens.s_6),
      gap: scaleHeight(spacing_tokens.s_20),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    circleButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: scaleWidth(spacing_tokens.s_20),
      marginBottom: scaleHeight(spacing_tokens.s_20),
    },
  });

export default LoginEmailScreen;
