'use client'

import { IRoomDetail } from '@interfaces/room'

export function Facility({
  isLoading,
  room,
  onButtonClick,
}: Readonly<{ isLoading?: boolean; room?: IRoomDetail; onButtonClick?: () => void }>) {
  return (
    <div>
      {isLoading && (
        <div className="animate-pulse">
          <div className="flex items-center mb-3">
            <div className="w-1/2 h-5 bg-gray-200"></div>
          </div>

          <div className="text-room-detail list text-[#000000]">
            <div className="w-full h-5 bg-gray-200 mb-2"></div>
            <div className="w-full h-5 bg-gray-200 mb-2"></div>
            <div className="w-full h-5 bg-gray-200 mb-2"></div>
            <div className="w-full h-5 bg-gray-200 mb-2"></div>
          </div>
        </div>
      )}

      {!isLoading && room && (
        <>
          <div className="flex items-center mb-3">
            <div className="text-room-detail title flex-1">Fasilitas Ruangan</div>
            <button onClick={onButtonClick} className="text-paragraph regular-14 text-[#2C598D]">
              Lihat Semua
            </button>
          </div>

          <div className="text-room-detail list text-[#000000]">
            {room?.fasilitas?.map((val, index) => (
              <div key={val ?? index} className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full -mt-1"></span>
                <span>{val}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
