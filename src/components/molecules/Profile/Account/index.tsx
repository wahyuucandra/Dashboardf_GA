'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Modal } from '@components/atoms/ModalCustom'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import IconHistory from '@assets/icons/IconHistory'
import IconLogout from '@assets/icons/IconLogout'
import IconNotification from '@assets/icons/IconNotification'
import IconModalLogout from '@assets/icons/IconModalLogout'

export function Account() {
  const router = useRouter()
  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

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
        onClick={() => router.push('/history')}
        onKeyDown={() => {}}
      >
        <div className="flex flex-row items-center">
          <IconHistory width={24} height={24}></IconHistory>
          <p className="font-normal text-[14px] ml-2">History</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
      <div
        className="flex flex-row items-center bg-white px-4 py-4 justify-between mb-2"
        onClick={() => router.push('/notification')}
        onKeyDown={() => {}}
      >
        <div className="flex flex-row items-center">
          <IconNotification width={24} height={24}></IconNotification>
          <p className="font-normal text-[14px] ml-2">Notification</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
      <div
        className="flex flex-row items-center bg-white px-4 py-4 justify-between rounded-md"
        onClick={() => {
          setIsConfimationModalOpen(true)
        }}
        onKeyDown={() => {}}
      >
        <div className="flex flex-row items-center">
          <IconLogout width={24} height={24} color="red"></IconLogout>
          <p className="font-normal text-[14px] ml-2 text-red-700">Log out</p>
        </div>
        <IconChevronRight width={16} height={16} />
      </div>
      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}>
        <div className="max-w-[350px] bg-white relative p-6 text-center rounded-xl">
          <div>
            <IconModalLogout className="mx-auto mb-4 w-28 h-28" />
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Yakin ingin logout?</div>
          <div className="text-paragraph regular-14 text-[#717171] px-3">Anda akan keluar dari akun ini.</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">Apakah Anda yakin ingin melanjutkan?</div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
                router.push(`/login`, { scroll: false })
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16 text-red">Log Out</div>
            </button>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
              }}
              type="button"
              className="cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
