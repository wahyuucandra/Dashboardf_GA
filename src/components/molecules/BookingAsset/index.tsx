'use client'

import './style.css'

import IconAboutUs from '@assets/icons/iconAboutUs'
import IconBookingAsset from '@assets/icons/iconBookingAsset'
import IconBuildingMaintenance from '@assets/icons/iconBuildingMaintenance'
import IconClose from '@assets/icons/iconClose'

import bannerInformation1 from '@assets/images/bannerInformation1.png'
import bannerInformation2 from '@assets/images/bannerInformation2.png'
import bannerInformation3 from '@assets/images/bannerInformation3.png'

import logoAcc from '@assets/images/logoAcc.png'
import logoBerijalan from '@assets/images/logoBerijalan.png'

import { ProfileHeader } from '@components/atoms/profileHeader'

import { Modal } from '@components/atoms/modal'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BookingAsset() {
  const initialize = useRef<boolean>(false)

  const router = useRouter()

  const [isOpen, setOpen] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)
  const banners = [
    {
      alt: 'Banner 1',
      src: bannerInformation1.src,
    },
    {
      alt: 'Banner 2',
      src: bannerInformation2.src,
    },
    {
      alt: 'Banner 3',
      src: bannerInformation3.src,
    },
  ]

  useEffect(() => {
    if (!initialize.current) {
      setInterval(() => {
        setCounter(prev => {
          if (prev / (banners.length - 1) == 100) {
            return 0
          }
          return prev + 100
        })
      }, 3000)
      initialize.current = true
    }
  }, [])

  return (
    <>
      <ProfileHeader></ProfileHeader>
      <div className={`transition-all -translate-x-[${counter}%] duration-300 flex items-center`}>
        {banners.map((val, index) => {
          return (
            <img
              key={index}
              onClick={() => router.push(`/booking-asset/informations/${index}`, { scroll: false })}
              className="w-screen h-[196px] object-cover"
              src={val.src}
              alt={val.alt}
            />
          )
        })}
      </div>
      <div className="p-3 flex items-center">
        <div className="flex-1 flex  items-center space-x-1">
          {banners.map((val, index) => {
            return (
              <div
                key={index}
                className={`transition-all rounded-full ${
                  counter != index * 100 ? '7' : '22' ? 'bg-gray-500' : ''
                } bg-gray-300 h-[7px] w-[${counter != index * 100 ? '7' : '22'}px]`}
              ></div>
            )
          })}
        </div>

        <Link className="text-xs text-[#0089CF]" href={'/booking-asset/informations'}>
          Lihat Semua
        </Link>
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
          </div>
        </div>
      </Modal>
    </>
  )
}
