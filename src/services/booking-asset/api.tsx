import { API_MASTER } from '@utils/environment'
import { APIBaseResponse } from '@interfaces/api'
import { IBookLocation, IBookMenu } from '@interfaces/booking-asset'
import httpRequest from '@utils/helper'

const api = httpRequest(API_MASTER)

export function apiBookLocation(): Promise<APIBaseResponse<IBookLocation[]>> {
  // const response: APIBaseResponse<IBookLocation[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       descGcm: 'BERIJALAN',
  //     },
  //     {
  //       descGcm: 'ACC',
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

  return api.get<IBookLocation[], APIBaseResponse<IBookLocation[]>>('/bookLocation')
}

export function apiBookMenu(): Promise<APIBaseResponse<IBookMenu[]>> {
  // const response: APIBaseResponse<IBookMenu[]> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: [
  //     {
  //       descGcm: 'Booking Asset',
  //     },
  //     {
  //       descGcm: 'Building Maintenance Management',
  //     },
  //     {
  //       descGcm: 'About Us',
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
  //   }, 500)
  // })

  return api.get<IBookMenu[], APIBaseResponse<IBookMenu[]>>('/bookMenu')
}
