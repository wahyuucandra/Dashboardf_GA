'use client'

import IconBallroom from '@assets/icons/IconBallroom'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconKaraoke from '@assets/icons/IconKaraoke'
import IconMeetingRoom from '@assets/icons/IconMeetingRoom'
import IconPod from '@assets/icons/IconPod'
import IconRoom from '@assets/icons/IconRoom'
import bookingAsset from '@assets/images/BookingAsset.png'
import { deleteRoomListParams, deleteRoomScheduleForm } from '@store/actions/actionRoom'
import { RootState } from '@store/reducers'
import { store } from '@store/storage'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function Menu() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  const { dispatch } = store

  useEffect(() => {
    dispatch(deleteRoomListParams())
    dispatch(deleteRoomScheduleForm())
  }, [])

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full max-container h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 ml-4">
        <Link href={'/booking-asset'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="px-3 pt-[200px] pb-[400px] h-screen overflow-y-auto">
        <div className="flex items-center space-x-3 mb-4">
          <IconRoom className="w-10 h-10" />
          <div>
            <div className="font-semibold text-[#2C598D]">Room</div>
            <div className="text-xs text-[#809BB5]">
              <span>Pilih request yang Anda butuhkan di lokasi </span>
              <span className="font-semibold">{bookingLocation}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          {(bookingLocation === 'ACC' || bookingLocation === 'BERIJALAN') && (
            <Link
              href={'/booking-asset/room/meeting-room/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconMeetingRoom className="mx-auto"></IconMeetingRoom>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Meeting Room</span>
            </Link>
          )}

          {bookingLocation === 'ACC' && (
            <Link
              href={'/booking-asset/room/pods/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconPod className="mx-auto mb-2"></IconPod>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Pods</span>
            </Link>
          )}

          {bookingLocation === 'BERIJALAN' && (
            <Link
              href={'/booking-asset/room/ballroom/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconBallroom className="mx-auto mb-2"></IconBallroom>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Ballroom</span>
            </Link>
          )}

          {bookingLocation === 'BERIJALAN' && (
            <Link
              href={'/booking-asset/room/karaoke/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconKaraoke className="mx-auto mb-2"></IconKaraoke>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Karaoke</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
