import BannerBallroomDetail from '@assets/images/BannerBallroomDetail.png'
import { Photo } from '@interfaces/photo'
import { RoomDetail } from '@interfaces/room'

export const room: RoomDetail = {
  id: 1,
  name: 'Grand Ballroom',
  desc: 'The Grand Ballroom is a versatile event space that can be configured to accommodate a variety of events, including weddings, conferences, banquets, and social gatherings. The ballroom features a spacious dance floor, a stage with lighting and sound system, and a catering kitchen. Restrooms are located nearby for the convenience of guests.',
  facility: [
    'Seating for up to 500 guests',
    'Stage with lighting and sound system',
    'Dance floor',
    'Catering kitchen',
    'Restrooms',
  ],
  terms: ['No smoking', 'No outside food or drink', 'Pets are not allowed'],
}

export const photos: Photo[] = [
  {
    id: 1,
    image: BannerBallroomDetail.src,
    desc: 'Empty Grand Ballroom',
  },
  {
    id: 2,
    image: BannerBallroomDetail.src,
    desc: 'Grand Ballroom set up for a wedding',
  },
  {
    id: 3,
    image: BannerBallroomDetail.src,
    desc: 'Grand Ballroom set up for a conference',
  },
  {
    id: 4,
    image: BannerBallroomDetail.src,
    desc: 'Grand Ballroom set up for a banquet',
  },
  {
    id: 5,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 5',
  },
  {
    id: 6,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 6',
  },
  {
    id: 7,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 7',
  },
  {
    id: 8,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 8',
  },
  {
    id: 9,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 9',
  },
  {
    id: 10,
    image: BannerBallroomDetail.src,
    desc: 'lorem ipsum dolor sit amet 10',
  },
]
