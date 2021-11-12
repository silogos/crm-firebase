import { useCallback, useEffect, useState } from 'react';

function useCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return {
    date,
    selectedDate,
    setSelectedDate,
  };
}

export default useCalendar;
