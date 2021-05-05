import React, { FC, memo } from 'react';
import Box from '@components/box';
import { ActivityIndicator, ViewStyle } from 'react-native';

const Loading: FC<{ loading: boolean; style?: ViewStyle }> = ({
  loading,
  style,
}) => {
  return loading ? (
    <Box
      position={'absolute'}
      left={0}
      top={0}
      right={0}
      bottom={0}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'rgba(225, 225, 225, 0.7)'}
      {...style}>
      <ActivityIndicator size={'large'} color={'#000'} />
    </Box>
  ) : (
    <></>
  );
};

export default memo(Loading);
