import BannerCar from '@assets/images/BannerCar.png'
import BannerCar2 from '@assets/images/BannerCar2.png'

import { Photo } from '@interfaces/photo'
import { VehicleDetail } from '@interfaces/vehicle'

export const vehicle: VehicleDetail = {
  id: 0,
  name: 'Toyota Innova Reborn 2022',
  capacity: 6,
  type: 'Manual',
  plateType: 'Ganjil',
  fuel: 'Bensin',
  terms: [
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir',
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir v2',
    'Lorem ipsum dolor sir amet lorem ipsum dolor sir v3',
  ],
}

export const photos: Photo[] = [
  {
    id: 1,
    image: BannerCar.src,
    desc: 'lorem ipsum dolor sit amet 1',
  },
  {
    id: 2,
    image: BannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 2',
  },
  {
    id: 3,
    image: BannerCar.src,
    desc: 'lorem ipsum dolor sit amet 3',
  },
  {
    id: 4,
    image: BannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 4',
  },
  {
    id: 5,
    image: BannerCar.src,
    desc: 'lorem ipsum dolor sit amet 5',
  },
  {
    id: 6,
    image: BannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 6',
  },
  {
    id: 7,
    image: BannerCar.src,
    desc: 'lorem ipsum dolor sit amet 7',
  },
  {
    id: 8,
    image: BannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 8',
  },
  {
    id: 9,
    image: BannerCar.src,
    desc: 'lorem ipsum dolor sit amet 9',
  },
  {
    id: 10,
    image: BannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 10',
  },
]
