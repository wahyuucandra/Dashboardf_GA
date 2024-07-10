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
