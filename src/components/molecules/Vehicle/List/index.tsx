'use client'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { VehicleCard } from '@components/atoms/Vehicle'
import { OperationType, Vehicle } from '@interfaces/vehicle'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { operationTypes, vehiclesData } from './data'
import './style.css'

export function List() {
  const router = useRouter()

  const [vehicles] = useState<Vehicle[]>(vehiclesData)

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [selectedTypes, setSelectedTypes] = useState<OperationType[]>()

  const handleOperationTypeIsActive = (input: OperationType) => {
    return selectedTypes?.includes(input)
      ? 'bg-[#E5F2FC] border-[1.2px] border-[#0089CF] text-[#0089CF]'
      : 'border border-[#D5D5D5] text-[#000000]'
  }

  const handleSelectOperationType = (input: OperationType) => {
    setSelectedTypes(prev => {
      if (prev) {
        const data = prev

        if (data?.includes(input)) {
          const newData = data.filter(val => val != input)
          return [...newData]
        }

        return [...data, input]
      }

      return [input]
    })
  }

  const handleIsSelectTypeSame = (input: Vehicle) => {
    if (!selectedTypes?.length) {
      return ''
    }

    return selectedTypes?.includes(input.operationType) ? '' : 'hidden'
  }

  return (
    <>
      <Header
        prevLink="/booking-asset/vehicle/schedule"
        title="Vehicle"
        key={'header'}
        useLink={false}
        onBack={() => setIsConfimationModalOpen(true)}
      ></Header>
      <div className="px-6 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom></IconScheduleRoom>
              <span className="text-information">ACC TB Simatupang</span>
            </div>
            <div className="text-desc flex items-center space-x-2">
              <span>13 Maret 2024</span>{' '}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsConfimationModalOpen(true)}
            className="text-button bg-[#E5F2FC] text-[#0089CF] px-3 py-2 rounded-md"
          >
            Ubah
          </button>
        </div>
        <div className="w-screen whitespace-nowrap overflow-x-auto mb-6 px-6 -mx-6">
          {operationTypes?.map(val => (
            <div
              onClick={() => handleSelectOperationType(val)}
              onKeyDown={() => {}}
              key={val.id}
              className={`inline-block rounded-full  py-2 px-4 text-badge mr-2 ${handleOperationTypeIsActive(val)}`}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {vehicles?.map(vehicle => (
            <Link
              key={vehicle.id}
              href={`/booking-asset/vehicle/special-operational/${vehicle.id}`}
              className={`${handleIsSelectTypeSame(vehicle)}`}
            >
              <VehicleCard vehicle={vehicle}></VehicleCard>
            </Link>
          ))}
        </div>
      </div>

      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}>
        <div className="max-w-[350px] bg-white relative p-6 text-center rounded-xl">
          <div>
            <Image
              width={0}
              height={0}
              sizes="100"
              src={confirmationDanger.src}
              className="mx-auto mb-4 w-28 h-28"
              alt="confirmation"
            ></Image>
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Konfirmasi Pindah Menu</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
                router.push(`/booking-asset/vehicle`, { scroll: false })
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Pindah</div>
            </button>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
              }}
              type="button"
              className="cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Batal</div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
