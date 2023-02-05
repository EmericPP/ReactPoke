/*
The data for the implementation of the date picker are deliberately simplistic because
I didn't want to spend time on it. For example, every month has 31 days.
*/
export const HEADER_ELEMENTS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export const DAYS = Array.from(Array(new Date(2023, 1, 0).getDate()), (a, i) => `${i + 1}`)

export const PREVIOUS_MONTH_DAYS = ['30', '31']

export const MONTHS = [
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
]

export const HOURS = [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
]
