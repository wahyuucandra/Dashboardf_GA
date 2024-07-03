'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconVehicle from '@assets/icons/IconVehicle'
import IconVehicleOfficeOperation from '@assets/icons/IconVehicleOfficeOperation'
import IconVehicleSpecialOperation from '@assets/icons/IconVehicleSpecialOperation'

import bookingAsset from '@assets/images/bookingAsset.png'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Room() {
  const router = useRouter()

  return (
    <>
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

        <img
          className="object-cover w-full h-[188px] rounded rounded-b-md"
          src={bookingAsset.src}
          alt="Booking Asset"
        />

        <div className="p-3">
          <div className="flex items-center space-x-3 mb-4">
            <IconVehicle className="w-10 h-10"></IconVehicle>
            <div>
              <div className="font-semibold text-[#2C598D]">Vehicle</div>
              <div className="text-xs text-[#809BB5]">
                <span>Pilih request yang Anda butuhkan di lokasi </span>
                <span className="font-semibold">ACC HO</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/booking-asset/room/office-schedule"
              className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
            >
              <IconVehicleSpecialOperation className="w-10 h-10 mx-auto text-[#2C598D]"></IconVehicleSpecialOperation>
              <span className="text-[#2C598D] text-xs font-semibold mx-auto">Operational Khusus</span>
            </Link>
            <Link
              href="/booking-asset/room/special-schedule"
              className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg"
            >
              <IconVehicleOfficeOperation className="w-10 h-10 mx-auto text-[#2C598D]"></IconVehicleOfficeOperation>
              <span className="text-[#2C598D] text-xs font-semibold mx-auto">Operational Kantor</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
