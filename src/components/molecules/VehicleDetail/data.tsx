import bannerCar2 from '@assets/images/bannerCar2.png'
import bannerCar from '@assets/images/bannerCar.png'

export interface DateInput {
  day: number
  date: Date
  dateNumber: number
  include: boolean
  now: boolean
}

export interface TimeInput {
  startText: string
  endText: string
  startTime: Date
  endTime: Date
  availabel: boolean
}

export interface Photo {
  id: number
  image: string
  desc: string
}

export const daysData = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
export const daysSplit = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const monthsData = [
  {
    id: 0,
    text: 'January',
  },
  {
    id: 1,
    text: 'February',
  },
  {
    id: 2,
    text: 'March',
  },
  {
    id: 3,
    text: 'April',
  },
  {
    id: 4,
    text: 'May',
  },
  {
    id: 5,
    text: 'June',
  },
  {
    id: 6,
    text: 'July',
  },
  {
    id: 7,
    text: 'August',
  },
  {
    id: 8,
    text: 'September',
  },
  {
    id: 9,
    text: 'October',
  },
  {
    id: 10,
    text: 'November',
  },
  {
    id: 11,
    text: 'December',
  },
]

export const photosData: Photo[] = [
  {
    id: 1,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 1',
  },
  {
    id: 2,
    image: bannerCar.src,
    desc: 'lorem ipsum dolor sit amet 2',
  },
  {
    id: 3,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 3',
  },
  {
    id: 4,
    image: bannerCar.src,
    desc: 'lorem ipsum dolor sit amet 4',
  },
  {
    id: 5,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 5',
  },
  {
    id: 6,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 6',
  },
  {
    id: 7,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 7',
  },
  {
    id: 8,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 8',
  },
  {
    id: 9,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 9',
  },
  {
    id: 10,
    image: bannerCar2.src,
    desc: 'lorem ipsum dolor sit amet 10',
  },
]
