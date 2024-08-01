'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Modal } from '@components/atoms/ModalCustom'
// import bookingAsset from '@assets/images/BookingAsset.png'
import IconPlus from '@assets/icons/IconPlus'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import IconClose from '@assets/icons/IconClose'
import { BranchConditionReport, dataKondisi } from '@interfaces/building-maintenance'

export function KondisiCabang() {
  const router = useRouter()

  const [dataBranchCondition, setDataBranchCondition] = useState<BranchConditionReport>(dataKondisi)

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isValidationModalOpen, setIsValidationModalOpen] = useState<boolean>(false)

  const handleDeleteImage = (category: any) => {
    setDataBranchCondition(prev => ({ ...prev, categories: prev.categories.filter(c => c.name !== category.name) }))
  }

  return (
    <div>
      {/* Header navigation */}
      <Header
        prevLink="/building-maintenance/maintenance/management"
        title="Building Maintenance"
        key={'header'}
        useLink={false}
        onBack={() => setIsConfimationModalOpen(true)}
      />

      {/* Form kondisi cabang */}
      <div className="px-6 pt-16 overflow-hidden mb-4">
        {/* Bagian Judul */}
        <div className="mb-4">
          <p className="text-heading s semibold-18">Foto Kondisi Cabang</p>
          <p className="text-paragraph regular-14">
            Silahkan lengkapi konfirmasi di bawah ini dengan memfoto kondisi pada bangunan cabang
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {dataBranchCondition.categories.map(category => (
            <div key={category.name} className="relative">
              <div className="grid place-items-center h-[108px] w-full">
                <Image
                  src={category.photoUrl}
                  alt={category.name}
                  width={0}
                  height={0}
                  className="w-full h-[108px] object-fill rounded"
                />
                {/* Button can be hidden initially and displayed on hover */}
                <button
                  className="absolute top-0 right-0 bg-[#d8d8d8] rounded-full w-5 h-5 flex items-center justify-center hover:opacity-100 transition duration-200 ease-in-out"
                  onClick={() => handleDeleteImage(category)}
                >
                  <IconClose color="white" />
                </button>
              </div>
            </div>
          ))}

          {/* Add a placeholder or empty state if no categories exist */}
          {dataBranchCondition.categories.length === 0 && (
            <div className="col-span-2 text-center text-gray-400">Belum ada foto kondisi cabang.</div>
          )}

          {/* Tombol tambah foto */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="border border-[#4A90E2] border-dashed rounded grid place-items-center w-full h-[108px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                // Your onClick handler here
              }}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <IconPlus />
            </div>
            <p className="mt-2 text-[#4A90E2]">Tambahkan Foto</p>
          </div>
        </div>
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
                router.push(`/building-maintenance/maintenance/management`, { scroll: false })
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
    </div>
  )
}
