'use client'

import { Infomation } from '@interfaces/information'
import Image from 'next/image'

export function Card({ information }: Readonly<{ information: Infomation }>) {
  return (
    <div className="relative overflow-hidden w-full border border-[#E6E5E6] rounded-md shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] mb-4">
      <div className="rounded absolute top-2 right-2 bg-white p-2 text-ultra-small regular-10 text-[#2C598D]">
        {information.date}
      </div>
      <Image
        width={0}
        height={0}
        sizes="100"
        className="object-cover w-full h-[176px]"
        src={information.banner}
        alt={'Banner' + information.id}
      ></Image>
      <div className="p-3">
        <div className="text-paragraph semibold-14 text-[#252525] mb-1">{information.title}</div>
        <div className="text-extra-small regular-12 text-[#717171] line-clamp-2">{information.desc}</div>
      </div>
    </div>
  )
}
