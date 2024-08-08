import { APIBaseResponse } from '@interfaces/api'
import {
  IBallroomDetail,
  IBallroomDetailParams,
  IBallroomList,
  IBallroomListParams,
  IRoomList,
  IRoomDetail,
  IRoomDetailParams,
  IRoomListParams,
  ISubmitBookingBallroomPayload,
  ISubmitBookingRoomPayload,
} from '@interfaces/room'
import { IBookingTime } from '@interfaces/time'
import { API_MASTER } from '@utils/environment'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiGetListRoom(params?: IRoomListParams): Promise<APIBaseResponse<IRoomList[]>> {
  // const response: APIBaseResponse<IRoomList[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       idRoom: '1',
  //       pathImage: ['', ''],
  //       kapasitas: '6 kursi',
  //       room: 'Lantai 1 - 101',
  //     },
  //     {
  //       idRoom: '2',
  //       pathImage: ['', ''],
  //       kapasitas: '6 kursi',
  //       room: 'Lantai 1 - 102',
  //     },
  //     {
  //       idRoom: '3',
  //       pathImage: ['', ''],
  //       kapasitas: '6 kursi',
  //       room: 'Lantai 1 - 103',
  //     },
  //   ],
  //   pagination: {
  //     totalRecords: 3,
  //     currentPage: 1,
  //     totalPage: 1,
  //     nextPage: null,
  //     prevPage: null,
  //   },
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 3000)
  // })

  return api.get<IRoomList[], APIBaseResponse<IRoomList[]>>('/room', { params })
}

export function apiGetDetailRoom(params?: IRoomDetailParams): Promise<APIBaseResponse<IRoomDetail>> {
  // const response: APIBaseResponse<IRoomDetail> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: {
  //     pathImage: ['', ''],
  //     room: 'Lantai 1 - 101',
  //     dateRequest: '7 Agu - 8 Agu 2024',
  //     timeRequest: '15:00 - 18:00',
  //     deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
  //     fasilitas: ['Spidol', 'meja'],
  //     termsCondition: '',
  //   },
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IRoomDetail, APIBaseResponse<IRoomDetail>>('/room/detail', { params })
}

export function apiSubmitBookingRoom(payload: ISubmitBookingRoomPayload, idUser: string): Promise<APIBaseResponse> {
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

  const headers = {
    idUser,
  }

  return api.post<undefined, APIBaseResponse>('/room/submitBooking', payload, { headers })
}

export function apiGetRoomBookingTime(): Promise<APIBaseResponse<IBookingTime[]>> {
  // const response: APIBaseResponse<IBookingTime[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       time: '08:30 - 08:30',
  //       timeStart: '08:30',
  //       timeEnd: '08:30',
  //       stockAvailability: 15,
  //     },
  //     {
  //       time: '09:00 - 09:00',
  //       timeStart: '09:00',
  //       timeEnd: '09:00',
  //       stockAvailability: 15,
  //     },
  //     {
  //       time: '09:30 - 09:30',
  //       timeStart: '09:30',
  //       timeEnd: '09:30',
  //       stockAvailability: 15,
  //     },
  //     {
  //       time: '10:00 - 10:00',
  //       timeStart: '10:00',
  //       timeEnd: '10:00',
  //       stockAvailability: 15,
  //     },
  //   ],
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IBookingTime[], APIBaseResponse<IBookingTime[]>>('/room/bookingTime')
}

export function apiGetListBallroomAsset(params: IBallroomListParams): Promise<APIBaseResponse<IBallroomList[]>> {
  // const response: APIBaseResponse<IBallroomList[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       noIdAsset: 1,
  //       assetName: 'Kursi',
  //       stock: 1,
  //     },
  //   ],
  //   pagination: {
  //     totalRecords: 1,
  //     currentPage: 1,
  //     totalPage: 1,
  //     nextPage: null,
  //     prevPage: null,
  //   },
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IBallroomList[], APIBaseResponse<IBallroomList[]>>('/room/ballroom/asset/list', { params })
}

export function apiGetBallroomDetail(params: IBallroomDetailParams): Promise<APIBaseResponse<IBallroomDetail>> {
  // const response: APIBaseResponse<IBallroomDetail> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: {
  //     lantaiRuangan: '1',
  //     noRoomId: '101',
  //     deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
  //     fasilitas: ['Kursi', 'Spidol', 'Papan tulis', 'TV'],
  //     termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
  //     thumbnailUrl: '',
  //   },
  //   pagination: {
  //     totalRecords: 2,
  //     currentPage: 1,
  //     totalPage: 1,
  //     nextPage: null,
  //     prevPage: null,
  //   },
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IBallroomDetail, APIBaseResponse<IBallroomDetail>>('/room/ballroom/detail', { params })
}

export function apiSubmitBookingBallroom(payload: ISubmitBookingBallroomPayload): Promise<APIBaseResponse> {
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

  return api.post<undefined, APIBaseResponse>('/room/ballroom/submitBooking', payload)
}
