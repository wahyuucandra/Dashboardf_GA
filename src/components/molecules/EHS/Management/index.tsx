'use client'

import Image from 'next/image'
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import {
  EHSElectricityManagementForm,
  EHSFuelManagementForm,
  EHSWasteManagementForm,
  EHSWaterManagementForm,
} from '@components/atoms/EHS'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { ManagementType } from '@interfaces/ehs'
import './style.css'

export function Management() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const queryType = searchParams.get('type')

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isValidationModalOpen, setIsValidationModalOpen] = useState<boolean>(false)

  const managementTypes: ManagementType[] = [
    {
      links: ['waste-management', ''],
      text: 'Waste Management',
    },
    {
      links: ['water-management'],
      text: 'Pengunaan Air',
    },
    {
      links: ['fuel-management'],
      text: 'Pengunaan BBM',
    },
    {
      links: ['electricity-management'],
      text: 'Pengunaan Listrik',
    },
    {
      links: ['agc'],
      text: 'AGC',
    },
    {
      links: ['p2lk3'],
      text: 'P2LK3',
    },
  ]

  const handleShowForm = (links: string[]) => {
    return links.includes(queryType ?? '')
  }

  return (
    <>
      <Header
        prevLink="/building-maintenance/ehs"
        title="EHS Management System"
        key={'header'}
        useLink={false}
        onBack={() => {
          setIsConfimationModalOpen(true)
        }}
      ></Header>
      <div className="px-4 pt-16 overflow-hidden">
        <div className="flex items-center space-x-3 py-3">
          <IconScheduleRoom/>
          <span className="flex-1 text-information">ACC TB Simatupang</span>
          <button
            type="button"
            onClick={() => setIsConfimationModalOpen(true)}
            className="text-button bg-[#E5F2FC] text-[#0089CF] px-3 py-2 rounded-md"
          >
            Ubah
          </button>
        </div>
        <div className="w-screen whitespace-nowrap overflow-x-scroll hide-scrollbar mb-6 px-6 -mx-6">
          {managementTypes?.map(val => (
            <div
              onClick={() => {
                router.replace(`${pathname}?type=${val.links[0]}`)
              }}
              onKeyDown={() => {}}
              key={val.links[0]}
              className={val.links.includes(queryType ?? '') ? 'badge-option-active' : 'badge-option-not-active'}
            >
              {val.text}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        {handleShowForm(['waste-management', '']) && (
          <EHSWasteManagementForm
            onSubmitForm={() => {
              // action here
            }}
          />
        )}
        {handleShowForm(['water-management']) && (
          <EHSWaterManagementForm
            onSubmitForm={() => {
              // action here
            }}
          />
        )}
        {handleShowForm(['fuel-management']) && (
          <EHSFuelManagementForm
            onSubmitForm={() => {
              // action here
            }}
          />
        )}
        {handleShowForm(['electricity-management']) && (
          <EHSElectricityManagementForm
            onSubmitForm={() => {
              // action here
            }}
          />
        )}
      </div>

      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}>
        <div className="mx-3 sm:mx-0 max-w-[350px] bg-white relative p-6 text-center rounded-xl">
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
                router.push(`/building-maintenance`, { scroll: false })
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

      <Modal isOpen={isValidationModalOpen} backdropClick={() => setIsValidationModalOpen(!isValidationModalOpen)}>
        <div className="mx-3 sm:mx-0 max-w-[350px] bg-white relative p-6 text-center rounded-xl">
          <div>
            <Image
              width={0}
              height={0}
              sizes="100"
              src={confirmationDanger.src}
              className="mx-auto mb-4 w-28 h-28"
              alt="confirmation"
            />
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Tidak Bisa Request!</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Cabang Anda sudah diajukan sebelumnya. Anda tidak bisa merequest lagi.
          </div>

          <div className="grid grid-cols-1 gap-4 justify-items-center">
            <button
              onClick={() => {
                setIsValidationModalOpen(false)
              }}
              type="button"
              className="cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
