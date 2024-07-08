'use client'

import bookingSuccessfully from '@assets/images/bookingSuccessfully.png'

import Image from 'next/image'

export default function BookingSuccess() {
  return (
    <div className="bg-white fixed z-[901] bottom-0 right-0 w-full h-screen">
      <div className="flex flex-col items-center h-full justify-center">
        <Image width={100} height={100} src={bookingSuccessfully.src} className="mb-6" alt="" />
        <div className="text-[20px] font-semibold">Booking Berhasil</div>
        <div className="text-sm text-[#717171] mb-3">Room request berhasil di booking</div>
        <div className="p-3 bg-[#E5F2FC] border border-[#809BB5] rounded text-sm w-3/4">
          <div className="grid grid-cols-12">
            <span className="col-span-4">Tanggal</span>
            <span className="col-span-1">:</span>
            <span className="col-span-7">17/02/2024 - 19/02/2024</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="col-span-4">Jam</span>
            <span className="col-span-1">:</span>
            <span className="col-span-7">07:00 - 09:30</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="col-span-4">Keperluan</span>
            <span className="col-span-1">:</span>
            <span className="col-span-7">Lorem ipsum dolor, sit amet</span>
          </div>
        </div>
      </div>
    </div>
  )
}
