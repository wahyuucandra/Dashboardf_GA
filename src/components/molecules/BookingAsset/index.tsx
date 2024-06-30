'use client'

import IconAsset from '@assets/icons/IconAsset'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconManpower from '@assets/icons/IconManpower'
import IconRoom from '@assets/icons/IconRoom'
import IconVehicle from '@assets/icons/IconVehicle'
import IconBookingAsset from '@assets/icons/IconBookingAsset'

import bookingAsset from '@assets/images/bookingAsset.png'

import { useRouter } from 'next/navigation'

export default function BookingAsset() {
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
            <IconChevronLeft className="ml-1 w-4 h-4"></IconChevronLeft>
          </button>
        </div>

        <img
          className="object-cover w-full h-[188px] rounded rounded-b-md"
          src={bookingAsset.src}
          alt="Booking Asset"
        />

        <div className="p-3">
          <div className="flex items-center space-x-3 mb-4">
            <IconBookingAsset className="w-10 h-10"></IconBookingAsset>
            <div>
              <div className="font-semibold text-[#2C598D]">Booking Asset</div>
              <div className="text-xs text-[#809BB5]">
                <span>Pilih request yang Anda butuhkan di lokasi </span>
                <span className="font-semibold">ACC HO</span>
              </div>
            </div>
          </div>
          {/* <div className="font-semibold text-[#2C598D] mb-4">Pilih Kebutuhan</div> */}
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg">
              <IconRoom className="w-10 h-10 mx-auto"></IconRoom>
              <span className="text-[#2C598D] text-xs mx-auto">Room</span>
            </button>
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg">
              <IconVehicle className="w-10 h-10 mx-auto"></IconVehicle>
              <span className="text-[#2C598D] text-xs mx-auto">Vehicle</span>
            </button>
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg">
              <IconAsset className="w-10 h-10 mx-auto"></IconAsset>
              <span className="text-[#2C598D] text-xs mx-auto">Asset</span>
            </button>
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-lg">
              <IconManpower className="w-10 h-10 mx-auto"></IconManpower>
              <span className="text-[#2C598D] text-xs mx-auto">Manpower</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
