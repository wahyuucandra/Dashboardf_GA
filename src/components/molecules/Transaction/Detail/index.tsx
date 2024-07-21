'use client'

import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import Image from 'next/image'
import { useState } from 'react'
import './style.css'
import {
  // AssetOrderDetailSection,
  // AssetProductDetail,
  // KaraokeOrderDetailSection,
  // KaraokeProductDetail,
  ManpowerOrderDetailSection,
  ManpowerProductDetail,
  // RoomOrderDetailSection,
  // RoomProductDetail,
  // VehicleOrderDetailSection,
  // VehicleProductDetail,
} from '@components/atoms/Transaction'

export function Detail() {
  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

  return (
    <>
      <Header prevLink="/booking-asset/transactions" title="Detail Pesanan" key={'header'}></Header>

      <div className="px-6 pt-16 pb-6 h-screen bg-[#F6F6F6] overflow-y-auto">
        <div className="text-heading xs semibold-16 text-[#0C0C0C] -mr-6 px-2 py-2 border-b border-[#E6E5E6]">
          {/* Pesanan Berlangsung */}
          Pesanan Selesai
        </div>

        <br />

        {/* Booking Code Section */}
        <div className="bg-[#FFFFFF] rounded-md text-paragraph regular-14 p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#0C0C0C]">Kode Booking</span>
            <span className="text-[#505050]">F-2468623081</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#0C0C0C]">Tanggal Selesai</span>
            <span className="text-[#505050]">Kamis, 24 Mei 2024</span>
          </div>
        </div>

        <br />

        {/* Product Detail Section */}
        {/* <VehicleProductDetail></VehicleProductDetail> */}
        {/* <RoomProductDetail></RoomProductDetail> */}
        {/* <KaraokeProductDetail></KaraokeProductDetail> */}
        {/* <AssetProductDetail></AssetProductDetail> */}
        <ManpowerProductDetail></ManpowerProductDetail>
        <br />

        {/* Order Detail Section */}
        {/* <VehicleOrderDetailSection></VehicleOrderDetailSection> */}
        {/* <RoomOrderDetailSection></RoomOrderDetailSection> */}
        {/* <KaraokeOrderDetailSection></KaraokeOrderDetailSection> */}
        {/* <AssetOrderDetailSection></AssetOrderDetailSection> */}
        <ManpowerOrderDetailSection></ManpowerOrderDetailSection>
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
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Tidak Bisa Pindah Menu</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Harap kembalikan barang sebelum melanjutkan
          </div>

          <button
            onClick={() => {
              setIsConfimationModalOpen(false)
            }}
            type="button"
            className="back-button w-full text-center text-white rounded-md overflow-hidden h-11"
          >
            <div className="py-2.5 px-6 text-heading xs semibold-16">Kembali</div>
          </button>
        </div>
      </Modal>
    </>
  )
}
