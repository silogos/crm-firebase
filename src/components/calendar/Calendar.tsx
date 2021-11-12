import React, { FC, memo, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import Box from '@components/box';
import useCalendar from './useCalendar';
import CalendarHeader from './components/calendar-header/CalendarHeader';
import CalendarDate from './components/calendar-date';
import { isSameMonth } from '~/helpers/DateHelpers';

interface CalendarInterface {
  value: Date;
  onDatePick?: (date: Date) => void;
  onMonthChange?: (date: Date) => void;
}

const Calendar: FC<CalendarInterface> = ({
  value,
  onDatePick,
  onMonthChange,
}) => {
  const { date, dates, navigateMonth, _onDatePick } = useCalendar({
    value,
    onDatePick,
    onMonthChange,
  });

  return (
    <Box>
      <CalendarHeader
        date={date}
        prevMonth={() => navigateMonth('prev')}
        nextMonth={() => navigateMonth('next')}
      />
      <FlatList
        keyExtractor={item =>
          'CalendarMonth-' + item.getDate() + '-' + item.getMonth()
        }
        data={dates}
        numColumns={7}
        style={{ backgroundColor: '#FFF' }}
        renderItem={({ item }) => (
          <CalendarDate
            textStyle={isSameMonth(item, date) ? { color: '#000' } : {}}
            item={item}
            onDatePick={() => _onDatePick(item)}
          />
        )}
      />
    </Box>
  );
};

export default memo(Calendar);
