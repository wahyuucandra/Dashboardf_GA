'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { IBuildingMaintenanceService, IBuildingMaintenanceServiceType } from '@interfaces/building-maintenance'
import {
  MaintenancePengajuan,
  MaintenanceBudget,
  MaintenanceHistory,
  MaintenanceReport,
  MaintenanceStandar,
} from '@components/atoms/Maintenance'
import { Modal } from '@components/atoms/ModalCustom'
import Header from '@components/atoms/Header'
import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import { ISecurityGuardService } from '@interfaces/security-guard'

export const serviceMaintenanceType: ISecurityGuardService[] = [
  {
    id: 'pengajuan-perbaikan',
    text: 'Pengajuan Perbaikan',
  },
  {
    id: 'budget-timeline',
    text: 'Budget & Timeline',
  },
  {
    id: 'report-kondisi-cabang',
    text: 'Report Kondisi Cabang',
  },
  {
    id: 'history-perbaikan',
    text: 'History Perbaikan',
  },
  {
    id: 'standar-cabang',
    text: 'Standar Cabang',
  },
]

export const maintenanceTypes: IBuildingMaintenanceServiceType[] = [
  {
    links: ['pengajuan-perbaikan', ''],
    text: 'Pengajuan Perbaikan',
  },
  {
    links: ['budget-timeline'],
    text: 'Budget & Timeline',
  },
  {
    links: ['report-kondisi-cabang'],
    text: 'Report Kondisi Cabang',
  },
  {
    links: ['history-perbaikan'],
    text: 'History Perbaikan',
  },
  {
    links: ['standar-cabang'],
    text: 'Standar Cabang',
  },
]

export function Management() {
  const router = useRouter()

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isValidationModalOpen, setIsValidationModalOpen] = useState<boolean>(false)

  // const searchParams = useSearchParams()
  // const pathname = usePathname()
  // const queryType = searchParams.get('type')

  // const handleShowForm = (links: string[]) => {
  //   return links.includes(queryType ?? '')
  // }

  const [selectedType, setSelectedType] = useState<IBuildingMaintenanceService | null>(null)

  const handleSelectServiceType = (input: IBuildingMaintenanceService) => {
    setSelectedType((prev: any) => (prev && prev.id === input.id ? null : input))
  }

  const handleServiceTypeIsActive = (input: IBuildingMaintenanceService) => {
    return selectedType?.id === input.id
      ? 'bg-[#E5F2FC] border-[1.2px] border-[#0089CF] text-[#0089CF]'
      : 'border border-[#D5D5D5] text-[#000000]'
  }

  const renderSelectedComponent = () => {
    switch (selectedType?.id) {
      case 'pengajuan-perbaikan':
        return (
          <MaintenancePengajuan
            onSubmitForm={() => {
              // action here
            }}
          />
        )
      case 'budget-timeline':
        return <MaintenanceBudget />
      case 'report-kondisi-cabang':
        return <MaintenanceReport />
      case 'history-perbaikan':
        return <MaintenanceHistory />
      case 'standar-cabang':
        return <MaintenanceStandar />
      default:
        return null
    }
  }

  return (
    <>
      {/* Header navigation */}
      <Header
        prevLink="/building-maintenance/maintenance"
        title="Building Maintenance"
        key={'header'}
        useLink={false}
        onBack={() => setIsConfimationModalOpen(true)}
      />

      {/* Content */}
      <div className="px-6 pt-16 overflow-hidden">
        {/* Bagian Atas */}
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom />
              <span className="text-information">ACC TB Simatupang</span>
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

        {/* Filter */}
        <div className="w-screen max-container whitespace-nowrap overflow-x-auto mb-6 px-6 -mx-6">
          {serviceMaintenanceType?.map(val => (
            <div
              onClick={() => handleSelectServiceType(val)}
              onKeyDown={() => {}}
              key={val.id}
              className={`inline-block rounded-full py-2 px-4 text-badge mr-2 ${handleServiceTypeIsActive(val)}`}
            >
              {val.text}
            </div>
          ))}
          {/* {maintenanceTypes?.map(val => (
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
          ))} */}
        </div>

        {/* Forms content */}
        <div>{renderSelectedComponent()}</div>
        {/* <div>
          {handleShowForm(['pengajuan-perbaikan', '']) && (
            <MaintenancePengajuan
              onSubmitForm={() => {
                // action here
              }}
            />
          )}
          {handleShowForm(['budget-timeline']) && (
            <MaintenanceBudget
            // onSubmitForm={() => {
              // action here
            // }}
            />
          )}
          {handleShowForm(['report-kondisi-cabang']) && (
            <MaintenanceReport
            // onSubmitForm={() => {
              // action here
            // }}
            />
          )}
          {handleShowForm(['history-perbaikan']) && (
            <MaintenanceHistory
            // onSubmitForm={() => {
              // action here
            // }}
            />
          )}
          {handleShowForm(['standar-cabang']) && (
            <MaintenanceStandar
            // onSubmitForm={() => {
              // action here
            // }}
            />
          )}
        </div> */}
      </div>

      {/* Modal Confirmation */}
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
            />
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Konfirmasi Pindah Menu</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
                router.push(`/building-maintenance/maintenance`, { scroll: false })
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

      {/* Validation Modal */}
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
