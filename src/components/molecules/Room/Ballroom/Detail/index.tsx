'use client'

import { RoomBannerImage, RoomDescription, RoomFacility, RoomTerms, BookingBallroom } from '@components/atoms/Room'

import Link from 'next/link'
import { photos, room } from './data'

import IconChevronLeft from '@assets/icons/IconChevronLeft'

export function BallroomDetail() {
  const handleShowMoreFacility = () => {}

  return (
    <div className="relative">
      <RoomBannerImage photos={photos} />

      <div className="fixed top-4 ml-4">
        <Link
          href={'/booking-asset/room/meeting-room'}
          className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
        >
          <IconChevronLeft />
        </Link>
      </div>

      <div className="px-6 pt-[290px]">
        <RoomDescription room={room} />
        <br />
        <RoomFacility room={room} onButtonClick={handleShowMoreFacility} />
        <br />
        <RoomTerms room={room} />
      </div>

      <BookingBallroom />
    </div>
  )
}
