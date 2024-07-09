'use client'

import { VehicleDetail } from '@interfaces/vehicle'

export function Terms({ vehicle }: Readonly<{ vehicle?: VehicleDetail }>) {
  return (
    <>
      <div className="text-room-detail title text-[#101010] mb-3">Term & Conditions</div>
      <div className="text-room-detail list text-[#505050]">
        <div className="mb-1">Kebijakan peminjaman untuk ruangan ini:</div>
        <ul className="text-room-detail list list-disc pl-5">
          {vehicle?.terms?.map((val, index) => <li key={val ?? index}>{val}</li>)}
        </ul>
      </div>
    </>
  )
}
