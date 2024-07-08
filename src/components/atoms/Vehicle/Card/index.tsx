'use client'

import IconPlateNumber from '@assets/icons/IconPlateNumber'
import { Vehicle } from '@interfaces/vehicle'
import Image from 'next/image'

export function Card({ vehicle }: { vehicle: Vehicle }) {
  const handleCheckIsAvailabel = (vehicle: Vehicle) => {
    if (!vehicle.isAvailabel) return 'opacity-40'
  }

  return (
    <div
      className={`rounded-xl overflow-hidden border border-[#E1E7EA] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] ${handleCheckIsAvailabel(vehicle)}`}
    >
      <Image
        width={0}
        height={0}
        sizes="100"
        className="w-full h-[134px]"
        src={vehicle.banner}
        alt={`Banner${vehicle.id}`}
      ></Image>

      <div className="py-2 px-3">
        <div className="text-card title mb-3">{vehicle.name}</div>
        <div className="flex items-center space-x-1 text-extra-small regular-12 mb-5">
          <IconPlateNumber></IconPlateNumber> <span>{vehicle.plateType}</span>
        </div>
      </div>
    </div>
  )
}
