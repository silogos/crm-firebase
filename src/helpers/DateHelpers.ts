export const WEEKS = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

export const getStartMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getEndMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, -1);
};

export const getFisrtWeek = (date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay(),
  );
};

export const getLastWeek = (date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay() + 6,
  );
};

export const getDatesOfMonth = (date: Date) => {
  const startMonth = getStartMonth(date);
  const startDate = getFisrtWeek(startMonth);
  const totalDateofMonth = 42;
  const dates: Date[] = [];
  for (let index = 0; index < totalDateofMonth; index++) {
    dates.push(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + index,
      ),
    );
  }

  return dates;
};

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isSameMonth = (dateA: Date, dateB: Date) => {
  return dateA.getMonth() == dateB.getMonth();
};
