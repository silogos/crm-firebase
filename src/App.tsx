import 'react-native-gesture-handler';
import React, { FC, useCallback, useEffect, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import MainNavigation from './navigations/';
import { UserContext } from './contexts/UserContext';
import { UserInterface } from './@types/UserInterface';
import Loading from './components/loading';
import UserService from './services/UserService';

const App: FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<UserInterface | null>(null);
  const userService = new UserService();

  const getUserInfo = useCallback(async (userData: FirebaseAuthTypes.User) => {
    try {
      const getUserInfoService = await userService.getUserInfo(userData.uid);
      if (getUserInfoService.exists) {
        setUser(getUserInfoService.data() as UserInterface);
      } else {
        const userInfo: UserInterface = {
          email: userData.email,
          name: userData.displayName,
          metadata: {
            creationTime: userData.metadata.creationTime,
            lastSignInTime: userData.metadata.lastSignInTime,
          },
        };

        await userService.setUserInfo(userData.uid, userInfo);
        setUser(userInfo);
      }
    } catch (error) {
      console.log('App', { error });
    }
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async userData => {
      console.log({ userData });
      if (userData) {
        await getUserInfo(userData);
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber; // unsubscribe on unmount
  }, [getUserInfo]);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <ApplicationProvider {...eva} theme={eva.light}>
          {initializing ? <Loading loading={true} /> : <MainNavigation />}
        </ApplicationProvider>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
