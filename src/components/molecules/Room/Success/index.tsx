'use client'

import bookingSuccessfully from '@assets/images/BookingSuccessfully.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function Success() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/booking-asset')
    }, 3000)
  }, [])

  return (
    <div className="bg-white fixed z-[102] bottom-0 w-full max-container h-screen">
      <div className="flex flex-col items-center h-full justify-center">
        <Image
          width={0}
          height={0}
          sizes="100"
          src={bookingSuccessfully.src}
          className="mb-10 w-48 h-48"
          alt="success"
        ></Image>
        <div className="text-container-success title mb-2">Booking Berhasil</div>
        <div className="text-container-success desc text-[#717171] mb-8">Room request berhasil di booking</div>
        <div className="px-3 py-4 text-container-success list text-[#252525] bg-[#E5F2FC] border border-[#809BB5] rounded w-4/5">
          <div className="grid grid-cols-12 mb-1">
            <span className="col-span-3">Tanggal</span>
            <span className="col-span-1">:</span>
            <span className="col-span-8">17/02/2024 - 19/02/2024</span>
          </div>
          <div className="grid grid-cols-12 mb-1">
            <span className="col-span-3">Jam</span>
            <span className="col-span-1">:</span>
            <span className="col-span-8">07:00 - 09:30</span>
          </div>
          <div className="grid grid-cols-12 mb-1">
            <span className="col-span-3">Keperluan</span>
            <span className="col-span-1">:</span>
            <span className="col-span-8">Lorem ipsum dolor, sit amet</span>
          </div>
        </div>
      </div>
    </div>
  )
}
