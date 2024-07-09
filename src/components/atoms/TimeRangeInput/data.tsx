import { TimeInput } from '@interfaces/time-input'

export const handleFetchTimesInDay = () => {
  const date = new Date()

  const times: TimeInput[] = []

  for (let minute = 7 * 60; minute < 21 * 60; minute += 30) {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 0, minute)
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 0, minute + 30)

    const startString = `${start.getHours()?.toString().length >= 2 ? start.getHours() : '0' + start.getHours()}:${
      start.getMinutes()?.toString().length >= 2 ? start.getMinutes() : '0' + start.getMinutes()
    }`
    const endString = `${end.getHours()?.toString().length >= 2 ? end.getHours() : '0' + end.getHours()}:${
      end.getMinutes()?.toString().length >= 2 ? end.getMinutes() : '0' + end.getMinutes()
    }`

    times.push({
      availabel: true,
      startTime: start,
      endTime: end,
      startText: `${startString}`,
      endText: `${endString}`,
    })
  }

  times[5].availabel = false
  times[10].availabel = false

  return times
}
