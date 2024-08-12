import { IKaraokeScheduleFormEntity } from '@interfaces/karaoke'
import { IRoomListParams } from '@interfaces/room'

export function setKaraokeScheduleForm(scheduleForm: IKaraokeScheduleFormEntity) {
  return {
    type: '@APP/SET_KARAOKE_SCHEDULE_FORM',
    payload: scheduleForm,
  }
}

export function deleteKaraokeScheduleForm() {
  return {
    type: '@APP/DELETE_KARAOKE_SCHEDULE_FORM',
    payload: '',
  }
}

export function setKaraokeListParams(params: IRoomListParams) {
  return {
    type: '@APP/SET_KARAOKE_LIST_PARAMS',
    payload: params,
  }
}

export function deleteKaraokeListParams() {
  return {
    type: '@APP/DELETE_KARAOKE_LIST_PARAMS',
    payload: '',
  }
}
