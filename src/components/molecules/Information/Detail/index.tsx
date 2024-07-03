'use client'

import Header from '@components/atoms/Header'

import { information } from './data'

import Image from 'next/image'

export function Detail() {
  return (
    <>
      <Header prevLink="/informations" title="Detail Informasi" key={'header'}></Header>
      <div className="pt-16 h-screen">
        <Image
          width={0}
          height={0}
          sizes="100"
          className="object-cover w-full h-[188px]"
          src={information.banner}
          alt={'banner' + information.id}
        ></Image>
        <div className="p-6">
          <div className="flex items-center justify-between rounded bg-white px-4 py-2 border border-[#CCD7E1] mb-4">
            <span className="text-extra-small regular-12 text-[#909090]">Tanggal Upload</span>
            <span className="text-extra-small semibold-12 text-[#2C598D]">{information.date}</span>
          </div>
          <div className="text-heading xs semibold-16 text-[#000000] mb-3">{information.title}</div>
          <div className="text-paragraph regular-14 text-[#717171]">{information.desc}</div>
        </div>
      </div>
    </>
  )
}
