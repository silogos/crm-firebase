import React, { FC, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/home';
import LoginScreen from '~/screens/login';
import { UserContext } from '~/contexts/UserContext';
import GroupScreen from '~/screens/group';
import GroupAddScreen from '~/screens/group/add';
import ClientScreen from '~/screens/client';
import ClientAddScreen from '~/screens/client/add';

const Stack = createStackNavigator();
const MainNavigation: FC = () => {
  const userContext = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator mode={'card'}>
        {userContext.user ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={GroupScreen}
              options={{ headerShown: false }}
              initialParams={{
                parentGroup: {
                  key: 'HASMI',
                  name: 'Hasmi',
                  sequence: 0,
                },
              }}
            />
            <Stack.Screen
              name="GroupAdd"
              component={GroupAddScreen}
              options={{
                title: 'Add Group',
                headerStyle: {
                  borderBottomWidth: 1,
                  borderBottomColor: '#CCC',
                },
              }}
            />
            <Stack.Screen
              name="Client"
              component={ClientScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClientAdd"
              component={ClientAddScreen}
              options={{
                title: 'Add Client',
                headerStyle: {
                  borderBottomWidth: 1,
                  borderBottomColor: '#CCC',
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
