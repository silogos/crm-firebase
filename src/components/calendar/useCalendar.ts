import { useCallback, useEffect, useMemo, useState } from 'react';
import { getDatesOfMonth } from '~/helpers/DateHelpers';

type useCalendar = {
  value: Date;
  onDatePick?: (date: Date) => void;
  onMonthChange?: (date: Date) => void;
};

function useCalendar({ value, onDatePick, onMonthChange }: useCalendar) {
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

  const navigateMonthTo = (_date: Date) => {
    setDate(new Date(_date.getFullYear(), _date.getMonth(), 1));
  };

  const _onDatePick = (_date: Date) => {
    if (_date.getMonth() !== date.getMonth()) {
      navigateMonthTo(_date);
    }

    onDatePick && onDatePick(_date);
  };

  useEffect(() => {
    onMonthChange && onMonthChange(date);
  }, [date]);

  return {
    date,
    dates,
    setDate,
    navigateMonth,
    _onDatePick,
  };
}

export default useCalendar;
