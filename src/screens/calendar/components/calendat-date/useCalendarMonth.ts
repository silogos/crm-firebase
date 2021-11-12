import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDatesOfMonth } from '~/helpers/DateHelpers';

function useCalendarMonth(value: Date) {
  const [date, setDate] = useState(value);
  const dates = useMemo(() => getDatesOfMonth(date), [date]);

  const navigateMonth = (action: 'prev' | 'next') => {
    setDate(
      new Date(
        date.getFullYear(),
        date.getMonth() + (action === 'next' ? 1 : -1),
        1,
      ),
    );
  };

  return {
    date,
    dates,
    setDate,
    navigateMonth,
  };
}

export default useCalendarMonth;
