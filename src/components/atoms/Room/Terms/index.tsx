'use client'

import { RoomDetail } from '@interfaces/room'

export function Terms({ room }: { room?: RoomDetail }) {
  return (
    <>
      <div className="flex items-center mb-3">
        <div className="text-room-detail title flex-1 text-[#101010]">Terms & Conditions</div>
      </div>

      <div className="text-room-detail list text-[#878787]">
        <div className="mb-1">Kebijakan peminjaman untuk ruangan ini:</div>
        <ul className="text-room-detail list list-disc pl-5">
          {room?.terms?.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
      </div>
    </>
  )
}
