'use client'

import Link from 'next/link'
import Image from 'next/image'

import bookingAsset from '@assets/images/BookingAsset.png'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconPengajuanPerbaikan from '../../../assets/icons/IconPengajuanPerbaikan'
import IconBudgetTimeline from '../../../assets/icons/IconBudgetTimeline'
import IconStandarCabang from '../../../assets/icons/IconStandarCabang'
import IconReportKondisi from '../../../assets/icons/IconReportKondisi'
import IconHistoryPerbaikan from '../../../assets/icons/IconHistoryPerbaikan'
import IconBuildingMaintenance from '@assets/icons/IconBuildingMaintenance'

export function BuildingMaintenanceMenu() {
  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      />

      <div className="fixed top-4 left-4">
        <Link href={'/'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="px-3 pt-[200px]">
        <div className="flex items-center space-x-3 mb-4">
          <IconBuildingMaintenance width={32} height={32} />
          <div>
            <div className="text-heading xs semibold-16 text-[#2C598D]">Building Maintenance Managament</div>
            <div className="text-[#809BB5] -mt-1">
              <span className="text-extra-small regular-12">Pilih request yang Anda butuhkan di lokasi </span>
              <span className="text-extra-small semibold-12">ACC HO</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href={'/booking-asset/room/meeting-room/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconPengajuanPerbaikan className="mx-auto" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Building Maintenance</span>
          </Link>
          <Link
            href={'/booking-asset/room/ballroom/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconBudgetTimeline className="mx-auto mb-2" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">EHS Management System</span>
          </Link>
          <Link
            href={'/booking-asset/room/karaoke/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconStandarCabang className="mx-auto mb-2" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Security Guard</span>
          </Link>
          <Link
            href={'/booking-asset/room/karaoke/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconReportKondisi className="mx-auto mb-2" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Cleaning Service</span>
          </Link>
          <Link
            href={'/booking-asset/room/karaoke/schedule'}
            className="bg-[#2C598D]/[.08] shadow-[0_1px_4px_1px_rgba(0,0,0,0.1)] p-6 flex flex-col space-y-3 rounded-[20px]"
          >
            <IconHistoryPerbaikan className="mx-auto mb-2" />
            <span className="text-paragraph semibold-14 text-[#2C598D]">Cleaning Service</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
