import React, { FC, memo, useEffect } from 'react';
import { Text, ScrollView, FlatList, Dimensions, Image } from 'react-native';
import Box from '@components/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: FC = () => {
  const navigation = useNavigation();
  const user = firebase.auth().currentUser;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const BOX_COLUMN = 2;
  const BOX_MARGIN = 15;
  const BOX_WIDTH = (SCREEN_WIDTH - BOX_MARGIN * (BOX_COLUMN + 1)) / BOX_COLUMN;

  const MENUS = [
    { key: 'calendar', name: 'Calendar', icon: 'calendar' },
    { key: 'Group', name: 'Groups', icon: 'persons' },
    { key: 'messages', name: 'Messages', icon: 'messenger' },
    { key: 'attedances', name: 'Attedances', icon: 'check' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        position={'absolute'}
        height={180}
        left={0}
        top={0}
        right={0}
        backgroundColor={'#0c7e93'}
      />
      <ScrollView style={{ flex: 1 }}>
        <Box elevation={1}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            paddingHorizontal={21}
            height={140}>
            <Box
              width={64}
              height={64}
              borderRadius={32}
              backgroundColor={'#FFF'}
              marginRight={14}
              overflow={'hidden'}>
              <Image
                source={{ uri: user?.photoURL }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'contain',
                }}
              />
            </Box>
            <Box flex={1}>
              <Text style={{ fontSize: 21, color: '#FFF' }} numberOfLines={1}>
                {user?.displayName}
              </Text>
              <Text style={{ fontSize: 14, color: '#FFF' }} numberOfLines={1}>
                {user?.email}
              </Text>
            </Box>
          </Box>

          <Box
            height={70}
            elevation={1}
            marginHorizontal={15}
            backgroundColor={'#FFF'}
            borderRadius={6}
            activeOpacity={0.9}>
            <Box
              flex={1}
              flexDirection={'row'}
              justifyContent={'space-around'}
              alignItems={'center'}>
              {MENUS.map(menu => (
                <Box
                  key={'Menu-' + menu.key}
                  alignItems={'center'}
                  onPress={() => navigation.navigate(menu.key)}>
                  <Icon name={menu.icon} size={24} color="#000" />
                  <Text
                    style={{ fontSize: 10, marginTop: 5, color: '#000' }}
                    numberOfLines={1}>
                    {menu.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box height={70} />
          {/* <FlatList
            numColumns={BOX_COLUMN}
            data={[
              { key: 1, title: 'Master Data' },
              { key: 2, title: 'Presensi' },
              { key: 3, title: 'Anggota' },
            ]}
            renderItem={({ item, index }) => (
              <Box
                width={BOX_WIDTH}
                elevation={2}
                backgroundColor={'#FFF'}
                marginLeft={BOX_MARGIN}
                marginBottom={BOX_MARGIN}
                paddingVertical={50}
                borderRadius={6}
                justifyContent={'center'}
                alignItems={'center'}
                onPress={() => {}}
                activeOpacity={0.9}>
                <Text>{item.title}</Text>
              </Box>
            )}
          /> */}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
