import { DateInput } from './date-input'
import { TimeInput } from './time-input'

export interface ScheduleForm {
  date: { start: DateInput | undefined; end: DateInput | undefined } | undefined
  time: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  capacity: number | undefined
  reason: string | undefined
}

export const DefaulScheduleForm = {
  date: undefined,
  time: undefined,
  capacity: undefined,
  reason: undefined,
}

export interface VehicleScheduleForm {
  withDriver: boolean | undefined
  plateType: { odd: boolean | undefined; even: boolean | undefined } | undefined
  date: { start: DateInput | undefined; end: DateInput | undefined } | undefined
  time: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  capacity: number | undefined
  reason: string | undefined
}

export const DefaulVehicleScheduleForm = {
  withDriver: undefined,
  plateType: undefined,
  date: undefined,
  time: undefined,
  capacity: undefined,
  reason: undefined,
}

export interface AssetScheduleForm {
  date: { start: DateInput | undefined; end: DateInput | undefined } | undefined
  time: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  reason: string | undefined
}

export const DefaulAssetScheduleForm = {
  date: undefined,
  time: undefined,
  reason: undefined,
}

export interface ManpowerScheduleForm {
  gender: string | undefined
  date: { start: DateInput | undefined; end: DateInput | undefined } | undefined
  time: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined
  manpower: number | undefined
  reason: string | undefined
}

export const DefaulManpowerScheduleForm: ManpowerScheduleForm = {
  gender: undefined,
  date: undefined,
  time: undefined,
  reason: undefined,
  manpower: undefined,
}

export interface AcceptTermForm {
  accept: boolean | undefined
}

export const DefaulAcceptTermForm = {
  accept: undefined,
}

export interface VehicleOrderForm {
  fileForm: File | undefined
}

export const DefaulVehicleOrderForm = {
  fileForm: undefined,
}
