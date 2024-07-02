export interface Room {
  id: number
  capacity: number
  name: string
  banner: string
  type: RoomType
}

export interface RoomType {
  id: string
  text: string
}

import bannerScheduleRoom from '@assets/images/bannerScheduleRoom.png'

export const roomTypes: RoomType[] = [
  {
    id: 'meeting-room',
    text: 'Meeting Room',
  },
  {
    id: 'ballroom-lantai-7',
    text: 'Ballroom Lantai 7',
  },
  {
    id: 'Karaoke',
    text: 'Karaoke',
  },
  {
    id: 'meeting-room-2',
    text: 'Meeting Room 2',
  },
  {
    id: 'meeting-room-3',
    text: 'Meeting Room 3',
  },
]

export const roomsData: Room[] = [
  {
    id: 0,
    capacity: 10,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room - 101',
    type: roomTypes[0],
  },
  {
    id: 1,
    capacity: 2,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room - 102',
    type: roomTypes[0],
  },
  {
    id: 2,
    capacity: 10,
    banner: bannerScheduleRoom.src,
    name: 'Ballroom Lantai 7 - 101',
    type: roomTypes[1],
  },
  {
    id: 3,
    capacity: 2,
    banner: bannerScheduleRoom.src,
    name: 'Karaoke - 101',
    type: roomTypes[2],
  },
  {
    id: 4,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
  },
]
