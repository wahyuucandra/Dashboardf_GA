import { DateInput } from '@interfaces/date-input'

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

export const handleFetchDaysInMonth = (monthInput: number, yearInput: number) => {
  let date = new Date(yearInput, monthInput, 1)
  let days: DateInput[] = []
  const currDate = new Date()

  while (date.getMonth() === monthInput) {
    days.push({
      date,
      dateNumber: date.getDate(),
      day: date.getDay(),
      include: true,
      now: date.toDateString() === currDate.toDateString(),
    })
    date = new Date(yearInput, monthInput, date.getDate() + 1)
  }

  if (days[0]?.day != 1) {
    const prev = days[0]?.day
    for (let index = 1; index < prev; index++) {
      date = new Date(yearInput, monthInput, 1 - index)
      days?.unshift({
        date: date,
        dateNumber: date.getDate(),
        day: date.getDay(),
        include: false,
        now: date.toDateString() === currDate.toDateString(),
      })
    }
  }

  if (days?.length > 35) {
    days = days.slice(-(days?.length - 35))
  }

  if (days?.length < 35) {
    const lastDate: DateInput = days[days?.length - 1]
    const lastDateCounter = 35 - days?.length

    for (let index = 1; index <= lastDateCounter; index++) {
      date = new Date(yearInput, monthInput, lastDate?.date?.getDate() + index)
      days?.push({
        date,
        dateNumber: date.getDate(),
        day: date.getDay(),
        include: false,
        now: date.toDateString() === currDate.toDateString(),
      })
    }
  }

  return days
}
