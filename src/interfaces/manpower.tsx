import { DateInput } from './date-input'
import { TimeInput } from './time-input'

export interface IManpowerBookingTime {
  time: string
  timeStart: string
  timeEnd: string
  stockAvailability: number
}

export interface IManpowerSchedulePayload {
  dateRequest: string
  timeRequest: string
  keperluan: string
  flagAccBerijalan: string
  kapasitas: number
  manpower: string
  gender: string
}

export interface IManpowerScheduleForm {
  gender: string
  date: { start: DateInput; end: DateInput }
  time: { start: TimeInput; end: TimeInput }
  manpower: number
  reason: string
}
