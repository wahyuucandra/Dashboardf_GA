'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import bookingSuccessfully from '@assets/images/BookingSuccessfully.png'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '@store/reducers'

export function KaraokeSuccess() {
  const router = useRouter()

  const scheduleForm = useSelector((state: RootState) => state.dataKaraoke.scheduleForm)

  const handleMappingDate = () => {
    if (scheduleForm?.startBookingDate && scheduleForm?.endBookingDate) {
      return `${moment(scheduleForm?.startBookingDate, 'YYYY-MM-DD').format('DD/MM/YYYY').toString()} - ${moment(
        scheduleForm?.endBookingDate,
        'YYYY-MM-DD'
      )
        .format('DD/MM/YYYY')
        .toString()}`
    }
  }

  const handleMappingTime = () => {
    if (scheduleForm?.startBookingTime && scheduleForm?.endBookingTime) {
      return `${scheduleForm?.startBookingTime} - ${scheduleForm?.endBookingTime}`
    }
  }

  useEffect(() => {
    setTimeout(() => {
      router.push('/booking-asset/room')
    }, 3000)
  }, [])

  return (
    <div className="bg-white fixed z-[102] bottom-0 w-full h-screen max-container">
      <div className="flex flex-col items-center h-full justify-center">
        <Image
          width={0}
          height={0}
          sizes="100"
          src={bookingSuccessfully.src}
          className="mb-10 w-48 h-48"
          alt="success"
        />
        <div className="text-container-success title mb-2">Booking Berhasil</div>
        <div className="text-container-success desc text-[#717171] mb-8">Karaoke request berhasil di booking</div>
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
            <span className="col-span-8">{scheduleForm?.keperluan}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
