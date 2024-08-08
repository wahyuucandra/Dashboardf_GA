'use client'

import { IRoomDetail } from '@interfaces/room'

export function Description({ isLoading, room }: Readonly<{ isLoading?: boolean; room?: IRoomDetail }>) {
  return (
    <div>
      {isLoading && (
        <div className="animate-pulse">
          <div className="mb-3 h-5 w-full bg-gray-200"></div>
          <div className="h-24 w-full bg-gray-200"></div>
        </div>
      )}
      {!isLoading && room && (
        <>
          <div className="text-room-detail title text-[#101010] mb-3">{room?.room}</div>
          <div className="text-room-detail desc text-[#878787] text-justify">{room?.deskripsi}</div>
        </>
      )}
    </div>
  )
}
