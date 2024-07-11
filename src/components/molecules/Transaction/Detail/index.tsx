'use client'

import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import Image from 'next/image'
import { useState } from 'react'
import './style.css'

export function Detail() {
  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

  return (
    <>
      <Header prevLink="/booking-asset/transactions" title="Detail Pesanan" key={'header'}></Header>

      <div className="px-6 pt-16 h-screen bg-[#F6F6F6]">
        <div className="text-heading xs semibold-16 text-[#0C0C0C] -mr-6 px-2 py-2 border-b border-[#E6E5E6]">
          Pesanan Selesai
        </div>
        <br />
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

        <div className="bg-[#FFFFFF] rounded-md  p-3">
          <div className="text-heading xs semibold-16 mb-4">Detail Produk</div>

          {/* Item Vehicle */}
          <div>
            <div className="flex items-center">
              <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Proyektor</div>
              <div className="flex-shrink-0">
                <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
                  2 items
                </div>
              </div>
            </div>
            <div className="text-paragraph regular-14 text-[#505050] mx-4 mt-2">
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Epson</div>
                <div className="col-span-2">7 Items</div>
              </div>
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Sony</div>
                <div className="col-span-2">7 Items</div>
              </div>
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Panasonic</div>
                <div className="col-span-2">7 Items</div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <div className="flex items-center">
              <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Kamera</div>
              <div className="flex-shrink-0">
                <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
                  2 items
                </div>
              </div>
            </div>
            <div className="text-paragraph regular-14 text-[#505050] mx-4 mt-2">
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Epson</div>
                <div className="col-span-2">7 Items</div>
              </div>
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Sony</div>
                <div className="col-span-2">7 Items</div>
              </div>
              <div className="grid grid-cols-3 mb-1">
                <div className="col-span-1">Panasonic</div>
                <div className="col-span-2">7 Items</div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <div className="flex items-center">
              <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Kursi</div>
              <div className="flex-shrink-0">
                <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
                  2 items
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <div className="flex items-center">
              <div className="flex-1 text-paragraph semibold-14 text-[#0C0C0C]">Meja</div>
              <div className="flex-shrink-0">
                <div className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 px-5 rounded">
                  2 items
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        {/* Order Detail */}
        <div className="bg-[#FFFFFF] rounded-md  p-3">
          <div className="text-heading xs semibold-16 mb-4">Rincian Peminjaman</div>

          <div className="text-paragraph regular-14">
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Lokasi</span>
              <span className="text-[#0C0C0C]">ACC HO</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Tanggal</span>
              <span className="text-[#0C0C0C]">23 Mei - 24 Mei 2024</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Jam</span>
              <span className="text-[#0C0C0C]">16:00 - 18:00</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Periode Peminjaman</span>
              <span className="text-[#0C0C0C]">1 Hari</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div>
              <div className="text-[#505050] mb-3">Keperluan</div>
              <ReasonInputArea
                disabled={true}
                showCounter={false}
                value={'Acara ramadhan di lantai 5'}
              ></ReasonInputArea>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={true || isConfimationModalOpen}
        backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}
      >
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
