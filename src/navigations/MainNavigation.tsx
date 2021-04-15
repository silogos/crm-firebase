import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/home';

const Stack = createStackNavigator();

const MainNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
