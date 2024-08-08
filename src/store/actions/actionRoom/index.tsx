import { IRoomListParams, IRoomScheduleFormEntity } from '@interfaces/room'

export function setRoomScheduleForm(scheduleForm: IRoomScheduleFormEntity) {
  return {
    type: '@APP/SET_ROOM_SCHEDULE_FORM',
    payload: scheduleForm,
  }
}

export function deleteRoomScheduleForm() {
  return {
    type: '@APP/DELETE_ROOM_SCHEDULE_FORM',
    payload: '',
  }
}

export function setRoomListParams(params: IRoomListParams) {
  return {
    type: '@APP/SET_ROOM_LIST_PARAMS',
    payload: params,
  }
}

export function deleteRoomListParams() {
  return {
    type: '@APP/DELETE_ROOM_LIST_PARAMS',
    payload: '',
  }
}
