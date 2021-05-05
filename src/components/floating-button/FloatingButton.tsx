import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import Box from '@components/box';

const FloatingButton: FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <Box
      position={'absolute'}
      right={15}
      bottom={15}
      width={64}
      height={64}
      borderRadius={64}
      justifyContent={'center'}
      alignItems={'center'}
      elevation={10}
      backgroundColor={'#0c7e93'}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={{ fontSize: 32, color: '#FFF', textAlign: 'center' }}>
        +
      </Text>
    </Box>
  );
};

export default memo(FloatingButton);
