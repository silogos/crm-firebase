import 'react-native-gesture-handler';
import React, { FC, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import MainNavigation from './navigations/';
import { UserContext } from './contexts/UserContext';

const App: FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userData => {
      setUser(userData);
      console.log({ userData });

      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <MainNavigation />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
