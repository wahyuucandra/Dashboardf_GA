'use client'

import { useRouter } from 'next/navigation'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import IconHistory from '@assets/icons/IconHistory'
import IconLogout from '@assets/icons/IconLogout'
import IconNotification from '@assets/icons/IconNotification'

export function Account() {
  const router = useRouter()

  return (
    <div className="bg-[#f6f6f6] px-3 pt-2 h-full w-full">
      <div className="flex flex-row mb-2">
        <IconChevronLeft width={24} height={24} className="mr-2" />
        <span className="font-semibold text-[18px]">Akun Saya</span>
      </div>
      <div className="flex flex-row items-center bg-white px-4 py-4 mb-2">
        <div className="w-14 h-14 rounded-full bg-[#D9D9D9] mr-2"></div>
        <div>
          <p className="font-semibold text-[18px]">Bimo Maryono</p>
          <div
            className="flex flex-row"
            onClick={() => {
              router.push('/profile/detail')
            }}
            onKeyDown={() => {}}
          >
            <p className=" font-normal text-[14px] text-[#909090]">View my profile</p>
            <IconChevronRight width={18} height={18} color="#909090" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center bg-white px-4 py-4 justify-between"
        onClick={() => router.push('/')}
        onKeyDown={() => {}}
      >
        <div className="flex flex-row items-center">
          <IconHistory width={24} height={24}></IconHistory>
          <p className="font-normal text-[14px] ml-2">History</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
      <div className="flex flex-row items-center bg-white px-4 py-4 justify-between mb-2">
        <div className="flex flex-row items-center">
          <IconNotification width={24} height={24}></IconNotification>
          <p className="font-normal text-[14px] ml-2">Notification</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
      <div className="flex flex-row items-center bg-white px-4 py-4 justify-between rounded-md">
        <div className="flex flex-row items-center">
          <IconLogout width={24} height={24} color="red"></IconLogout>
          <p className="font-normal text-[14px] ml-2 text-red-700">Log out</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
    </div>
  )
}
