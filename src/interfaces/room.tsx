import { IPaginationParam } from './api'

// Room
export interface IRoomBookingTime {
  time: string
  timeStart: string
  timeEnd: string
  stockAvailability: number
}

export interface IRoomListParams extends IPaginationParam {
  kategoriMenu: string
  location: string
  timeOpen: number
  timeClose: number
  flagACCBerijalan: string
  kapasitas: number
}

export interface IRoomDetailParams {
  roomId: string
}

export interface ISubmitBookingRoomPayload {
  area: string
  cdSp: string
  tipeBooking: string
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  kapasitas: number
  bookingMeetingRoom: string
  deskripsi: string
  itemId: string
}

export interface IRoom {
  idRoom: string
  pathImage: string
  deskripsi: string
  fasilitas: string
  termsCondition: string
}
// Room

// Ballroom
export interface IBallroomListParams extends IPaginationParam {
  search: string
}

export interface IBallroomDetailParams {
  noIdRoom: string
}

export interface ISubmitBookingBallroomPayload {
  area: string
  cdSp: string
  tipeBooking: string
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  kapasitas: number
  bookingMeetingRoom: string
  deskripsi: string
  itemId: string
  assets: any[]
}

export interface IBallroomList {
  noIdAsset: number
  assetName: string
  stock: number
}

export interface IBallroomDetail {
  lantaiRuangan: string
  noRoomId: string
  deskripsi: string
  fasilitas: string[]
  termsCondition: string
  thumbnailUrl: string
}
// Ballroom

export interface Room {
  id: number
  capacity: number
  name: string
  banner: string
  type: RoomType
  isAvailabel: boolean
}

export interface Room {
  id: number
  capacity: number
  name: string
  banner: string
  type: RoomType
  isAvailabel: boolean
}

export interface RoomDetail {
  id: number
  name: string
  desc: string
  facility: string[]
  terms: string[]
}

export interface RoomType {
  id: string
  text: string
}

export interface BallroomFacility {
  id: number
  facility: string
  qty: number
}
