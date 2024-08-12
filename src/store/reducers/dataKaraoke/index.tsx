import { IKaraokeScheduleFormEntity } from '@interfaces/karaoke'

export interface DataKaraokeInitialState {
  scheduleForm: IKaraokeScheduleFormEntity | undefined
}

const initialState: DataKaraokeInitialState = {
  scheduleForm: undefined,
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

export const dataKaraoke = (state: DataKaraokeInitialState = initialState, action: any) => {
  switch (action.type) {
    case '@APP/SET_KARAOKE_SCHEDULE_FORM':
      return {
        ...state,
        scheduleForm: action.payload,
      }
    case '@APP/DELETE_KARAOKE_SCHEDULE_FORM':
      return {
        ...state,
        scheduleForm: undefined,
      }
  }
  return state
}
