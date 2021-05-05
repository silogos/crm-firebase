import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import Box from '@components/box';
import ClientHeaderStyle from './ClientHeaderStyle';

interface ClientHeaderInterface {
  totalClient?: number;
  totalEvent?: number;
}

const ClientHeader: FC<ClientHeaderInterface> = ({
  totalClient = 0,
  totalEvent = 0,
}) => {
  return (
    <Box backgroundColor={'#0c7e93'} elevation={1}>
      <Box
        height={70}
        marginVertical={15}
        flexDirection={'row'}
        justifyContent={'space-around'}
        marginHorizontal={7.5}>
        <Box
          flex={1}
          marginHorizontal={7.5}
          borderRadius={3}
          backgroundColor={'#FFF'}
          padding={10}>
          <Text numberOfLines={1} style={ClientHeaderStyle.title}>
            Total Client:
          </Text>
          <Text numberOfLines={1} style={ClientHeaderStyle.value}>
            {totalClient}
          </Text>
        </Box>
        <Box
          flex={1}
          marginHorizontal={7.5}
          borderRadius={3}
          backgroundColor={'#FFF'}
          padding={10}>
          <Text numberOfLines={1} style={ClientHeaderStyle.title}>
            Acara Perbulan:
          </Text>
          <Text numberOfLines={1} style={ClientHeaderStyle.value}>
            {totalEvent}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ClientHeader);
