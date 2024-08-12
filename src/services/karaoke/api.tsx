import { APIBaseResponse } from '@interfaces/api'
import { ISubmitBookingKaraokePayload } from '@interfaces/karaoke'
import { API_MASTER } from '@utils/environment'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiSubmitBookingKaraoke (payload: ISubmitBookingKaraokePayload): Promise<APIBaseResponse> {
  // const response: APIBaseResponse = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.post<undefined, APIBaseResponse>('/room/karaoke/submitBooking', payload)
}
