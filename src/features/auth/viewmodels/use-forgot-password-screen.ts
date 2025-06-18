import { RouteName } from '@/navigation';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useCallback, useState } from 'react';

const useForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const { navigation } = useAppNavigation();
  const handlePressForgotPassword = useCallback(() => {
    navigation.navigate(RouteName.AUTH_INPUT_OTP);
  }, []);

  const handleChangeEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePressBackToLogin = useCallback(() => {
    navigation.goBack();
  }, []);

  return {
    email,
    handlePressForgotPassword,
    handleChangeEmail,
    handlePressBackToLogin,
  };
};

export default useForgotPasswordScreen;
