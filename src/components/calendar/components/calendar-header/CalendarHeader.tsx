import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Box from '@components/box';
import { MONTHS, WEEKS } from '~/helpers/DateHelpers';

interface CalendatMonthInterface {
  date: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendatMonth: FC<CalendatMonthInterface> = ({
  date,
  prevMonth,
  nextMonth,
}) => {
  return (
    <Box borderColor={'#CCC'} borderBottomWidth={1} backgroundColor={'#FFF'}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={50}
        paddingHorizontal={15}>
        <Box
          width={25}
          height={25}
          justifyContent={'center'}
          alignItems={'center'}
          borderWidth={1}
          borderColor={'#CCC'}
          onPress={() => prevMonth()}>
          <Icon name={'angle-left'} size={12} color="#CCC" />
        </Box>
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          {/* <Box
            width={25}
            height={25}
            marginRight={15}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={3}
            backgroundColor={'#CCC'}>
            <Text>{`${dateNow.getDate()}`}</Text>
          </Box> */}
          <Text>{`${MONTHS[date.getMonth()]} ${date.getFullYear()}`}</Text>
        </Box>
        <Box
          width={25}
          height={25}
          justifyContent={'center'}
          alignItems={'center'}
          borderWidth={1}
          borderColor={'#CCC'}
          onPress={() => nextMonth()}>
          <Icon name={'angle-right'} size={12} color="#CCC" />
        </Box>
      </Box>
      <Box flexDirection={'row'} paddingVertical={10}>
        {Array(7)
          .fill(1)
          .map((_, idx) => (
            <Box flex={1} justifyContent={'center'} alignItems={'center'}>
              <Text style={{ fontSize: 10, color: '#000' }}>
                {WEEKS[idx].substr(0, 3)}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default memo(CalendatMonth);
