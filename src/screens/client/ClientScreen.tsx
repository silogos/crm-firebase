import React, { FC } from 'react';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import Box from '@components/box';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClienHeader from './components/client-header';
import ClientItem from './components/client-item';
import useClient from './useClient';
import FloatingButton from '~/components/floating-button';
import ClientStyle from './ClientStyle';

const ClientScreen: FC = () => {
  const { loading, group, clients, addClient } = useClient();

  return (
    <SafeAreaView style={ClientStyle.container}>
      <Box
        height={180}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={'#0c7e93'}
        elevation={2}>
        <Text style={ClientStyle.title}>
          {`Client ${group.key}\n(${group.name})`}
        </Text>
      </Box>
      <FlatList
        data={clients}
        ListHeaderComponent={() => <ClienHeader totalClient={clients.length} />}
        ListFooterComponent={() =>
          loading ? (
            <Box justifyContent={'center'} paddingVertical={15}>
              <ActivityIndicator size={'large'} color={'#000'} />
            </Box>
          ) : (
            <></>
          )
        }
        renderItem={({ item }) => <ClientItem {...item} />}
        ItemSeparatorComponent={() => (
          <Box height={1} backgroundColor={'#CCC'} />
        )}
      />
      <FloatingButton onPress={() => addClient()} />
    </SafeAreaView>
  );
};

export default ClientScreen;
