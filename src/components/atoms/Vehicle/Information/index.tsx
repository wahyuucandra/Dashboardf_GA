'use client'

import IconGasStation from '@assets/icons/IconGasStation'
import IconManual from '@assets/icons/IconManual'
import IconPerson from '@assets/icons/IconPerson'
import IconPlateNumber from '@assets/icons/IconPlateNumber'
import { VehicleDetail } from '@interfaces/vehicle'

export function Information({ vehicle }: Readonly<{ vehicle?: VehicleDetail }>) {
  return (
    <div className="text-paragraph regular-14 text-[#505050]">
      <div className="flex items-center space-x-3 mb-6">
        <IconPerson className="-mt-1" />
        <span>{vehicle?.capacity} orang</span>
      </div>
      <div className="flex items-center space-x-3 mb-6">
        <IconManual className="-mt-1" />
        <span>{vehicle?.type}</span>
      </div>
      <div className="flex items-center space-x-3 mb-6">
        <IconPlateNumber className="-mt-1" />
        <span>{vehicle?.plateType}</span>
      </div>
      <div className="flex items-center space-x-3">
        <IconGasStation className="-mt-1" />
        <span>{vehicle?.fuel}</span>
      </div>
    </div>
  )
}
