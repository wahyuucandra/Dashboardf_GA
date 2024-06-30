'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconSearch from '@assets/icons/IconSearch'

import banner1 from '@assets/images/bannerInformation1.png'
import banner2 from '@assets/images/bannerInformation2.png'
import banner3 from '@assets/images/bannerInformation3.png'

import './style.css'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function InfomartionList() {
  const router = useRouter()

  return (
    <>
      <header className="relative shadow flex items-center justify-center h-11">
        <button type="button" onClick={() => router.back()} className="absolute p-4 top-0 left-2">
          <IconChevronLeft width={20} height={20}></IconChevronLeft>
        </button>
        <h1 className="font-semibold text-[#2C598D]">Semua Informasi</h1>
      </header>
      <div className="px-3 pt-3 pb-20 bg-white h-screen overflow-y-auto">
        <div className="search-input mb-3 px-3 py-1 flex items-center justify-center space-x-2 border rounded">
          <IconSearch className="mt-1" width={20} height={20}></IconSearch>
          <input type="text" placeholder="Cari informasi" className="w-full text-sm" />
        </div>

        {[banner1, banner2, banner3].map((val, index) => {
          return (
            <Link key={index} href={`/informations/${index}`}>
              <div className="relative overflow-hidden w-full border border-[#E6E5E6] rounded-xl shadow-xl mb-4">
                <div className="rounded-md absolute top-2 right-2 bg-white px-2 py-1.5 text-[10px] text-[#2C598D]">
                  {' '}
                  24 Agustus 2024
                </div>
                <img className="object-cover w-full h-44" src={val.src} alt={'banner' + index} />
                <div className="p-4">
                  <div className="text-[#252525] text-sm font-semibold mb-1">Hadirilah</div>
                  <div className="text-[#717171] text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae itaque illum ratione quasi
                    similique nam molestias, tenetur quisquam.
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
