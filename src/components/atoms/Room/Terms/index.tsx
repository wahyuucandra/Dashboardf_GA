'use client'

import { IRoomDetail } from '@interfaces/room'

export function Terms({ isLoading, room }: Readonly<{ isLoading?: boolean; room?: IRoomDetail }>) {
  return (
    <div>
      {isLoading && (
        <div className="animate-pulse">
          <div className="flex items-center mb-3">
            <div className="text-room-detail title  text-[#101010] bg-gray-200 h-5 w-1/2"></div>
          </div>

          <div className="text-room-detail list text-[#878787] mb-4">
            <div className="mb-1 bg-gray-200 h-5 w-3/4"></div>
            <div className="bg-gray-200 h-20 w-5/6"></div>
          </div>
        </div>
      )}
      {!isLoading && room && (
        <>
          <div className="flex items-center mb-3">
            <div className="text-room-detail title flex-1 text-[#101010]">Terms & Conditions</div>
          </div>

          <div className="text-room-detail list text-[#878787] mb-4">
            <div className="mb-1">Kebijakan peminjaman untuk ruangan ini:</div>
            {/* <ul className="text-room-detail list list-disc pl-5">
              {room?.termsCondition?.map((val, index) => <li key={val ?? index}>{val}</li>)}
            </ul> */}
            <div className="text-room-detail pl-5">{room?.termsCondition}</div>
          </div>
        </>
      )}
    </div>
  )
}
