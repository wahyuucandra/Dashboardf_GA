'use client'

import bookingSuccessfully from '@assets/images/BookingSuccessfully.png'
import { RootState } from '@store/reducers'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function Success() {
  const roomListParams = useSelector((state: RootState) => state.dataRoom.roomListParams)
  const scheduleForm = useSelector((state: RootState) => state.dataRoom.scheduleForm)

  const router = useRouter()

  const handleMappingDate = () => {
    if (roomListParams?.startBookingDate && roomListParams?.endBookingDate) {
      return `${moment(roomListParams?.startBookingDate, 'YYYY-MM-DD').format('HH:mm:ss').toString()} - ${moment(roomListParams?.endBookingDate, 'YYYY-MM-DD').format('HH:mm:ss').toString()}`
    }
  }

  const handleMappingTime = () => {
    if (roomListParams?.timeOpen && roomListParams?.timeClose) {
      return `${moment(roomListParams?.timeOpen, 'HH:mm').format('DD/MM/YYYY').toString()} - ${moment(roomListParams?.timeClose, 'HH:mm').format('HH:mm:ss').toString()}`
    }
  }

  useEffect(() => {
    setTimeout(() => {
      router.push('/booking-asset/room')
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
            <span className="col-span-8">{handleMappingDate()}</span>
          </div>
          <div className="grid grid-cols-12 mb-1">
            <span className="col-span-3">Jam</span>
            <span className="col-span-1">:</span>
            <span className="col-span-8">{handleMappingTime()}</span>
          </div>
          <div className="grid grid-cols-12 mb-1">
            <span className="col-span-3">Keperluan</span>
            <span className="col-span-1">:</span>
            <span className="col-span-8">{scheduleForm?.reason}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
