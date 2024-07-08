'use client'

import bookingProcess from '@assets/images/BookingProcess.png'
import Image from 'next/image'
import './style.css'

export function Process() {
  return (
    <>
      <div className="bg-white fixed z-[102] bottom-0 bottom-0 right-4 left-4  h-screen">
        <div className="flex flex-col items-center h-full justify-center">
          <Image
            width={0}
            height={0}
            sizes="100"
            src={bookingProcess.src}
            className="mb-16 w-40 h-40"
            alt="success"
          ></Image>
          <div className="text-container-success title mb-2">Booking Process</div>
          <div className="text-center text-container-success desc text-[#717171] mb-8 px-8">
            Terimakasih, mohon menunggu proses persetujuan dari{' '}
            <span className="text-paragraph semibold-14">General Affair</span>{' '}
          </div>
          <button
            type="button"
            className={`status-button text-[#FFFFFF] py-2.5 mx-4 w-full rounded-lg text-heading xs semibold-16 mb-6`}
          >
            Cek Status
          </button>
        </div>
      </div>
    </>
  )
}
