'use client'

import Link from 'next/link'
import Image from 'next/image'

import bookingAsset from '@assets/images/BookingAsset.png'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconSecurityGuard from '@assets/icons/IconSecurityGuard'
import IconSecurityASMS from '@assets/icons/IconSecurityASMS'
import IconSecurityManpower from '@assets/icons/IconSecurityManpower'
import IconSecuritySOI from '@assets/icons/IconSecuritySOI'

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
      />

      <div className="fixed top-4 ml-4">
        <Link href={'/building-maintenance'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="px-3 pt-[200px]">
        <div className="flex items-center space-x-3 mb-4">
          <IconSecurityGuard width={32} height={32} />
          <div>
            <div className="text-heading xs semibold-16 text-[#2C598D]">Security Guard</div>
            <div className="text-[#809BB5] -mt-1">
              <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
              <span className="text-extra-small semibold-12">ACC HO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href={'/building-maintenance/security/management'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconSecurityManpower className="mx-auto" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Manpower SG</span>
          </Link>
          <Link
            href={'/building-maintenance/security/management'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconSecurityASMS className="mx-auto" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">ASMS</span>
          </Link>
          <Link
            href={'/building-maintenance/security/management'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconSecuritySOI className="mx-auto" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">SOI</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
