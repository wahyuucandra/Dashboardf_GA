'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Modal } from '@components/atoms/ModalCustom'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import IconHistory from '@assets/icons/IconHistory'
import IconLogout from '@assets/icons/IconLogout'
import IconNotification from '@assets/icons/IconNotification'
import IconModalLogout from '@assets/icons/IconModalLogout'
import { GetCookie, SetCookie } from '@store/storage'

export function Account() {
  const router = useRouter()

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [dataUser, setDataUser] = useState<any>({})

  useEffect(() => {
    const data = GetCookie('data_user')
    setDataUser(data)
  }, [])

  return (
    <div>
      <div className="bg-[#f6f6f6] px-3 pt-2 h-screen w-full">
        <div className="flex flex-row mb-2 cursor-pointer">
          <IconChevronLeft width={24} height={24} className="mr-2" />
          <span className="font-semibold text-[18px]">Akun Saya</span>
        </div>
        <div
          className="flex flex-row items-center bg-white px-4 py-4 mb-2 cursor-pointer "
          onClick={() => {
            router.push('/profile/detail')
          }}
          onKeyDown={() => {}}
        >
          <div className="w-14 h-14 rounded-full bg-[#D9D9D9] mr-2" />
          <div>
            <p className="font-semibold text-[18px]">{dataUser?.nameUser || 'Not Login'}</p>
            <div className="flex flex-row">
              <p className=" font-normal text-[14px] text-[#909090]">View my profile</p>
              <IconChevronRight width={18} height={18} color="#909090" />
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-center bg-white px-4 py-4 justify-between cursor-pointer"
          onClick={() => router.push('/history')}
          onKeyDown={() => {}}
        >
          <div className="flex flex-row items-center">
            <IconHistory width={24} height={24} />
            <p className="font-normal text-[14px] ml-2">History</p>
          </div>
          <IconChevronRight width={16} height={16} />
        </div>
        <div
          className="flex flex-row items-center bg-white px-4 py-4 justify-between mb-2 cursor-pointer"
          onClick={() => router.push('/notification')}
          onKeyDown={() => {}}
        >
          <div className="flex flex-row items-center">
            <IconNotification width={24} height={24} />
            <p className="font-normal text-[14px] ml-2">Notification</p>
          </div>
          <IconChevronRight width={16} height={16} />
        </div>
        <div
          className="flex flex-row items-center bg-white px-4 py-4 justify-between rounded-md cursor-pointer"
          onClick={() => {
            setIsConfimationModalOpen(true)
          }}
          onKeyDown={() => {}}
        >
          <div className="flex flex-row items-center cursor-pointer">
            <IconLogout width={24} height={24} color="red" />
            <p className="font-normal text-[14px] ml-2 text-red-700">Log out</p>
          </div>
          <IconChevronRight width={16} height={16} />
        </div>
      </div>

      {/* Modal Logout */}
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
                SetCookie('data_user', '')
                SetCookie('access_token', '')
                SetCookie('tokenExpiration', '')
                router.push(`/login`, { scroll: false })
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md  h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16 text-red">Log Out</div>
            </button>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
              }}
              type="button"
              className="cancel-button w-full text-center text-white rounded-xl  h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
