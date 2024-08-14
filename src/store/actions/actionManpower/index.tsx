import { ISubmitManpowerResponse } from '@interfaces/manpower'

export function setManpowerSubmitResponse(response: ISubmitManpowerResponse) {
  return {
    type: '@APP/SET_MANPOWER_SUBMIT_RESPONSE',
    payload: response,
  }
}

export function deleteManpowerSubmitResponse() {
  return {
    type: '@APP/DELETE_MANPOWER_SUBMIT_RESPONSE',
    payload: '',
  }
}
