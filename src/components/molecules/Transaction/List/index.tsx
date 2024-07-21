'use client'

import IconChevronBottom from '@assets/icons/IconChevronBottom'
import IconClose from '@assets/icons/IconClose'
import IconRevision from '@assets/icons/IconRevision'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { AssetCard, ManpowerCard, RoomCard, VehicleCard } from '@components/atoms/Transaction'
import { AssetStatus } from '@interfaces/asset-enum'
import { ManpowerStatus } from '@interfaces/manpower-enum'
import { RoomStatus } from '@interfaces/room-enum'
import { VehicleStatus } from '@interfaces/vehicle-enum'
import { useState } from 'react'
import './style.css'
import IconTrash2 from '@assets/icons/IconTrash2'

export function List() {
  const filterTypes = ['Semua Status', 'Semua Produk', 'Semua Tanggal']

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState<boolean>(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false)

  return (
    <>
      <Header prevLink="/booking-asset" title="Booking Transaction" key={'header'}></Header>
      <div className="px-6 pt-20 h-screen">
        <div className="whitespace-nowrap overflow-x-auto px-6 -mx-6">
          <div className="border-b border-[#E6E5E6] -mx-6 mb-6">
            <div className="mx-6 text-heading xs regular-16">
              <div className="inline-block mr-6 pb-2 px-2 border-b-2 border-[#000000]">Transaction</div>
              <div className="inline-block mr-6 pb-2 px-2">Approval</div>
            </div>
          </div>
        </div>

        <div className="whitespace-nowrap overflow-x-auto mb-6">
          {filterTypes.map(val => (
            <div
              key={val}
              onKeyDown={() => {}}
              className={`inline-block py-2 px-3 text-badge mr-2 border border-[#D5D5D5] rounded-full `}
            >
              <div className="flex items-center space-x-1">
                <span className="text-paragraph reguler-14 text-[#0C0C0C]">{val}</span>
                <IconChevronBottom height={20} width={20}></IconChevronBottom>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-[200px]">
          <AssetCard
            onButtonClicked={() => {
              setIsOpen(true)
            }}
            status={AssetStatus.RETURN}
          ></AssetCard>
          <br />
          <AssetCard
            onButtonClicked={() => {
              setIsOpen(true)
            }}
            status={AssetStatus.SUCCESS}
          ></AssetCard>
          <br />
          <AssetCard
            onButtonClicked={() => {
              setIsOpen(true)
            }}
            status={AssetStatus.DONE}
          ></AssetCard>
          <br />
          <AssetCard
            onButtonClicked={() => {
              setIsOpen(true)
            }}
            status={AssetStatus.FAILED}
          ></AssetCard>
          <br />
          <ManpowerCard status={ManpowerStatus.SUCCESS}></ManpowerCard>
          <br />
          <ManpowerCard status={ManpowerStatus.FAILED}></ManpowerCard>
          <br />
          <RoomCard status={RoomStatus.SUCCESS}></RoomCard>
          <br />
          <RoomCard status={RoomStatus.FAILED}></RoomCard>
          <br />
          <VehicleCard status={VehicleStatus.RETURN}></VehicleCard>
          <br />
          <VehicleCard status={VehicleStatus.SENDING_DOCUMENTS}></VehicleCard>
          <br />
          <VehicleCard status={VehicleStatus.PENDING_APPROVAL}></VehicleCard>
          <br />
          <VehicleCard status={VehicleStatus.SUCCESS}></VehicleCard>
          <br />
          <VehicleCard status={VehicleStatus.FAILED}></VehicleCard>
          <br />
        </div>
      </div>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 rounded-t-xl">
          <div className="pb-6">
            <div className="flex items-center space-x-4 mb-6">
              <button onClick={() => setIsOpen(false)}>
                <IconClose className="w-6 h-6"></IconClose>
              </button>
              <div className="text-xl font-semibold">Lainnya</div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false)
                setIsCancelModalOpen(true)
              }}
              type="button"
              className={`h-11 w-full py-2.5 text-heading xs semibold-16 rounded-lg flex items-center space-x-4`}
            >
              <IconTrash2></IconTrash2>
              <span>Batalkan Pengajuan</span>
            </button>

            <hr className="border-b border-[#E6E5E6] my-1" />

            <button
              onClick={() => {
                setIsOpen(false)
                setIsRescheduleModalOpen(true)
              }}
              type="button"
              className={`h-11 w-full py-2.5 text-heading xs semibold-16 rounded-lg flex items-center space-x-4`}
            >
              <IconRevision></IconRevision>
              <span>Revisi Schedule</span>
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isRescheduleModalOpen} backdropClick={() => setIsRescheduleModalOpen(!isRescheduleModalOpen)}>
        <div className="max-w-[350px] bg-white relative px-6 pb-6 pt-8 text-center rounded-xl">
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Yakin ingin reschedule?</div>
          <div className="text-paragraph regular-14 text-[#909090] mb-8 px-3">Konfirmasi reschedule</div>

          <div className="grid grid-cols-2 gap-2 justify-items-center">
            <button
              onClick={() => {
                setIsRescheduleModalOpen(false)
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
            </button>
            <button
              onClick={() => {
                setIsRescheduleModalOpen(false)
              }}
              type="button"
              className="cancel-button whitespace-nowrap w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Ya, Reschedule</div>
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isCancelModalOpen} backdropClick={() => setIsCancelModalOpen(!isCancelModalOpen)}>
        <div className="max-w-[350px] bg-white relative px-6 pb-6 pt-8 text-center rounded-xl">
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Yakin ingin batalkan transaksi?</div>
          <div className="text-paragraph regular-14 text-[#909090] mb-8 px-3">Konfirmasi pembatalan pengajuan</div>

          <div className="grid grid-cols-2 gap-2 justify-items-center">
            <button
              onClick={() => {
                setIsCancelModalOpen(false)
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
            </button>
            <button
              onClick={() => {
                setIsCancelModalOpen(false)
              }}
              type="button"
              className="cancel-button whitespace-nowrap w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Ya, Batalkan</div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
