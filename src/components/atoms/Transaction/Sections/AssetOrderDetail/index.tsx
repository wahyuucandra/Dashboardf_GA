'use client'

import { ReasonInputArea } from '@components/atoms/ReasonInput'
import './style.css'

export function AssetOrderDetailSection() {
  return (
    <div className="bg-[#FFFFFF] rounded-md  p-3">
      <div className="text-heading xs semibold-16 mb-4">Rincian Peminjaman</div>

      <div className="text-paragraph regular-14">
        <div className="flex items-center justify-between">
          <span className="text-[#505050]">Lokasi</span>
          <span className="text-[#0C0C0C]">ACC HO</span>
        </div>
        <hr className="my-3 border-b border-[#E6E5E6]" />
        <div className="flex items-center justify-between">
          <span className="text-[#505050]">Tanggal</span>
          <span className="text-[#0C0C0C]">23 Mei - 24 Mei 2024</span>
        </div>
        <hr className="my-3 border-b border-[#E6E5E6]" />
        <div className="flex items-center justify-between">
          <span className="text-[#505050]">Jam</span>
          <span className="text-[#0C0C0C]">16:00 - 18:00</span>
        </div>
        <hr className="my-3 border-b border-[#E6E5E6]" />
        <div className="flex items-center justify-between">
          <span className="text-[#505050]">Periode Peminjaman</span>
          <span className="text-[#0C0C0C]">1 Hari</span>
        </div>
        <hr className="my-3 border-b border-[#E6E5E6]" />
        <div>
          <div className="text-[#505050] mb-3">Keperluan</div>
          <ReasonInputArea
            bgColor="bg-[#F6F6F6]"
            disabled={true}
            showCounter={false}
            value={'Acara ramadhan di lantai 5'}
          ></ReasonInputArea>
        </div>
      </div>
    </div>
  )
}
