'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import SelectInput from '@components/atoms/Form/Select'
import { useState } from 'react'

export function AllNotification() {
  const [location, setLocation] = useState([])
  const option = [
    { id: 1, name: 'Semua Lokasi' },
    {
      id: 2,
      name: 'ACC HO',
    },
    {
      id: 3,
      name: 'Berijalan',
    },
  ]

  return (
    <div className="bg-white w-full fixed bottom-0 top-0 z-[101] px-4 pt-4">
      <div className="flex flex-row mb-2 items-center ">
        <IconChevronLeft width={24} height={24} className="mr-2" />
        <span className="font-semibold text-[18px]">Notifikasi</span>
      </div>
      <div>
        <SelectInput
          options={option}
          value={location}
          placeholder="Pilih opsi"
          className="w-full mr-2"
          onChange={(selectedOption: any) => {
            setLocation(selectedOption)
          }}
        />
      </div>
    </div>
  )
}
