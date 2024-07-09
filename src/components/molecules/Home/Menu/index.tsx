'use client'

import IconAboutUs from '@assets/icons/IconAboutUs'
import IconBookingAsset from '@assets/icons/IconBookingAsset'
import IconBuildingMaintenance from '@assets/icons/IconBuildingMaintenance'
import IconClose from '@assets/icons/IconClose'

import logoAcc from '@assets/images/logoAcc.png'
import logoBerijalan from '@assets/images/logoBerijalan.png'

import { Modal } from '@components/atoms/ModalCustom'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

export function Menu() {
  const [isOpen, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <div className="w-screen">
        <div className="p-3">
          <div className="text-heading xs semibold-16 text-[#2C598D] mb-4">Pilih Kebutuhan</div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md"
            >
              <IconBookingAsset className="mx-auto"></IconBookingAsset>
              <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">Booking Asset</span>
            </button>
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
              <IconBuildingMaintenance className="mx-auto"></IconBuildingMaintenance>
              <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">
                Building Maintenance Management
              </span>
            </button>
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
              <IconAboutUs className="mx-auto"></IconAboutUs>
              <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">About Us</span>
            </button>
          </div>
        </div>

        <Modal isOpen={isOpen} backdropClick={() => setOpenModal(!isOpen)}>
          <div className="max-w-[350px] bg-white relative p-5 text-center rounded-xl">
            <button className="absolute top-5 right-5" onClick={() => setOpenModal(!isOpen)}>
              <IconClose></IconClose>
            </button>
            <div className="text-modal title mb-1">Pilih lokasi</div>
            <div className="text-modal desc text-[#717171] mb-6 px-10">
              Tentukan lokasi “Booking Asset” yang Anda butuhkan
            </div>

            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <Link href={`/booking-asset`} className="justify-self-stretch w-full">
                <button
                  onClick={() => {
                    setOpenModal(false)
                  }}
                  type="button"
                  className="text-center text-white w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden"
                >
                  <div className="pt-6 pb-6">
                    <Image
                      width={0}
                      height={0}
                      sizes="100"
                      src={logoAcc.src}
                      className="w-[82px] h-[103px] mx-auto"
                      alt="ACC"
                    ></Image>
                  </div>
                  <div className="bg-[#2C598D] text-modal button py-5">ACC</div>
                </button>
              </Link>

              <Link href={`/booking-asset`} className="justify-self-stretch w-full">
                <button
                  onClick={() => {
                    setOpenModal(false)
                  }}
                  type="button"
                  className="text-center text-white w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden"
                >
                  <div className="pt-6 pb-7">
                    <Image
                      width={0}
                      height={0}
                      sizes="100"
                      src={logoBerijalan.src}
                      className="w-[98px] h-[100px] mx-auto"
                      alt="Berijalan"
                    ></Image>
                  </div>
                  <div className="bg-[#2C598D] text-modal button py-5">Berijalan</div>
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}
