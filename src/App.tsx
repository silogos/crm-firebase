import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from '~/navigations';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;
