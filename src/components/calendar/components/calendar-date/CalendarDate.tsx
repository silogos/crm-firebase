import React, { FC, memo } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import Box from '@components/box';
import { isToday } from '~/helpers/DateHelpers';

interface CalendarDateInterface {
  item: Date;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onDatePick: () => void;
}

const CalendarDate: FC<CalendarDateInterface> = ({
  item,
  style,
  textStyle,
  onDatePick,
}) => {
  return (
    <Box
      flex={1}
      padding={5}
      minHeight={50}
      backgroundColor={isToday(item) ? '#0c7e93' : 'transparent'}
      borderWidth={0.5}
      borderColor={'#CCC'}
      {...style}
      onPress={() => onDatePick(item)}>
      <Box padding={2} borderRadius={9999}>
        <Text
          style={[
            {
              fontSize: 12,
              color: '#CCC',
            },
            textStyle,
          ]}>
          {item.getDate().toString().padStart(2, '0')}
        </Text>
      </Box>
    </Box>
  );
};

export default memo(CalendarDate);
