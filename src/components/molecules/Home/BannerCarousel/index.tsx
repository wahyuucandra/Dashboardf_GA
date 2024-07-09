'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { banners } from './data'

export function BannerCarousel() {
  const initialize = useRef<boolean>(false)

  const carouselRef = useRef<HTMLDivElement>(null)

  const [counter, setCounter] = useState<number>(0)

  const handleAnimateBanner = () => {
    if (carouselRef.current) {
      setInterval(() => {
        const width = carouselRef.current?.offsetWidth
        const currentScroll = carouselRef.current?.scrollLeft

        if (width && currentScroll != null) {
          const diffScroll = (currentScroll || 0) % width

          const scroll = currentScroll / (banners.length - 1) == width ? 0 : currentScroll + (width - diffScroll)

          const val = Math.floor(scroll / width)
          setCounter(val)

          carouselRef.current?.scrollTo({ left: scroll, behavior: 'smooth' })
        }
      }, 3000)
    }
  }

  const handleAnimatePointer = (index: number) => {
    return counter == index ? 'bg-[#1E1E1E] w-[22px]' : 'bg-[#D9D9D9] w-[7px]'
  }

  useEffect(() => {
    if (!initialize.current) {
      handleAnimateBanner()
      initialize.current = true
    }
  }, [])

  return (
    <div className="w-screen">
      <div ref={carouselRef} className={`whitespace-nowrap overflow-x-auto transition-all duration-300`}>
        {banners.map((val, index) => {
          return (
            <Link key={val.alt} href={`/informations/banner${index}`} className="w-screen h-[198px] inline-block">
              <Image
                key={val.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
                src={val.src}
                alt={val.alt}
              ></Image>
            </Link>
          )
        })}
      </div>

      <div className="px-3 py-2 flex items-center">
        <div className="flex-1 flex items-center space-x-2">
          {banners.map((val, index) => {
            return (
              <div key={val.alt} className={`transition-all rounded-full h-[7px] ${handleAnimatePointer(index)}`}></div>
            )
          })}
        </div>

        <Link className="text-extra-small regular-12 text-[#0089CF]" href={'/informations'}>
          Lihat Semua
        </Link>
      </div>
    </div>
  )
}
