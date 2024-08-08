import { APIBaseResponse } from '@interfaces/api'
import {
  // ISubmitBookingVehiclePayload,
  // ISubmitBookingRoomPayload,
  IVehicle,
  IVehicleBookingTime,
  IVehicleDetailParams,
  IVehicleListParams,
} from '@interfaces/vehicle'
import { API_MASTER } from '@utils/environment'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiGetListRoom(params: IVehicleListParams): Promise<APIBaseResponse<IVehicle[]>> {
  // const response: APIBaseResponse<IVehicle[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       idRoom: '1',
  //       pathImage: '',
  //       deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
  //       fasilitas: 'Kursi, Spidol, Papan tulis, TV',
  //       termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
  //     },
  //     {
  //       idRoom: '2',
  //       pathImage: '',
  //       deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
  //       fasilitas: 'Kursi, Spidol, Papan tulis, TV',
  //       termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
  //     },
  //   ],
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

  return api.get<IVehicle[], APIBaseResponse<IVehicle[]>>('/room', { params })
}

export function apiGetDetailRoom(params: IVehicleDetailParams): Promise<APIBaseResponse<IVehicle>> {
  // const response: APIBaseResponse<IVehicle> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: {
  //     idRoom: '1',
  //     pathImage: '',
  //     deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
  //     fasilitas: 'Kursi, Spidol, Papan tulis, TV',
  //     termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
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

  return api.get<IVehicle, APIBaseResponse<IVehicle>>('/room/detail', { params })
}

// export function apiSubmitBookingRoom(payload: ISubmitBookingRoomPayload): Promise<APIBaseResponse> {
//   // const response: APIBaseResponse = {
//   //   reqId: 'a',
//   //   error: null,
//   //   message: 'Berhasil',
//   //   status: 'T',
//   // }

//   // return new Promise(resolve => {
//   //   setTimeout(() => {
//   //     resolve(response)
//   //   }, 500)
//   // })

//   return api.post<undefined, APIBaseResponse>('/room/submitBooking', payload)
// }

export function apiGetRoomBookingTime(): Promise<APIBaseResponse<IVehicleBookingTime[]>> {
  // const response: APIBaseResponse<IVehicleBookingTime[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       time: '08:30 - 08:30',
  //       timeStart: '08:30',
  //       timeEnd: '08:30',
  //       stockAvailability: 2,
  //     },
  //     {
  //       time: '09:00 - 09:00',
  //       timeStart: '09:00',
  //       timeEnd: '09:00',
  //       stockAvailability: 2,
  //     },
  //     {
  //       time: '09:30 - 09:30',
  //       timeStart: '09:30',
  //       timeEnd: '09:30',
  //       stockAvailability: 2,
  //     },
  //     {
  //       time: '10:00 - 10:00',
  //       timeStart: '10:00',
  //       timeEnd: '10:00',
  //       stockAvailability: 2,
  //     },
  //   ],
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IVehicleBookingTime[], APIBaseResponse<IVehicleBookingTime[]>>('/room/bookingTime')
}

// export function apiSubmitBookingBallroom(payload: ISubmitBookingBallroomPayload): Promise<APIBaseResponse> {
//   // const response: APIBaseResponse = {
//   //   reqId: 'a',
//   //   error: null,
//   //   message: 'Berhasil',
//   //   status: 'T',
//   // }

//   // return new Promise(resolve => {
//   //   setTimeout(() => {
//   //     resolve(response)
//   //   }, 500)
//   // })

//   return api.post<undefined, APIBaseResponse>('/room/ballroom/submitBooking', payload)
// }
