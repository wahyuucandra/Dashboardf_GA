'use client'

import Link from 'next/link'
import Image from 'next/image'

import bookingAsset from '@assets/images/BookingAsset.png'

import IconMeetingRoom from '@assets/icons/IconMeetingRoom'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconRoom from '@assets/icons/IconRoom'
import IconBallroom from '@assets/icons/IconBallroom'
import IconKaraoke from '@assets/icons/IconKaraoke'

export function Menu() {
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
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="px-3 pt-[200px] pb-[400px] h-screen overflow-y-auto">
        <div className="flex items-center space-x-3 mb-4">
          <IconRoom width={32} height={32}></IconRoom>
          <div>
            <div className="text-heading xs semibold-16 text-[#2C598D]">Booking Asset</div>
            <div className="text-[#809BB5] -mt-1">
              <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
              <span className="text-extra-small semibold-12">ACC HO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href={'/booking-asset/room/meeting-room/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconMeetingRoom className="mx-auto"></IconMeetingRoom>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Meeting Room</span>
          </Link>
          <Link
            href={'/booking-asset/room/ballroom/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconBallroom className="mx-auto mb-2"></IconBallroom>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Ballroom</span>
          </Link>
          <Link
            href={'/booking-asset/room/karaoke/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconKaraoke className="mx-auto mb-2"></IconKaraoke>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Karaoke</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
