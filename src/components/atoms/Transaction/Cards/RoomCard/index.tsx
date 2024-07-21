'use client'

import IconDotsVertical from '@assets/icons/IconDotsVertical'
import bannerScheduleRoom from '@assets/images/bannerScheduleRoom.png'
import Image from 'next/image'
import './style.css'
import { RoomStatus, RoomStatusClassEnum } from '@interfaces/room-enum'

export function RoomCard({ status, onButtonClicked }: { status: RoomStatus; onButtonClicked?: () => void }) {
  const enums = new RoomStatusClassEnum()

  return (
    <div className={`rounded-xl overflow-hidden border border-[#D5D5D5]`}>
      {/* Item Vehicle */}
      <div className="border border-[#D5D5D5] p-3 rounded-md">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1">Room</div>
            <div className="text-paragraph regular-14 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            <div className={enums.find(status)?.badgeClass}>{enums.find(status)?.text}</div>
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
              src={bannerScheduleRoom.src}
              className="w-full h-full object-cover"
              alt="Banner 1"
            ></Image>
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-paragraph semibold-14 text-[#0C0C0C]">Meeting Room</div>
            <div className="text-extra-small regular-12 text-[#909090]">Lantai 1 - 101</div>
          </div>
        </div>
      </div>
    </div>
  )
}
