export interface DateInput {
  day: number
  date: Date
  dateNumber: number
  include: boolean
  now: boolean
}

export const defaultValue = () => {
  const dateData = new Date()

  return {
    start: {
      date: new Date(Date.now()),
      dateNumber: 5,
      day: 5,
      include: true,
      now: false,
    },
    end: {
      date: new Date(dateData.getFullYear(), dateData.getMonth() + 1, dateData.getDate() + 4),
      dateNumber: 9,
      day: 2,
      include: true,
      now: false,
    },
  }
}
