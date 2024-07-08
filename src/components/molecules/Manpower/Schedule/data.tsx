export interface DateInput {
  day: number
  date: Date
  dateNumber: number
  include: boolean
  now: boolean
}

export interface TimeInput {
  startText: string
  endText: string
  startTime: Date
  endTime: Date
  availabel: boolean
}

export const daysData = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
export const daysSplit = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const monthsData = [
  {
    id: 0,
    text: 'January',
  },
  {
    id: 1,
    text: 'February',
  },
  {
    id: 2,
    text: 'March',
  },
  {
    id: 3,
    text: 'April',
  },
  {
    id: 4,
    text: 'May',
  },
  {
    id: 5,
    text: 'June',
  },
  {
    id: 6,
    text: 'July',
  },
  {
    id: 7,
    text: 'August',
  },
  {
    id: 8,
    text: 'September',
  },
  {
    id: 9,
    text: 'October',
  },
  {
    id: 10,
    text: 'November',
  },
  {
    id: 11,
    text: 'December',
  },
]
