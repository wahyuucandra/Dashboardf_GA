import { IPaginationParams } from './api'
import { DateInput } from './date-input'
import { TimeInput } from './time-input'

export interface IKaraokeScheduleForm {
  date: { start: DateInput; end: DateInput }
  time: { start: TimeInput; end: TimeInput }
  reason: string
}

export const DefaulKaraokeScheduleForm = {
  date: undefined,
  time: undefined,
  reason: undefined,
}

export interface ISubmitBookingKaraokePayload {
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  bookingMeetingRoom: number
  keperluan: string
}

export interface IKaraokeScheduleFormEntity {
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  keperluan: string
}

export interface IRoomListParams extends IPaginationParams {
  flagACCBerijalan: string
  kategoriMenu: string
  location: string
  timeOpen: string
  timeClose: string
  startBookingDate: string
  endBookingDate: string
  kapasitas: number
}
