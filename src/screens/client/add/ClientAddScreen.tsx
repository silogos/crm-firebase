import React, { FC } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import Box from '@components/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import useClientAdd from './useClientAdd';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputLabel from '~/components/text-input-label/TextInputLabel';
import { GroupInterface } from '~/@types/GroupInterface';
import Loading from '~/components/loading';
import ClientAddStyle from './ClientAddStyle';

const ClientAddScreen: FC = () => {
  const parentGroup: GroupInterface = {
    key: 'JKT',
    name: 'Jakarta',
    sequence: 1,
  };
  const {
    loading,
    modal,
    errorMessage,
    firstName,
    lastName,
    email,
    phone,
    birthday,
    gender,
    address,
    GENDER_LIST,
    setModal,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setBirthday,
    setGender,
    setAddress,
    submit,
  } = useClientAdd(parentGroup);

  return (
    <SafeAreaView style={ClientAddStyle.container}>
      <ScrollView style={ClientAddStyle.list}>
        <Box flexDirection={'row'} marginBottom={10}>
          <TextInputLabel
            label={'First Name'}
            placeholder={'First Name'}
            wrapperStyle={ClientAddStyle.firstNameWrapper}
            style={ClientAddStyle.textInput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInputLabel
            label={'Last Name'}
            placeholder={'Last Name'}
            wrapperStyle={ClientAddStyle.lastNameWrapper}
            style={ClientAddStyle.textInput}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </Box>

        <TextInputLabel
          label={'Email Address'}
          placeholder={'Email Address'}
          wrapperStyle={ClientAddStyle.textInputMargin}
          style={ClientAddStyle.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInputLabel
          label={'Phone Number'}
          placeholder={'Phone Number'}
          wrapperStyle={ClientAddStyle.textInputMargin}
          style={ClientAddStyle.textInput}
          value={phone}
          onChangeText={text => setPhone(text)}
          keyboardType="phone-pad"
        />

        <TextInputLabel
          wrapperStyle={ClientAddStyle.textInputMargin}
          label={'Date of Birth'}
          editable={false}
          style={ClientAddStyle.textInput}
          placeholder={'Date of Birth'}
          value={
            birthday
              ? `${birthday.getDate()} - ${birthday.getMonth()} - ${birthday.getFullYear()}`
              : ''
          }
          textInputWrapper={{
            onPress: () => setModal('birthday'),
          }}
        />

        <Box marginBottom={10}>
          <Text style={ClientAddStyle.genderLabel}>Gender</Text>
          <Box flexDirection={'row'} flexWrap={'wrap'}>
            {GENDER_LIST.map((item, idx) => (
              <Box
                key={'GenderItem-' + idx}
                marginRight={10}
                marginBottom={10}
                flexDirection={'row'}
                alignItems={'center'}
                height={40}
                borderRadius={6}
                paddingHorizontal={11}
                borderWidth={1}
                borderColor={'#ccd0d5'}
                backgroundColor={'#f5f6f7'}
                onPress={() => setGender(item.key)}>
                <Box
                  width={10}
                  height={10}
                  borderRadius={10}
                  borderWidth={1}
                  marginRight={10}
                  justifyContent={'center'}
                  alignItems={'center'}
                  backgroundColor={'#FFF'}>
                  {item.key === gender ? (
                    <Box
                      width={4}
                      height={4}
                      borderRadius={4}
                      backgroundColor={'#000'}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
                <Text style={ClientAddStyle.genderValue}>{item.name}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <TextInputLabel
          label={'Address'}
          placeholder={'Address'}
          wrapperStyle={{
            ...ClientAddStyle.emailWrapper,
            ...ClientAddStyle.textInputMargin,
          }}
          style={ClientAddStyle.textInput}
          value={address}
          onChangeText={text => setAddress(text)}
          multiline={true}
          textInputWrapper={{ height: 'auto', maxHeight: 90 }}
        />

        {errorMessage && (
          <Text style={ClientAddStyle.errorText}>{errorMessage}</Text>
        )}

        <Button title="Submit" color="#00a400" onPress={submit} />
      </ScrollView>
      {modal === 'birthday' && (
        <DateTimePicker
          testID="dateTimePicker"
          value={birthday || new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(_, selectedDate) => setBirthday(selectedDate)}
        />
      )}
      <Loading loading={loading} />
    </SafeAreaView>
  );
};

export default ClientAddScreen;
