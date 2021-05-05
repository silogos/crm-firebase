import React, { FC, memo } from 'react';
import { Text, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Box from '@components/box';
import { ClientInterface } from '~/@types/ClientInterface';
import ClientItemStyle from './ClientItemStyle';

const ClientItem: FC<ClientInterface> = ({
  first_name,
  last_name,
  group_id,
  phone_number,
  email,
}) => {
  let aliasName = `${first_name[0] || ''}${last_name[0] || ''}`;

  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      padding={15}
      backgroundColor={'#FFF'}
      onPress={() => {}}
      activeOpacity={0.8}>
      <Box
        width={50}
        height={50}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={50}
        marginRight={15}
        backgroundColor={'#0c7e93'}>
        <Text style={ClientItemStyle.aliasName}>{aliasName}</Text>
      </Box>
      <Box flex={1} flexDirection={'row'}>
        <Box flex={1} justifyContent={'center'}>
          <Text numberOfLines={1} style={ClientItemStyle.name}>
            {`${first_name} ${last_name}`}
          </Text>
          <Text numberOfLines={2} style={ClientItemStyle.groupName}>
            {group_id}
          </Text>
        </Box>
        <Box flexDirection={'row'} alignItems={'center'}>
          {phone_number ? (
            <>
              <Box
                width={32}
                height={32}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={32}
                marginLeft={4}
                backgroundColor={'#0c7e93'}
                onPress={() => Linking.openURL('https://wa.me/' + phone_number)}
                activeOpacity={0.8}>
                <Icon name="whatsapp" size={14} color="#FFF" />
              </Box>
              <Box
                width={32}
                height={32}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={32}
                marginLeft={4}
                backgroundColor={'#0c7e93'}
                onPress={() => Linking.openURL('tel:' + phone_number)}
                activeOpacity={0.8}>
                <Icon name="phone" size={10} color="#FFF" />
              </Box>
            </>
          ) : (
            <></>
          )}
          {email ? (
            <Box
              width={32}
              height={32}
              justifyContent={'center'}
              alignItems={'center'}
              borderRadius={32}
              marginLeft={4}
              backgroundColor={'#0c7e93'}
              onPress={() => Linking.openURL('mailto:' + email)}
              activeOpacity={0.8}>
              <Icon name="email" size={16} color="#FFF" />
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ClientItem);
