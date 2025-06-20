import { RouteName } from '@/navigation';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import { useCallback, useState } from 'react';

const useLoginEmail = () => {
  const { navigation } = useAppNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handlePressLogin = useCallback(() => {
    console.log('email', email);
    console.log('password', password);
    navigation.navigate(RouteName.HOME);
  }, [email, password]);

  const handlePressIsRememberMe = useCallback(() => {
    setIsRememberMe(!isRememberMe);
  }, [isRememberMe]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isRememberMe,
    handlePressLogin,
    handlePressIsRememberMe,
  };
};

export default useLoginEmail;
