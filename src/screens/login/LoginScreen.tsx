import React, { FC } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Box from '@components/box';
import Icon from 'react-native-vector-icons/Fontisto';
import useLoginScreen from './useLoginScreen';
import TextInputLabel from '~/components/text-input-label';

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
        elevation={1}
        height={250}
        backgroundColor={'#0c7e93'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box
          elevation={2}
          justifyContent={'center'}
          alignItems={'center'}
          width={100}
          height={100}
          borderRadius={100}
          backgroundColor={'#FFF'}>
          <Icon name={'person'} size={50} color="#0c7e93" />
        </Box>
      </Box>
      <Box padding={30}>
        <TextInputLabel
          label={'Username'}
          placeholder={'Username'}
          wrapperStyle={{ marginBottom: 15 }}
          // style={ClientAddStyle.textInput}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInputLabel
          label={'Password'}
          placeholder={'Password'}
          wrapperStyle={{ marginBottom: 15 }}
          // wrapperStyle={ClientAddStyle.lastNameWrapper}
          // style={ClientAddStyle.textInput}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Submit" color="#00a400" onPress={login} />
      </Box>
    </ScrollView>
  );
};

export default LoginScreen;
