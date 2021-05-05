import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Box from '@components/box';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import useLoginScreen from './useLoginScreen';

const LoginScreen: FC = () => {
  const {
    username,
    password,
    loading,
    setUsername,
    setPassword,
    login,
  } = useLoginScreen();

  return (
    <ScrollView style={{ flex: 1 }}>
      <Box
        height={250}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={'red'}>
        <Box
          width={100}
          height={100}
          borderRadius={100}
          backgroundColor={'yellow'}
        />
      </Box>
      <Box padding={21}>
        <Box
          borderWidth={1}
          borderRadius={6}
          margin={2}
          marginBottom={15}
          padding={6}>
          <TextInput
            placeholder={'Username'}
            style={{ fontSize: 21 }}
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </Box>
        <Box
          borderWidth={1}
          borderRadius={6}
          margin={2}
          marginBottom={15}
          padding={6}>
          <TextInput
            placeholder={'Password'}
            style={{ fontSize: 21 }}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </Box>
        <TouchableHighlight onPress={() => login()} underlayColor={'#CCC'}>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            borderWidth={1}
            margin={2}
            padding={10}>
            <Text style={{ fontSize: 21 }}>Submit</Text>
          </Box>
        </TouchableHighlight>
      </Box>
    </ScrollView>
  );
};

export default LoginScreen;
