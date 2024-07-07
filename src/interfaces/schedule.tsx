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
