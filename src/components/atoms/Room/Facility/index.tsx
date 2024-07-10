'use client'

import { RoomDetail } from '@interfaces/room'

export function Facility({ room, onButtonClick }: Readonly<{ room?: RoomDetail; onButtonClick?: () => void }>) {
  return (
    <>
      <div className="flex items-center mb-3">
        <div className="text-room-detail title flex-1">Fasilitas Ruangan</div>
        <button onClick={onButtonClick} className="text-paragraph regular-14 text-[#2C598D]">
          Lihat Semua
        </button>
      </div>

      <div className="text-room-detail list text-[#000000]">
        {room?.facility?.map((val, index) => (
          <div key={val ?? index} className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 bg-[#000000] rounded-full -mt-1"></span>
            <span>{val}</span>
          </div>
        ))}
      </div>
    </>
  )
}
