'use client'

import IconDotsVertical from '@assets/icons/IconDotsVertical'
import IconManpowerCleaning from '@assets/icons/IconManpowerCleaning'
import './style.css'
import { ManpowerStatus, ManpowerStatusClassEnum } from '@interfaces/manpower-enum'

export function ManpowerCard({ status }: { status: ManpowerStatus }) {
  const enums = new ManpowerStatusClassEnum()

  return (
    <div className={`rounded-xl overflow-hidden border border-[#D5D5D5]`}>
      {/* Item Vehicle */}
      <div className="border border-[#D5D5D5] p-3 rounded-md">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1">Manpower</div>
            <div className="text-paragraph regular-14 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            <div className={enums.find(status)?.badgeClass}>{enums.find(status)?.text}</div>
          </div>
          <button>
            <IconDotsVertical></IconDotsVertical>
          </button>
        </div>

        <hr className="my-3 border-b border-[#E6E5E6]" />

        <div className="flex space-x-3">
          <div className="image-card w-[72px] h-[72px] rounded flex items-center justify-center">
            <IconManpowerCleaning className="w-full h-full px-4 text-[#2C598D]" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-paragraph semibold-14 text-[#0C0C0C]">Cleaning Service</div>
          </div>
        </div>
      </div>
    </div>
  )
}
