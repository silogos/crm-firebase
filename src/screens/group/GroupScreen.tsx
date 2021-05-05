import React, { FC } from 'react';
import { Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Fontisto';
import config from '~/configs/config';
import Box from '@components/box';
import FloatingButton from '@components/floating-button';
import Loading from '@components/loading';
import useGroup from './useGroup';
import GroupStyle, { BOX_COLUMN, BOX_MARGIN, BOX_WIDTH } from './GroupStyle';

const GroupScreen: FC = () => {
  const {
    loading,
    parentGroup,
    groups,
    addGroup,
    browseGroup,
    browseClient,
  } = useGroup();

  return (
    <SafeAreaView style={GroupStyle.container}>
      <Box
        height={180}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={'#0c7e93'}
        elevation={2}>
        <Text style={GroupStyle.title}>
          {`Group ${parentGroup.key}\n(${parentGroup.name})`}
        </Text>
      </Box>
      <FlatList
        style={GroupStyle.list}
        numColumns={BOX_COLUMN}
        data={groups}
        renderItem={({ item: group }) => (
          <Box
            width={BOX_WIDTH}
            height={120}
            elevation={2}
            backgroundColor={'#FFF'}
            marginLeft={BOX_MARGIN}
            marginBottom={BOX_MARGIN}
            borderRadius={6}
            overflow={'hidden'}
            activeOpacity={0.9}>
            <Box
              flex={1}
              padding={5}
              justifyContent={'center'}
              alignItems={'center'}
              disabled={group.sequence >= config.maxGroupLevel}
              onPress={() => browseGroup(group)}>
              <Text
                style={
                  GroupStyle.listTitle
                }>{`${group.key}\n(${group.name})`}</Text>
            </Box>
            <Box
              height={32}
              flexDirection={'row'}
              borderTopWidth={1}
              borderTopColor={'#CCC'}>
              <Box
                flex={1}
                paddingHorizontal={5}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                onPress={() => browseClient(group)}>
                <Icon name="persons" size={14} color="#000" />
              </Box>
              <Box width={1} backgroundColor={'#CCC'} />
              <Box
                flex={1}
                paddingHorizontal={5}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                onPress={() => {}}>
                <Icon name="info" size={14} color="#000" />
              </Box>
            </Box>
          </Box>
        )}
      />
      {parentGroup.sequence < config.maxGroupLevel ? (
        <FloatingButton onPress={() => addGroup()} />
      ) : (
        <></>
      )}
      <Loading loading={loading} />
    </SafeAreaView>
  );
};

export default GroupScreen;
