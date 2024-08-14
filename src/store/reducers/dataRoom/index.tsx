import { IRoomListParams, IRoomScheduleFormEntity } from '@interfaces/room'

export interface DataRoomInitialState {
  scheduleForm: IRoomScheduleFormEntity | undefined
  roomListParams: IRoomListParams | undefined
}

const initialState: DataRoomInitialState = {
  scheduleForm: undefined,
  roomListParams: undefined,
}

// const initialStateDummy: DataRoomInitialState = {
//   scheduleForm: {
//     capacity: 6,
//     reason: 'lorem ipsum dolor sit amet',
//   },
//   roomListParams: {
//     flagACCBerijalan: 'ACC',
//     kategoriMenu: 'Meeting Room',
//     location: '',
//     timeOpen: '08:30:00',
//     timeClose: '10:30:00',
//     startBookingDate: '2024-08-08',
//     endBookingDate: '2024-08-10',
//     kapasitas: 3,
//   },
// }

export const dataRoom = (state: DataRoomInitialState = initialState, action: any) => {
  switch (action.type) {
    case '@APP/SET_ROOM_SCHEDULE_FORM':
      return {
        ...state,
        scheduleForm: action.payload,
      }
    case '@APP/DELETE_ROOM_SCHEDULE_FORM':
      return {
        ...state,
        scheduleForm: undefined,
      }
    case '@APP/SET_ROOM_LIST_PARAMS':
      return {
        ...state,
        roomListParams: action.payload,
      }
    case '@APP/DELETE_ROOM_LIST_PARAMS':
      return {
        ...state,
        roomListParams: undefined,
      }
  }
  return state
}
