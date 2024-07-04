'use client'

import { RoomBannerImage, RoomDescription, RoomFacility, RoomTerms, RoomBooking } from '@components/atoms/Room'

import Link from 'next/link'
import { photos, room } from './data'

import IconChevronLeft from '@assets/icons/IconChevronLeft'

export function Detail() {
  const handleShowMoreFacility = () => {
    console.log('Show more')
  }

  return (
    <>
      <div className="relative">
        <RoomBannerImage photos={photos}></RoomBannerImage>

        <div className="fixed top-4 left-4">
          <Link
            href={'/booking-asset/room/meeting-room'}
            className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <div className="px-6 pt-[290px] h-screen">
          <RoomDescription room={room}></RoomDescription>
          <br />
          <RoomFacility room={room} onButtonClick={handleShowMoreFacility}></RoomFacility>
          <br />
          <RoomTerms room={room}></RoomTerms>
        </div>
      </div>
      <RoomBooking room={room}></RoomBooking>
    </>
  )
}
