import React, { FC, memo } from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Box from '@components/box';
import CalendatMonthStyle from './CalendatMonthStyle';
import useCalendarMonth from './useCalendarMonth';
import { MONTHS, WEEKS } from '~/helpers/DateHelpers';

interface CalendatMonthInterface {
  value: Date;
  onDatePick?: (date: Date) => void;
}

const CalendarWeek = () => (
  <Box flexDirection={'row'} paddingVertical={10}>
    {Array(7)
      .fill()
      .map((_, idx) => (
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
          <Text style={{ fontSize: 10, color: '#000' }}>
            {WEEKS[idx].substr(0, 3)}
          </Text>
        </Box>
      ))}
  </Box>
);

const CalendatMonth: FC<CalendatMonthInterface> = ({ value, onDatePick }) => {
  const { date, dates, navigateMonth } = useCalendarMonth(value);
  let dateNow = new Date();
  let _dateNow = `${dateNow.getMonth()}-${dateNow.getDate()}-${dateNow.getFullYear()}`;
  return (
    <Box>
      <Box elevation={2} backgroundColor={'#FFF'}>
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
            onPress={() => navigateMonth('prev')}>
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
            onPress={() => navigateMonth('next')}>
            <Icon name={'angle-right'} size={12} color="#CCC" />
          </Box>
        </Box>
        <CalendarWeek />
      </Box>
      <FlatList
        keyExtractor={item =>
          'CalendarMonth-' + item.getDate() + '-' + item.getMonth()
        }
        data={dates}
        numColumns={7}
        style={{ backgroundColor: '#FFF' }}
        renderItem={({ item }) => {
          let sameMonth = item.getMonth() === date.getMonth();
          let now =
            _dateNow ===
            `${item.getMonth()}-${item.getDate()}-${item.getFullYear()}`;

          return (
            <Box
              flex={1}
              padding={5}
              minHeight={50}
              backgroundColor={now ? '#0c7e93' : 'transparent'}
              borderWidth={0.5}
              borderColor={'#CCC'}
              onPress={() => onDatePick(item)}>
              <Box padding={2} borderRadius={9999}>
                <Text
                  style={{
                    fontSize: 12,
                    color: sameMonth ? '#000' : '#CCC',
                  }}>
                  {item.getDate().toString().padStart(2, '0')}
                </Text>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default memo(CalendatMonth);
