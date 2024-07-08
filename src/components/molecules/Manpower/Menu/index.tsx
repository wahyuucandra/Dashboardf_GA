'use client'

import Link from 'next/link'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconManpowerCleaning from '@assets/icons/IconManpowerCleaning'
import bookingAsset from '@assets/images/bookingAsset.png'
import IconManpowerMaintenance from '@assets/icons/IconManpowerMaintanance'
import IconManpowerSecurity from '@assets/icons/IconManpowerSecurity'
import IconManpowerReceptionist from '@assets/icons/IconManpowerReceptionist'
import IconManpower from '@assets/icons/IconManpower'
import Image from 'next/image'

export function Menu() {
  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 left-4">
        <Link href={'/booking-asset'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="px-3 pt-[200px]">
        <div className="flex items-center space-x-3 mb-4">
          <IconManpower className="w-10 h-10"></IconManpower>
          <div>
            <div className="font-semibold text-[#2C598D]">Manpower</div>
            <div className="text-xs text-[#809BB5]">
              <span>Pilih request yang Anda butuhkan di lokasi </span>
              <span className="font-semibold">ACC HO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href="/booking-asset/manpower/cleaning-service/schedule"
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconManpowerCleaning className="w-10 h-10 mx-auto text-[#2C598D]" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Cleaning Service</span>
          </Link>
          <Link
            href="/booking-asset/manpower/maintenance"
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconManpowerMaintenance className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerMaintenance>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Maintenance</span>
          </Link>
          <Link
            href="/booking-asset/manpower/security"
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconManpowerSecurity className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerSecurity>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Security</span>
          </Link>
          <Link
            href="/booking-asset/manpower/receptionist"
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconManpowerReceptionist className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerReceptionist>
            <span className="text-paragraph semibold-14 text-[#2C598D]">Receptionist</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
