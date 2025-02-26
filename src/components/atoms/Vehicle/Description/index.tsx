'use client'

import { VehicleDetail } from '@interfaces/vehicle'

export function Description({ vehicle }: Readonly<{ vehicle?: VehicleDetail }>) {
  return <div className="text-room-detail title text-[#101010]">{vehicle?.name}</div>
}
