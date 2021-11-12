import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Box from '@components/box';
import useCalendar from './useCalendar';
import CalendarStyle from './CalendarStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '~/components/calendar';

const CalendarScreen: FC = () => {
  const { selectedDate, setSelectedDate, navigateMonth } = useCalendar();

  return (
    <SafeAreaView style={CalendarStyle.container}>
      <Calendar
        value={new Date()}
        onDatePick={date => console.log({ onDatePick: date })}
        onMonthChange={date => console.log({ onMonthChange: date })}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;
