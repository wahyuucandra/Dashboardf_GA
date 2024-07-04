'use client'

import IconAsset from '@assets/icons/IconAsset'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconManpower from '@assets/icons/IconManpower'
import IconRoom from '@assets/icons/IconRoom'
import IconVehicle from '@assets/icons/IconVehicle'
import IconBookingAsset from '@assets/icons/IconBookingAsset'

import bookingAsset from '@assets/images/BookingAsset.png'

import Link from 'next/link'
import Image from 'next/image'

export function Menu() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-4">
          <Link href={'/'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <Image
          width={0}
          height={0}
          sizes="100"
          className="object-cover w-full h-[188px] rounded rounded-b"
          src={bookingAsset.src}
          alt="Booking Asset"
        ></Image>

        <div className="p-3">
          <div className="flex items-center space-x-3 mb-4">
            <IconBookingAsset width={32} height={32}></IconBookingAsset>
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
              href={'/booking-asset/room'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconRoom className="mx-auto"></IconRoom>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Room</span>
            </Link>
            <Link
              href={'/booking-asset/vehicle'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconVehicle className="mx-auto"></IconVehicle>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Vehicle</span>
            </Link>
            <Link
              href={'/booking-asset/asset'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconAsset className="mx-auto"></IconAsset>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Asset</span>
            </Link>
            <Link
              href={'/booking-asset/manpower'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconManpower className="mx-auto"></IconManpower>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Manpower</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
