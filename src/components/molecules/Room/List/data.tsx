import bannerScheduleRoom from '@assets/images/bannerScheduleRoom.png'
import { Room, RoomType } from '@interfaces/room'

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
    isAvailabel: true,
  },
  {
    id: 1,
    capacity: 2,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room - 102',
    type: roomTypes[0],
    isAvailabel: true,
  },
  {
    id: 2,
    capacity: 10,
    banner: bannerScheduleRoom.src,
    name: 'Ballroom Lantai 7 - 101',
    type: roomTypes[1],
    isAvailabel: true,
  },
  {
    id: 3,
    capacity: 2,
    banner: bannerScheduleRoom.src,
    name: 'Karaoke - 101',
    type: roomTypes[2],
    isAvailabel: false,
  },
  {
    id: 4,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 5,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 6,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 7,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 8,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 9,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
  {
    id: 10,
    capacity: 7,
    banner: bannerScheduleRoom.src,
    name: 'Meeting Room 2 - 101',
    type: roomTypes[3],
    isAvailabel: true,
  },
]
