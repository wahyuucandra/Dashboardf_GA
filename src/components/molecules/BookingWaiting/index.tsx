'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@components/atoms/button'
import IconWaiting from '@assets/icons/IconWaiting'

export default function BookingWaiting() {
  const router = useRouter()

  return (
    <div className="bg-white fixed z-[901] bottom-0 right-0 w-full h-screen lg:block">
      <div className="flex flex-col items-center h-full justify-center mx-10 ">
        <IconWaiting />
        <div className="text-[20px] font-semibold">Booking Process</div>
        <div className="text-sm text-[#717171] mb-3 justify-center items-center text-center">
          Terimakasih, mohon menunggu proses persetujuan dari <span className="font-semibold">General Affair</span>
        </div>
        <Button
          className="flex bg-[#386394] hover:bg-blue-700 mt-[20px] shadowtext-white font-bold border-2 border-white focus:outline-none focus:shadow-outline rounded-lg items-center justify-center w-full h-[48px]"
          onClick={() => router.push('/')}
        >
          Cek Status
        </Button>
      </div>
    </div>
  )
}
