'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconRoom from '@assets/icons/IconRoom'
import IconPod from '@assets/icons/IconPod'
import IconMeetingRoom from '@assets/icons/IconMeetingRoom'
import bookingAsset from '@assets/images/bookingAsset.png'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Room() {
  const router = useRouter()

  return (
    <div className="relative">
      <div className="absolute top-3 left-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
        >
          <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
        </button>
      </div>

      <Image
        width={100}
        height={100}
        className="object-cover w-full h-[188px] rounded rounded-b-md"
        src={bookingAsset.src}
        alt="Booking Asset"
      />

      <div className="p-3">
        <div className="flex items-center space-x-3 mb-4">
          <IconRoom className="w-10 h-10"></IconRoom>
          <div>
            <div className="font-semibold text-[#2C598D]">Room</div>
            <div className="text-xs text-[#809BB5]">
              <span>Pilih request yang Anda butuhkan di lokasi </span>
              <span className="font-semibold">ACC HO</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/booking-asset/room/schedule"
            className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
          >
            <IconMeetingRoom className="w-10 h-10 mx-auto"></IconMeetingRoom>
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Meeting Room</span>
          </Link>
          <Link href="/booking-asset/room/pods" className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg">
            <IconPod className="w-10 h-10 mx-auto"></IconPod>
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Pods</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
