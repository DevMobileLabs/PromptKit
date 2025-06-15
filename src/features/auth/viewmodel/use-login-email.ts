import { useCallback, useState } from 'react';

const useLoginEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handlePressLogin = useCallback(() => {
    console.log('email', email);
    console.log('password', password);
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
