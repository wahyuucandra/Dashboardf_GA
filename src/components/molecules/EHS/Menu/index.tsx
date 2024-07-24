'use client'

import IconAsset from '@assets/icons/IconAsset'
import IconBookingAsset from '@assets/icons/IconBookingAsset'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconManpower from '@assets/icons/IconManpower'
import IconVehicle from '@assets/icons/IconVehicle'

import bookingAsset from '@assets/images/BookingAsset.png'

import IconEHSWaste from '@assets/icons/IconEHSWaste'
import Image from 'next/image'
import Link from 'next/link'
import IconEHSWater from '@assets/icons/IconEHSWater'
import IconEHSFuel from '@assets/icons/IconEHSFuel'
import IconEHSElectricity from '@assets/icons/IconEHSElectricity'
import IconEHSAGC from '@assets/icons/IconEHSAGC'
import IconEHSP2LK3 from '@assets/icons/IconEHSP2LK3'

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
          <IconBookingAsset width={32} height={32}></IconBookingAsset>
          <div>
            <div className="text-heading xs semibold-16 text-[#2C598D]">EHS Management System</div>
            <div className="text-[#809BB5] -mt-1">
              <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
              <span className="text-extra-small semibold-12">ACC HO</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href={`/building-maintenance/ehs/waste-management`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSWaste className="mx-auto"></IconEHSWaste>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Waste Management</span>
          </Link>
          <Link
            href={`/building-maintenance/ehs/water-management`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSWater className="mx-auto"></IconEHSWater>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Pengunaan Air</span>
          </Link>
          <Link
            href={`/building-maintenance/ehs/fuel-management`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSFuel className="mx-auto"></IconEHSFuel>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Pengunaan BBM</span>
          </Link>
          <Link
            href={`/building-maintenance/ehs/electricity-management`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSElectricity className="mx-auto"></IconEHSElectricity>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Pengunaan Listrik</span>
          </Link>
          <Link
            href={`/building-maintenance/ehs/agc`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSAGC className="mx-auto"></IconEHSAGC>
            <span className="text-paragraph semibold-14 text-[#2C598D]">AGC</span>
          </Link>
          <Link
            href={`/building-maintenance/ehs/p2lk3`}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconEHSP2LK3 className="mx-auto"></IconEHSP2LK3>
            <span className="text-paragraph semibold-14 text-[#2C598D]">P2LK3</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
