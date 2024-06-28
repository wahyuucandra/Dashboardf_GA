'use client'

import IconChevronLeft from '@assets/icons/iconChevronLeft'

import banner1 from '@assets/images/bannerInformation1.png'

export default function InformationDetail() {
  return (
    <>
      <header className="relative shadow flex items-center justify-center h-11">
        <button className="absolute p-4 top-0 left-2">
          <IconChevronLeft width={20} height={20}></IconChevronLeft>
        </button>
        <h1 className="font-semibold text-[#2C598D]">Detail Informasi</h1>
      </header>
      <div className="pt-3 pb-20 bg-white h-screen overflow-y-auto">
        <div className="relative overflow-hidden w-full">
          <img className="object-cover w-full h-44" src={banner1.src} alt={'banner1'} />
          <div className="p-4">
            <div className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-[10px] border border-gray-100 mb-3">
              <span className="text-[#909090]">Tanggal Upload</span>
              <span className="text-[#2C598D]">24 Agustus 2024</span>
            </div>
            <div className="text-[#252525] text-sm font-semibold mb-1">Hadirilah</div>
            <div className="text-[#717171] text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero facere est, consequatur, sed
              cumque cum iure at adipisci beatae illum et sunt odio aspernatur eaque alias labore suscipit neque.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
