import { useCallback, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

function useLoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    try {
      setLoading(true);
      const loginService = await auth().signInWithEmailAndPassword(
        username,
        password,
      );

      console.log('User account created & signed in!', loginService);
      setLoading(false);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
      setLoading(false);
    }
  }, [username, password]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.error(user);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  return {
    username,
    password,
    loading,
    setUsername,
    setPassword,
    login,
  };
}

export default useLoginScreen;
