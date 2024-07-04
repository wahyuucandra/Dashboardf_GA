import BannerRoomDetail from '@assets/images/BannerRoomDetail.png'
import { Photo } from '@interfaces/photo'
import { RoomDetail } from '@interfaces/room'

export const room: RoomDetail = {
  id: 0,
  name: 'Lantai 2 - 201',
  desc: 'Lorem ipsum dolor sir amet dolor dolor lur sir amet Lorem ipsum dolor sir amet dolor dolor lur sir amet Lorem ipsum dolor sir amet dolor dolor lur sir amet. Lorem ipsum dolor sir amet doloR, Lorem ipsum dolor sir amet dolor dol.',
  facility: ['Kursi', 'Spidol', 'Penghapus papan tulis', 'Screen led TV', 'Papan tulis'],
  terms: [
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir',
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir v2',
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir v3',
  ],
}

export const photos: Photo[] = [
  {
    id: 1,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 1',
  },
  {
    id: 2,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 2',
  },
  {
    id: 3,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 3',
  },
  {
    id: 4,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 4',
  },
  {
    id: 5,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 5',
  },
  {
    id: 6,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 6',
  },
  {
    id: 7,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 7',
  },
  {
    id: 8,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 8',
  },
  {
    id: 9,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 9',
  },
  {
    id: 10,
    image: BannerRoomDetail.src,
    desc: 'lorem ipsum dolor sit amet 10',
  },
]
