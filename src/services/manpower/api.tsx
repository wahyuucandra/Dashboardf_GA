import { APIBaseResponse } from '@interfaces/api'
import { IManpowerSchedulePayload } from '@interfaces/manpower'
import { IBookingTime } from '@interfaces/time'
import { API_MASTER } from '@utils/environment'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiGetBookingTime(): Promise<APIBaseResponse<IBookingTime[]>> {
  const date = new Date()

  const times: IBookingTime[] = []

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
      time: `${startString} - ${endString}`,
      timeStart: `${startString}`,
      timeEnd: `${endString}`,
      stockAvailability: 1,
    })
  }

  const response: APIBaseResponse<IBookingTime[]> = {
    reqId: '',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: times,
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 0)
  })
}

export function apiSubmitBookingManpower(payload: IManpowerSchedulePayload): Promise<APIBaseResponse> {
  return api.post<undefined, APIBaseResponse>('/manpower/submitBooking', payload)
}
