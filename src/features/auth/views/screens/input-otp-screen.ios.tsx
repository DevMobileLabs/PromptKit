import { ColorTypes, fonts, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { useAppTheme } from '@/providers';
import { SafeAreaView as SafeAreaViewLayout, TouchHideKeyboard } from '@/shared/components/layouts';
import { OTPInput } from '@/shared/components/ui';
import ActionButtonSet from '@/shared/components/ui/action-button-set/action-button-set';
import BackButton from '@/shared/components/ui/back-button';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const InputOtpScreen = () => {
  const { colors } = useAppTheme();
  const { navigation } = useAppNavigation();
  const styles = useMemo(() => createStyles(colors), [colors]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerTitle: '',
    });
  }, []);

  return (
    <TouchHideKeyboard>
      <SafeAreaViewLayout style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Input OTP</Text>
          <Text style={styles.subHeaderText}>Please enter the OTP sent to your email</Text>

          <View style={styles.formContainer}>
            <OTPInput numberOfDigits={4} containerStyle={styles.otpContainer} />

            <ActionButtonSet
              actions={[
                {
                  onPress: () => {},
                  title: 'Verify',
                  type: 'solid',
                  variant: 'primary',
                  containerStyle: { flex: 1 },
                },
                {
                  onPress: () => {},
                  title: 'Resend OTP',
                  type: 'outline',
                  variant: 'secondary',
                  containerStyle: { flex: 1 },
                },
              ]}
            />
          </View>
        </View>
      </SafeAreaViewLayout>
    </TouchHideKeyboard>
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
      gap: scaleHeight(spacing_tokens.s_24),
      paddingHorizontal: scaleWidth(spacing_tokens.s_12),
    },
    otpContainer: {
      marginVertical: scaleHeight(spacing_tokens.s_12),
    },
    contentContainer: {
      marginTop: scaleHeight(spacing_tokens.s_20),
      gap: scaleHeight(spacing_tokens.s_2),
    },
  });

export default InputOtpScreen;
