import React, { FC } from 'react';
import { Text, ScrollView, ActivityIndicator, Button } from 'react-native';
import Box from '@components/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGroupAdd from './useGroupAdd';
import TextInputLabel from '~/components/text-input-label/TextInputLabel';
import GroupAddStyle from './GroupAddStyle';

const GroupAddScreen: FC = () => {
  const {
    loading,
    errorMessage,
    parentGroup,
    code,
    name,
    setCode,
    setName,
    submit,
  } = useGroupAdd();

  return (
    <SafeAreaView style={GroupAddStyle.container}>
      <ScrollView style={GroupAddStyle.list}>
        <Box flexDirection={'row'}>
          <TextInputLabel
            label={'Parent Group Code'}
            placeholder={'Group Code'}
            wrapperStyle={GroupAddStyle.parentGroup}
            style={GroupAddStyle.parentGroupText}
            value={parentGroup.key}
            editable={false}
          />
          <TextInputLabel
            label={'Group Code'}
            placeholder={'Group Code'}
            wrapperStyle={GroupAddStyle.group}
            style={GroupAddStyle.groupText}
            value={code}
            onChangeText={text => setCode(text)}
          />
        </Box>

        <TextInputLabel
          label={'Group Name'}
          placeholder={'Group Name'}
          wrapperStyle={GroupAddStyle.groupName}
          style={GroupAddStyle.groupNameText}
          value={name}
          onChangeText={text => setName(text)}
        />

        {errorMessage && (
          <Text style={GroupAddStyle.errorMessage}>{errorMessage}</Text>
        )}

        <Button title="Submit" color="#00a400" onPress={submit} />
      </ScrollView>
      {loading ? (
        <Box
          position={'absolute'}
          left={0}
          top={0}
          right={0}
          bottom={0}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={'rgba(225, 225, 225, 0.7)'}>
          <ActivityIndicator size={'large'} color={'#000'} />
        </Box>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default GroupAddScreen;
