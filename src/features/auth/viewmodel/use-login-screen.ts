import { RouteName } from '@/app/navigation';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useCallback } from 'react';

const useLoginScreen = () => {
  const { navigation } = useAppNavigation();

  const handlePressLoginWithEmail = useCallback(() => {
    navigation.navigate(RouteName.AUTH_LOGIN_EMAIL);
  }, []);

  const handlePressLoginWithGoogle = useCallback(() => {
    // TODO: Implement login with google
    console.log('login with google');
  }, []);

  const handlePressLoginWithFacebook = useCallback(() => {
    // TODO: Implement login with facebook
    console.log('login with facebook');
  }, []);

  const handlePressLoginWithApple = useCallback(() => {
    // TODO: Implement login with apple
    console.log('login with apple');
  }, []);

  return {
    handlePressLoginWithEmail,
    handlePressLoginWithGoogle,
    handlePressLoginWithFacebook,
    handlePressLoginWithApple,
  };
};

export default useLoginScreen;
