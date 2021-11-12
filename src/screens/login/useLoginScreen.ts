import { useCallback, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
      console.log({ loginService });
      firestore()
        .collection('user')
        .doc(loginService.user.uid)
        .set(
          {
            metadata: loginService.user.metadata,
            ...loginService.user.providerData[0],
          },
          { merge: true },
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
