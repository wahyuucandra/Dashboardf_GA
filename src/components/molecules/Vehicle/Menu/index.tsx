'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconVehicleOfficeOperation from '@assets/icons/IconVehicleOfficeOperation'
import IconVehicleSpecialOperation from '@assets/icons/IconVehicleSpecialOperation'

import bookingAsset from '@assets/images/BookingAsset.png'

import IconVehicle from '@assets/icons/IconVehicle'
import Image from 'next/image'
import Link from 'next/link'

export function Menu() {
  return (
    <>
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
            <IconVehicle width={32} height={32}></IconVehicle>
            <div>
              <div className="text-heading xs semibold-16 text-[#2C598D]">Vehicle</div>
              <div className="text-[#809BB5] -mt-1">
                <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
                <span className="text-extra-small semibold-12">ACC HO</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <Link
              href={'/booking-asset/vehicle/special-operational/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconVehicleSpecialOperation className="mx-auto mb-2"></IconVehicleSpecialOperation>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Operational Khusus</span>
            </Link>
            <Link
              href={'/booking-asset/vehicle/office-operational/schedule'}
              className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
            >
              <IconVehicleOfficeOperation className="mx-auto"></IconVehicleOfficeOperation>
              <span className="text-paragraph semibold-14 text-[#2C598D]">Operational Kantor</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
