'use client'

import Image from 'next/image'
import { useState } from 'react'

import IconClose from '@assets/icons/IconClose'
import { Modal } from '@components/atoms/ModalCustom'
import { Photo } from '@interfaces/photo'

export function BannerImage({ isLoading, photos }: Readonly<{ isLoading?: boolean; photos: Photo[] }>) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [photo, setPhoto] = useState<Photo>(photos[0])

  return (
    <>
      {isLoading}
      <div className="fixed top-0 bg-white">
        <Image
          width={0}
          height={0}
          sizes="100"
          className="cursor-pointer object-cover w-screen max-container h-[188px] mb-0.5"
          onClick={() => setIsOpen(true)}
          onKeyDown={() => {}}
          src={photos[0].image}
          alt="Banner 1"
        />

        <div className="grid grid-cols-3 gap-0.5 w-screen max-container">
          <Image
            width={0}
            height={0}
            sizes="100"
            className="cursor-pointer object-cover w-full h-[74px]"
            onClick={() => setIsOpen(true)}
            onKeyDown={() => {}}
            src={photos[1].image}
            alt="Banner 2"
          />

          <Image
            width={0}
            height={0}
            sizes="100"
            className="cursor-pointer object-cover w-full h-[74px]"
            onClick={() => setIsOpen(true)}
            onKeyDown={() => {}}
            src={photos[2].image}
            alt="Banner 3"
          />

          <div onClick={() => setIsOpen(true)} onKeyDown={() => {}} className="relative overflow-hidden">
            <Image
              width={0}
              height={0}
              sizes="100"
              className="cursor-pointer object-cover w-full h-[74px]"
              onClick={() => setIsOpen(true)}
              onKeyDown={() => {}}
              src={photos[3].image}
              alt="Banner 4"
            />

            <div className="absolute bottom-0 w-full h-full bg-[#000000] opacity-50"></div>
            <div className="text-banner-image more absolute top-0 flex  h-full items-center text-center justify-center w-full h-full text-white">
              +12 Foto Lainnya
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container h-4/5 bg-[#1C2931] relative rounded-t-xl">
          <div className="relative pt-4">
            <div className="flex text-center items-center justify-center">
              <div className="text-banner-image modal-title text-white">Photos</div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <IconClose
                width={24}
                height={24}
                color="#FFFFFF"
                className="absolute top-3 left-3 text-white"
              ></IconClose>
            </button>

            <div className="py-24">
              <Image
                width={0}
                height={0}
                sizes="100"
                className="w-full cursor-pointer object-cover"
                src={photo?.image}
                alt="Banner Detail"
              />
            </div>

            <div className="px-4 text-white bg-[#14232A]">
              <div className="text-heading xs semibold-16 pt-4 mb-20">{photo?.desc}</div>
              <div className="text-heading xs regular-16 flex justify-end mb-2">
                {photo?.id}/{photos?.length}
              </div>
            </div>

            <div className="whitespace-nowrap overflow-x-auto pb-6">
              {photos?.map((val, index) => (
                <div onClick={() => setPhoto(val)} onKeyDown={() => {}} key={index} className={`inline-block pr-0.5`}>
                  <Image
                    width={0}
                    height={0}
                    sizes="100"
                    className="w-16 h-16 cursor-pointer object-cover"
                    src={val?.image}
                    alt={`Banner ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
