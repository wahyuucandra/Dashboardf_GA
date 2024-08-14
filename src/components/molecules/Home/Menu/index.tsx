'use client'

import IconAboutUs from '@assets/icons/IconAboutUs'
import IconBookingAsset from '@assets/icons/IconBookingAsset'
import IconBuildingMaintenance from '@assets/icons/IconBuildingMaintenance'
import IconClose from '@assets/icons/IconClose'
import logoAcc from '@assets/images/logoAcc.png'
import logoBerijalan from '@assets/images/logoBerijalan.png'
import { Modal } from '@components/atoms/ModalCustom'
import { IBookLocation, IBookMenu } from '@interfaces/booking-asset'
import { apiBookLocation, apiBookMenu } from '@services/booking-asset/api'
import { setBookingLocation } from '@store/actions/actionBookingAsset'
import { setShowNavbar } from '@store/actions/actionContainer'
import { store } from '@store/storage'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Menu() {
  const { dispatch } = store

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [linkState, setLinkState] = useState<string>()

  const [loadingMenu, setLoadingMenu] = useState<boolean>(false)
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false)
  const [bookMenu, setBookMenu] = useState<IBookMenu[]>()
  const [bookLocation, setBookLocation] = useState<IBookLocation[]>()

  const handleFetchBookMenu = async () => {
    try {
      setLoadingMenu(true)
      const response = await apiBookMenu()
      if (response.status == 'T') setBookMenu(response.data)
    } catch (error) {
      setLoadingMenu(false)
    } finally {
      setLoadingMenu(false)
    }
  }

  const handleFetchBookLocation = async () => {
    try {
      setLoadingLocation(true)
      const response = await apiBookLocation()
      if (response.status == 'T') setBookLocation(response.data)
    } catch (error) {
      setLoadingLocation(false)
    } finally {
      setLoadingLocation(false)
    }
  }

  useEffect(() => {
    handleFetchBookMenu()
    handleFetchBookLocation()
    dispatch(setShowNavbar(true))
  }, [])

  const handleMappingMenu = (data: string) => {
    if (bookMenu?.find(val => val.descGcm === data)) return true
    return false
  }

  const handleMappingLocation = (data: string) => {
    if (bookLocation?.find(val => val.descGcm === data)) return true
    return false
  }

  return (
    <div className="bg-[#FFFFFF]">
      <div className="p-3">
        <div className="text-heading xs semibold-16 text-[#2C598D] mb-4">Pilih Kebutuhan</div>

        <div className="grid grid-cols-3 gap-2">
          {loadingMenu &&
            [0, 1, 2].map(val => (
              <div key={val} className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md animate-pulse">
                <div className="mx-auto w-16 h-16 bg-[#2C598D] rounded-md"></div>
                <span className="mx-auto w-full h-3 bg-[#2C598D] rounded"></span>
              </div>
            ))}

          {!loadingMenu && handleMappingMenu('Booking Asset') && (
            <button
              onClick={() => {
                setIsOpen(true)
                setLinkState('/booking-asset')
              }}
              className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md"
            >
              <IconBookingAsset className="mx-auto" />
              <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">Booking Asset</span>
            </button>
          )}
          {!loadingMenu && handleMappingMenu('Building Maintenance Management') && (
            <Link href={'/building-maintenance'}>
              <button
                onClick={() => {
                  setLinkState('/building-maintenance')
                }}
                className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md"
              >
                <IconBuildingMaintenance className="mx-auto" />
                <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">
                  Building Maintenance Management
                </span>
              </button>
            </Link>
          )}
          {!loadingMenu && handleMappingMenu('About Us') && (
            <button className="bg-[#2C598D]/[.08] p-4 flex flex-col space-y-3 rounded-md">
              <IconAboutUs className="mx-auto" />
              <span className="text-[#2C598D] text-extra-small regular-12 mx-auto">About Us</span>
            </button>
          )}
        </div>
      </div>

      <Modal isOpen={isOpen} backdropClick={() => setIsOpen(!isOpen)}>
        <div className="mx-2 sm:mx-0 max-w-[350px] bg-white relative p-5 text-center rounded-xl">
          <button className="absolute top-5 right-5" onClick={() => setIsOpen(!isOpen)}>
            <IconClose />
          </button>
          <div className="text-modal title mb-1">Pilih lokasi</div>
          <div className="text-modal desc text-[#717171] mb-6 px-10">
            Tentukan lokasi “Booking Asset” yang Anda butuhkan
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {loadingLocation &&
              [0, 1].map(val => (
                <div key={val} className="justify-self-stretch w-full animate-pulse">
                  <div className="text-center text-white w-full shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden">
                    <div className="pt-6 pb-6">
                      <div className="w-[82px] h-[103px] mx-auto bg-[#2C598D]"></div>
                    </div>
                    <div className="bg-[#2C598D] text-modal button py-5 w-full"></div>
                  </div>
                </div>
              ))}

            {!loadingLocation && handleMappingLocation('ACC') && (
              <Link href={`${linkState}`} className="justify-self-stretch w-full">
                <button
                  onClick={() => {
                    dispatch(setBookingLocation('ACC'))
                    setIsOpen(false)
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
                    />
                  </div>
                  <div className="bg-[#2C598D] text-modal button py-5">ACC</div>
                </button>
              </Link>
            )}

            {!loadingLocation && handleMappingLocation('BERIJALAN') && (
              <Link href={`${linkState}`} className="justify-self-stretch w-full">
                <button
                  onClick={() => {
                    dispatch(setBookingLocation('BERIJALAN'))
                    setIsOpen(false)
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
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
