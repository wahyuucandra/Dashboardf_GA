'use client'

import IconChair from '@assets/icons/IconChair'
import { IRoomList } from '@interfaces/room'
import Image from 'next/image'

export function Card({ isLoading, room }: Readonly<{ isLoading?: boolean; room?: IRoomList }>) {
  return (
    <>
      {isLoading && (
        <div
          className={`rounded-xl overflow-hidden border border-[#E1E7EA] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] animate-pulse`}
        >
          <div className="rounded-b-md w-full h-[134px] bg-gray-200"></div>

          <div className="p-3">
            <div className="text-card title mb-3 h-5 w-full bg-gray-200"></div>
            <div className="text-card title mb-3 h-5 w-1/2 bg-gray-200"></div>
          </div>
        </div>
      )}

      {!isLoading && room && (
        <div className={`rounded-xl overflow-hidden border border-[#E1E7EA] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)]`}>
          {room.pathImage?.length && room.pathImage[0] && (
            <Image
              width={0}
              height={0}
              sizes="100"
              className="rounded-b-md w-full h-[134px]"
              src={room.pathImage[0]}
              alt={`Banner ${room.idRoom}`}
            ></Image>
          )}

          {!room.pathImage?.length ||
            (!room.pathImage[0] && <div className="rounded-b-md w-full h-[134px] bg-gray-200"></div>)}

          <div className="p-3">
            <div className="text-card title mb-3">{room.room}</div>
            <div className="flex items-center space-x-1 text-card desc mb-5">
              <IconChair></IconChair> <span>{room.kapasitas}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
