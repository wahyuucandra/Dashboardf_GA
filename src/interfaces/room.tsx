import { IPaginationParams } from './api'
import { DateInput } from './date-input'
import { TimeInput } from './time-input'

// Room

export interface IRoomBookingTime {
  time: string
  timeStart: string
  timeEnd: string
  stockAvailability: number
}

export interface IRoomScheduleForm {
  date: { start: DateInput; end: DateInput }
  time: { start: TimeInput; end: TimeInput }
  capacity: number
  reason: string
}

export interface IRoomScheduleFormEntity {
  capacity: number
  reason: string
}

export interface IRoomListParams extends IPaginationParams {
  flagACCBerijalan: string
  kategoriMenu: string
  location: string
  timeOpen: string
  timeClose: string
  startBookingDate: string
  endBookingDate: string
  kapasitas: number
}

export interface IRoomDetailParams {
  roomId: string
  startBookingTime: string
  endBookingTime: string
  startBookingDate: string
  endBookingDate: string
}

export interface IRoomList {
  idRoom: string
  pathImage: string[]
  room: string
  kapasitas: string
}

export interface IRoomDetail {
  pathImage: string[]
  room: string
  dateRequest: string
  timeRequest: string
  deskripsi: string
  fasilitas: string[]
  termsCondition: string
}

export interface IRoomType {
  id: string
  text: string
}

export interface ISubmitBookingRoomPayload {
  cdSp: string
  tipeBooking: string
  startBookingTime: string
  startBookingDate: string
  endBookingTime: string
  endBookingDate: string
  kapasitas: string
  bookingMeetingRoom: string
  deskripsi: string
  itemId: number
  keperluan: string
}

// Room

// Ballroom
export interface IBallroomListParams extends IPaginationParams {
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
