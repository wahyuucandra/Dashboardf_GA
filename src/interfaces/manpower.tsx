import { DateInput } from './date-input'
import { TimeInput } from './time-input'

// export interface IManpowerSchedulePayload {
//   dateRequest: string
//   timeRequest: string
//   keperluan: string
//   flagAccBerijalan: string
//   kapasitas: number
//   manpower: string
//   gender: string
// }

export interface IManpowerScheduleForm {
  gender: string
  date: { start: DateInput; end: DateInput }
  time: { start: TimeInput; end: TimeInput }
  manpower: number
  reason: string
}

export interface ISubmitManpowerResponse {
  noIdBooking: number
  noOrder: number
  nameRequest: string
  dateRequest: string
  startBookingDate: string
  startBookingTime: string
  endBookingDate: string
  endBookingTime: string
  tipeBooking: string
  status: string
  keperluan: string
  kapasitas: number
  manPower: string
  gender: string
  subTipeBooking: string
}

export interface ISubmitManpowerPayload {
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  keperluan: string
  flagACCBerijalan: string
  kapasitas: number
  manpower: string
  gender: string
  subTipeBooking: string
}
