'use client'

import IconChair from '@assets/icons/IconChair'
import { Room } from '@interfaces/room'
import Image from 'next/image'

export function Card({ room }: { room: Room }) {
  const handleCheckIsAvailabel = (room: Room) => {
    if (!room.isAvailabel) return 'opacity-40'
  }

  return (
    <div
      className={`rounded-xl overflow-hidden border border-[#E1E7EA] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] ${handleCheckIsAvailabel(room)}`}
    >
      <Image
        width={0}
        height={0}
        sizes="100"
        className="rounded-b-md w-full h-[134px]"
        src={room.banner}
        alt={`Banner${room.id}`}
      ></Image>

      <div className="p-3">
        <div className="text-card title mb-3">{room.name}</div>
        <div className="flex items-center space-x-1 text-card desc mb-5">
          <IconChair></IconChair> <span>{room.capacity} Kursi</span>
        </div>
      </div>
    </div>
  )
}
