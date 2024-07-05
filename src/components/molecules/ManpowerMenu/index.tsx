'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconManpowerCleaning from '@assets/icons/IconManpowerCleaning'
import bookingAsset from '@assets/images/bookingAsset.png'
import IconManpowerMaintenance from '@assets/icons/IconManpowerMaintanance'
import IconManpowerSecurity from '@assets/icons/IconManpowerSecurity'
import IconManpowerReceptionist from '@assets/icons/IconManpowerReceptionist'
import IconManpower from '@assets/icons/IconManpower'
import Image from 'next/image'

export default function ManpowerMenuPage() {
  const router = useRouter()

  return (
    <div className="relative">
      <div className="sticky top-0">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-3 left-3 rounded-md bg-white w-8 h-8 flex items-center justify-center z-10"
        >
          <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
        </button>
        <Image
          className="object-cover w-full max-h-[188px] "
          width={1000}
          height={188}
          src={bookingAsset.src}
          alt="Booking Asset"
        />
      </div>

      <div className="p-3">
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
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/booking-asset/manpower/cleaning-service"
            className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
          >
            <IconManpowerCleaning className="w-10 h-10 mx-auto text-[#2C598D]" />
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Cleaning Service</span>
          </Link>
          <Link
            href="/booking-asset/manpower/maintenance"
            className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
          >
            <IconManpowerMaintenance className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerMaintenance>
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Maintenance</span>
          </Link>
          <Link
            href="/booking-asset/manpower/security"
            className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
          >
            <IconManpowerSecurity className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerSecurity>
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Security</span>
          </Link>
          <Link
            href="/booking-asset/manpower/receptionist"
            className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
          >
            <IconManpowerReceptionist className="w-10 h-10 mx-auto text-[#2C598D]"></IconManpowerReceptionist>
            <span className="text-[#2C598D] text-xs font-semibold mx-auto">Receptionist</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
