'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { FilterLocation } from '@components/atoms/FilterLocation'
import { FilterProduk } from '@components/atoms/FilterProduk'
import { dataNotification } from './data'
import { useRouter } from 'next/navigation'

export function AllNotification() {
  const router = useRouter()

  const handleNotificationStatus = (status: any) => {
    if (status) {
      // Do something if status is truthy
      return 'bg-[#e5f2fc]'
    } else {
      // Do something if status is falsy
      return 'bg-white'
    }
  }

  const getNotificationText = (notification: any) => {
    switch (notification.product) {
      case 'Meeting Room':
        return `Booking untuk "${notification.asset}" sudah di approve oleh team GA`
      case 'Ballroom':
        return `Booking untuk "${notification.asset}" sudah di approve oleh team GA`
      default:
        return `Booking untuk kendaraan "${notification.asset}"`
    }
  }

  const selisihHari = (date: Date) => {
    const today = new Date()
    const diffInMilliseconds = today.getTime() - date.getTime()
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24)
    return Math.floor(diffInDays)
  }

  return (
    <div className="bg-white w-full bottom-0 top-0 z-[101]">
      <div className="relative flex flex-row items-center px-4 pt-4">
        <button onClick={() => router.push('/')}>
          <IconChevronLeft width={24} height={24} className="mr-2" />
        </button>
        <div className="flex-1 flex justify-center">
          <span className="font-semibold text-[18px] text-[#2C598D]">Notifikasi</span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center mb-2 px-4 pt-4">
          <div className="w-[150px] mr-2">
            <FilterLocation></FilterLocation>
          </div>
          <div className="w-[150px]">
            <FilterProduk></FilterProduk>
          </div>
        </div>
        {/* <button onClick={() => { }}>
          <IconSetting className='mr-4' />
        </button> */}
      </div>
      <div>
        {dataNotification.map(notification => (
          <div
            key={notification.id}
            className={`${handleNotificationStatus(notification.status)} px-4 h-[85px] flex flex-col justify-between`}
          >
            <div className="">
              <div className="justify-between flex mt-2">
                <span className="text-extra-small regular-12 text-[#909090]">
                  {notification.location} - {notification.product}
                </span>
                <span className="text-extra-small regular-12 text-[#909090]">
                  {selisihHari(notification.date) < 7
                    ? `${selisihHari(notification.date)} hari yang lalu`
                    : notification.date.toLocaleDateString('en-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                </span>
              </div>

              <p className="text-heading xs semibold-16 py-2">{getNotificationText(notification)}</p>
            </div>
            <div className="dividers"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
