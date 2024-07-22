'use client'

import IconManpowerCleaning from '@assets/icons/IconManpowerCleaning'
import './style.css'

export function ManpowerProductDetail() {
  return (
    <div className="bg-[#FFFFFF] rounded-md p-3">
      <div className="text-heading xs semibold-16 mb-4">Detail Produk</div>

      <div className="border border-[#D5D5D5] p-3 rounded">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1 text-[#0C0C0C]">Manpower</div>
            <div className="text-extra-small regular-12 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            {/* <div className={`inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded`}>
              Menunggu Approval
            </div> */}
            {/* <div className={`inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded`}>
              Selesai
            </div> */}
            <div className={`inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF4040] px-2 py-[1.5px] rounded`}>
              Tidak Berhasil
            </div>
          </div>
        </div>

        <hr className="my-3 border-b border-[#E6E5E6]" />

        <div className="flex space-x-3">
          <div className="image-card w-[72px] h-[72px] rounded flex items-center justify-center">
            <IconManpowerCleaning className="m-auto"></IconManpowerCleaning>
          </div>

          <div className="flex-1">
            <div className="text-paragraph semibold-14 tetx-[#0C0C0C] mb-1">Cleaning Service</div>
          </div>
        </div>
      </div>
    </div>
  )
}
