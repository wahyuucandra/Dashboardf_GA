import { API_MASTER } from '@utils/environment'
import { APIBaseResponse } from '@interfaces/api'
import httpRequest from '@utils/helper'
import {
  IBallroomDetail,
  IBallroomDetailParams,
  IBallroomList,
  IBallroomListParams,
  IRoomBookingTime,
  IRoom,
  IRoomDetailParams,
  IRoomListParams,
  ISubmitBookingBallroomPayload,
  ISubmitBookingRoomPayload,
} from '@interfaces/room'

const api = httpRequest(API_MASTER)

export function apiGetListRoom(params: IRoomListParams): Promise<APIBaseResponse<IRoom[]>> {
  const response: APIBaseResponse<IRoom[]> = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: [
      {
        idRoom: '1',
        pathImage: '',
        deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
        fasilitas: 'Kursi, Spidol, Papan tulis, TV',
        termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
      },
      {
        idRoom: '2',
        pathImage: '',
        deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
        fasilitas: 'Kursi, Spidol, Papan tulis, TV',
        termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
      },
    ],
    pagination: {
      totalRecords: 2,
      currentPage: 1,
      totalPage: 1,
      nextPage: null,
      prevPage: null,
    },
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.get<IRoom[], APIBaseResponse<IRoom[]>>('/room', { params })
}

export function apiGetDetailRoom(params: IRoomDetailParams): Promise<APIBaseResponse<IRoom>> {
  const response: APIBaseResponse<IRoom> = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: {
      idRoom: '1',
      pathImage: '',
      deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
      fasilitas: 'Kursi, Spidol, Papan tulis, TV',
      termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
    },
    pagination: {
      totalRecords: 2,
      currentPage: 1,
      totalPage: 1,
      nextPage: null,
      prevPage: null,
    },
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.get<IRoom, APIBaseResponse<IRoom>>('/room/detail', { params })
}

export function apiSubmitBookingRoom(payload: ISubmitBookingRoomPayload): Promise<APIBaseResponse> {
  const response: APIBaseResponse = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.post<undefined, APIBaseResponse>('/room/submitBooking', payload)
}

export function apiGetRoomBookingTime(): Promise<APIBaseResponse<IRoomBookingTime[]>> {
  const response: APIBaseResponse<IRoomBookingTime[]> = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: [
      {
        time: '08:30 - 08:30',
        timeStart: '08:30',
        timeEnd: '08:30',
        stockAvailability: 2,
      },
      {
        time: '09:00 - 09:00',
        timeStart: '09:00',
        timeEnd: '09:00',
        stockAvailability: 2,
      },
      {
        time: '09:30 - 09:30',
        timeStart: '09:30',
        timeEnd: '09:30',
        stockAvailability: 2,
      },
      {
        time: '10:00 - 10:00',
        timeStart: '10:00',
        timeEnd: '10:00',
        stockAvailability: 2,
      },
    ],
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.get<IRoomBookingTime[], APIBaseResponse<IRoomBookingTime[]>>('/room/bookingTime')
}

export function apiGetListBallroomAsset(params: IBallroomListParams): Promise<APIBaseResponse<IBallroomList[]>> {
  const response: APIBaseResponse<IBallroomList[]> = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: [
      {
        noIdAsset: 1,
        assetName: 'Kursi',
        stock: 1,
      },
    ],
    pagination: {
      totalRecords: 1,
      currentPage: 1,
      totalPage: 1,
      nextPage: null,
      prevPage: null,
    },
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.get<IBallroomList[], APIBaseResponse<IBallroomList[]>>('/room/ballroom/asset/list', { params })
}

export function apiGetBallroomDetail(params: IBallroomDetailParams): Promise<APIBaseResponse<IBallroomDetail>> {
  const response: APIBaseResponse<IBallroomDetail> = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
    data: {
      lantaiRuangan: '1',
      noRoomId: '101',
      deskripsi: 'Meeting room pada kantor ACC TB Simatupang dengan kapasitas 6 orang',
      fasilitas: ['Kursi', 'Spidol', 'Papan tulis', 'TV'],
      termsCondition: 'Wajib menghubungi CS 1 Jam Sebelumnya',
      thumbnailUrl: '',
    },
    pagination: {
      totalRecords: 2,
      currentPage: 1,
      totalPage: 1,
      nextPage: null,
      prevPage: null,
    },
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.get<IBallroomDetail, APIBaseResponse<IBallroomDetail>>('/room/ballroom/detail', { params })
}

export function apiSubmitBookingBallroom(payload: ISubmitBookingBallroomPayload): Promise<APIBaseResponse> {
  const response: APIBaseResponse = {
    reqId: 'a',
    error: null,
    message: 'Berhasil',
    status: 'T',
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })

  return api.post<undefined, APIBaseResponse>('/room/ballroom/submitBooking', payload)
}
