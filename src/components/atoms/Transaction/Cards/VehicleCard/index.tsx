'use client'

import IconDotsVertical from '@assets/icons/IconDotsVertical'
import BannerCar from '@assets/images/BannerCar.png'
import Image from 'next/image'
import './style.css'
import { VehicleStatus, VehicleStatusClassEnum } from '@interfaces/vehicle-enum'

export function VehicleCard({ status, onButtonClicked }: { status: VehicleStatus; onButtonClicked?: () => void }) {
  const enums = new VehicleStatusClassEnum()

  return (
    <div className={`rounded-xl overflow-hidden border border-[#D5D5D5]`}>
      {/* Item Vehicle */}
      <div className="border border-[#D5D5D5] p-3 rounded-md">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1">Vehicle</div>
            <div className="text-paragraph regular-14 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            <div className={enums.find(status)?.badgeClass}>{enums.find(status)?.text}</div>
            <div
              className={`${status === VehicleStatus.RETURN ? '' : 'hidden'} mt-1 text-extra-small regular-12 text-[#909090]`}
            >
              Pengembalian 31 Dec, 12:00
            </div>{' '}
            <div
              className={`${status === VehicleStatus.SENDING_DOCUMENTS ? '' : 'hidden'} mt-1 text-extra-small regular-12 text-[#909090]`}
            >
              Kirim Form sebelum 19.30
            </div>
            <div
              className={`${status === VehicleStatus.SUCCESS ? '' : 'hidden'} mt-1 text-extra-small regular-12 text-[#909090]`}
            >
              Ambil Barang pada tanggal 31 Des
            </div>
          </div>
          <button onClick={onButtonClicked}>
            <IconDotsVertical></IconDotsVertical>
          </button>
        </div>

        <hr className="my-3 border-b border-[#E6E5E6]" />

        <div className="flex space-x-3">
          <div className="image-card w-[72px] h-[72px] rounded flex items-center justify-center overflow-hidden">
            <Image
              width={0}
              height={0}
              sizes="100"
              src={BannerCar.src}
              className="w-full h-full object-cover"
              alt="Banner 1"
            ></Image>
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-paragraph semibold-14 text-[#0C0C0C]">Operational Khusus</div>
            <div className="text-extra-small regular-12 text-[#909090]">Toyota Innova Reborn 2022</div>
          </div>
        </div>
      </div>
    </div>
  )
}
