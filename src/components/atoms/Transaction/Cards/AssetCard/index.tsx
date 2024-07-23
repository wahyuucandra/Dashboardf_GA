'use client'

import IconAsset from '@assets/icons/IconAsset'
import IconDotsVertical from '@assets/icons/IconDotsVertical'
import './style.css'
import { AssetStatus, AssetStatusClassEnum } from '@interfaces/asset-enum'

export function AssetCard({ status, onButtonClicked }: { status: AssetStatus; onButtonClicked?: () => void }) {
  const enums = new AssetStatusClassEnum()

  // const handleBadgeColor = (statusVal: AssetStatus) => {
  //   console.log(enums?.find(statusVal)?.badgeClass)
  //   return enums?.find(statusVal)?.badgeClass
  // }
  return (
    <div className={`rounded-xl overflow-hidden border border-[#D5D5D5]`}>
      {/* Item Vehicle */}
      <div className="border border-[#D5D5D5] p-3 rounded-md">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1">Asset</div>
            <div className="text-paragraph regular-14 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            <div className={`${enums?.find(status)?.badgeClass}`}>{enums.find(status)?.text}</div>
            <div
              className={`${status === AssetStatus.RETURN ? '' : 'hidden'} mt-1 text-extra-small regular-12 text-[#909090]`}
            >
              Pengembalian 19 Okt, 18:00
            </div>
            <div
              className={`${status === AssetStatus.SUCCESS ? '' : 'hidden'} mt-1 text-extra-small regular-12 text-[#909090]`}
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
          <div className="image-card w-[72px] h-[72px] rounded flex items-center justify-center">
            <IconAsset className="m-auto"></IconAsset>
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-extra-small regular-12 text-[#909090]">Proyektor</div>
            <div className="text-extra-small regular-12 text-[#909090]">Kamera</div>
            <div className="text-extra-small regular-12 text-[#909090]">Kabel HDMI</div>
            <div className="text-extra-small regular-12 text-[#909090]">More 4 items*</div>
          </div>
        </div>
      </div>
    </div>
  )
}
