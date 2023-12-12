export const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const currentDate = new Date().getMonth();

export const currentMonth = monthsArray.slice(currentDate);
const otherMonths = monthsArray.slice(0, currentDate);
currentMonth.push(...otherMonths);
// ----------------------------------------------------------
export const year = new Date().getFullYear();
export const years: number[] = [];

for (let i = year - 10; i <= 2033; i++) {
  years.push(i);
}
