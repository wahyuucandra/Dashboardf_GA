import { IBookingTime } from '@interfaces/time'
import { TimeInput } from '@interfaces/time-input'

export const handleFetchTimesInDay = (availableTimes?: IBookingTime[]) => {
  const date = new Date()

  const times: TimeInput[] = []

  const handleMapAvailabelTime = (timeStart: string) => {
    if (!availableTimes?.length) return true

    const finded = availableTimes?.find(val => val.timeStart == timeStart)

    return finded && finded?.stockAvailability > 0 ? true : false
  }

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
      availabel: handleMapAvailabelTime(startString),
      startTime: start,
      endTime: end,
      startText: `${startString}`,
      endText: `${endString}`,
    })
  }

  return times
}
