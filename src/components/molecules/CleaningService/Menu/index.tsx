'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconCleaningService from '@assets/icons/IconCleaningService'
import IconCleaningServiceGuidance from '@assets/icons/IconCleaningServiceGuidance'
import IconCleaningServiceManpower from '@assets/icons/IconCleaningServiceManpower'
import IconCleaningServiceRating from '@assets/icons/IconCleaningServiceRating'
import bookingAsset from '@assets/images/BookingAsset.png'
import Image from 'next/image'
import Link from 'next/link'

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
        <Link href={'/'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="px-3 py-[200px] h-screen overflow-y-auto">
        <div className="flex items-center space-x-3 mb-4">
          <IconCleaningService width={32} height={32}></IconCleaningService>
          <div>
            <div className="text-heading xs semibold-16 text-[#2C598D]">Cleaning Service</div>
            <div className="text-[#809BB5] -mt-1">
              <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
              <span className="text-extra-small semibold-12">ACC HO</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href={`/building-maintenance/cleaning/management`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconCleaningServiceManpower className="mx-auto"></IconCleaningServiceManpower>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Manpower CS</span>
          </Link>
          <Link
            href={`/building-maintenance/cleaning/management?type=rating`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconCleaningServiceRating className="mx-auto"></IconCleaningServiceRating>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Penilaian CS</span>
          </Link>
          <Link
            href={`/building-maintenance/cleaning/management?type=guidance`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconCleaningServiceGuidance className="mx-auto"></IconCleaningServiceGuidance>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Cleaning Service Guidance</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
