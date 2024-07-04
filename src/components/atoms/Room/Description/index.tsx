'use client'

import { RoomDetail } from '@interfaces/room'

export function Description({ room }: { room?: RoomDetail }) {
  return (
    <>
      <div className="text-room-detail title text-[#101010] mb-3">{room?.name}</div>
      <div className="text-room-detail desc text-[#878787]">{room?.desc}</div>
    </>
  )
}
