import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useCallback, useState } from 'react';

const useForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const { navigation } = useAppNavigation();
  const handlePressForgotPassword = useCallback(() => {
    console.log('email', email);
  }, [email]);

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
