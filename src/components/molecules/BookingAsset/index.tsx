'use client'

import IconAboutUs from '@assets/icons/iconAboutUs'
import IconBuildingMaintenance from '@assets/icons/iconBuildingMaintenance'
import IconBookingAsset from '@assets/icons/iconBookingAsset'
import IconClose from '@assets/icons/iconClose'

import bannerImage from '@assets/images/banner.png'

import logoAcc from '@assets/images/logoAcc.png'
import logoBerijalan from '@assets/images/logoBerijalan.png'

import { ProfileMobile } from '@components/atoms/profile'
import { ProfileHeader } from '@components/atoms/profileHeader'

import useNamePage from '@hooks/useNamePage'
import { Modal } from '@components/atoms/modal'
import { useState } from 'react'

export default function BookingAsset() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <ProfileHeader></ProfileHeader>
      <div>
        <img className="w-full h-[196px] object-cover" src={bannerImage.src} alt="Banner" />
      </div>
      <div className="p-3 flex items-center">
        <div className="flex-1 flex items-center space-x-1">
          <div className="rounded-full bg-gray-500 h-[7px] w-[22px]"></div>
          <div className="rounded-full bg-gray-300 h-[7px] w-[7px]"></div>
          <div className="rounded-full bg-gray-300 h-[7px] w-[7px]"></div>
          <div className="rounded-full bg-gray-300 h-[7px] w-[7px]"></div>
        </div>
        <button className="text-xs text-[#0089CF]">Lihat Semua</button>
      </div>
      <div className="p-3">
        <div className="font-semibold text-[#2C598D] mb-4">Pilih Kebutuhan</div>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => setOpen(true)} className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
            <IconBookingAsset width={40} height={40} className="mx-auto"></IconBookingAsset>
            <span className="text-[#2C598D] text-xs mx-auto">Booking Asset</span>
          </button>
          <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
            <IconBuildingMaintenance width={40} height={40} className="mx-auto"></IconBuildingMaintenance>
            <span className="text-[#2C598D] text-xs mx-auto">Building Maintenance Management</span>
          </button>
          <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
            <IconAboutUs width={40} height={40} className="mx-auto"></IconAboutUs>
            <span className="text-[#2C598D] text-xs mx-auto">About Us</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} backdropClick={() => setOpen(!isOpen)}>
        <div className="max-w-[350px] bg-white relative p-5 text-center rounded-xl">
          <button className="absolute top-3 right-3" onClick={() => setOpen(!isOpen)}>
            <IconClose width={20} height={20}></IconClose>
          </button>
          <div className="font-semibold text-xl mb-1">Pilih lokasi</div>
          <div className="text-sm text-[#717171] mb-6">Tentukan lokasi “Booking Asset” yang Anda butuhkan</div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <div className="justify-self-stretch w-full text-center text-white font-semibold shadow-xl rounded-lg overflow-hidden">
              <div className="pb-6">
                <img className="w-[82px] h-[103px] mx-auto" src={logoAcc.src} alt="ACC"></img>
              </div>
              <div className="bg-[#2C598D] py-3">ACC</div>
            </div>
            <div className="justify-self-stretch w-full text-center text-white font-semibold shadow-xl rounded-lg overflow-hidden">
              <div className="pb-7">
                <img className="w-[98px] h-[100px] mx-auto" src={logoBerijalan.src} alt="Berijalan"></img>
              </div>
              <div className="bg-[#2C598D] py-3">Berijalan</div>
            </div>

            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur omnis reprehenderit at, molestiae aut
            illum aliquid aliquam nihil minima? Explicabo dolore illo fuga sed magni, molestiae enim possimus
            dignissimos consequuntur. */}
          </div>
        </div>
      </Modal>
    </>
  )
}
