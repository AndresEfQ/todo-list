import {
  differenceInCalendarDays,
  format,
  isToday,
  isTomorrow,
  isFuture,
  isPast,
} from 'date-fns';

export default function formatDate(string) {
  const date = new Date(string);
  if (isToday(date)) {
    return 'Today';
  }
  if (isTomorrow(date)) {
    return 'Tomorrow';
  }
  if (differenceInCalendarDays(date, new Date()) < 7) {
    if (isFuture(date)) {
      return `Next ${format(date, 'EEEE')}`;
    }
    if (isPast(date)) {
      return `Last ${format(date, 'EEEE')}`;
    }
  }
  return format(date, 'dd - MMMM');
}
