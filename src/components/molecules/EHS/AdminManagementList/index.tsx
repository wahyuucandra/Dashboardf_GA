'use client'

import IconChevronBottom from '@assets/icons/IconChevronBottom'
import IconCloudDownload from '@assets/icons/IconCloudDownload'
import IconFilter from '@assets/icons/IconFilter'
import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import IconSearch from '@assets/icons/IconSearch'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import Pagination from '@components/atoms/Pagination'
import { ManagementType } from '@interfaces/ehs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { listData } from './data'
import './style.css'

export function AdminManagementList() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const queryType = searchParams.get('type')

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isValidationModalOpen, setIsValidationModalOpen] = useState<boolean>(false)
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')

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
          <IconScheduleRoom></IconScheduleRoom>
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

      <div className="px-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="flex-1 search-input h-[38px] px-3 flex items-center justify-center space-x-3 border border-[#D6D6D6] rounded-lg">
            <IconSearch color="#424242"></IconSearch>
            <input type="text" placeholder="Cari Nama Cabang" className="flex-1 text-paragraph regular-14 mt-1" />
          </div>
          <button type="button" className="rounded-md p-2 bg-[#E6E5E6]" onClick={() => setFilterOpen(true)}>
            <IconFilter></IconFilter>
          </button>
        </div>
      </div>

      <div className="px-4 mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex-1 text-heading xs semibold-16">Jumlah : 24 Request</div>
          <button type="button" className="border border-[#0089CF] rounded-md flex items-center space-x-1 p-1">
            <IconCloudDownload width={15} height={15} color="#0089CF"></IconCloudDownload>
            <span className="text-extra-small regular-12 text-[#0089CF]">Download</span>
          </button>
        </div>
      </div>

      <div className="px-4 pb-20">
        {listData &&
          listData?.map(val => (
            <Link key={val.id} href={`/building-maintenance/ehs/admin-management/${val.id}`}>
              <div className="mb-5 py-2 px-4 rounded border border-[#E4E4E4] shadow-[1px_2px_6px_0px_#0000001A] text-heading xs regular-16 text-[#0C0C0C]">
                {val.title}
              </div>
            </Link>
          ))}

        <div className="pt-6 flex justify-center">
          <Pagination></Pagination>
        </div>
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
                router.push(`/booking-asset/room`, { scroll: false })
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
            ></Image>
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

      <Modal isOpen={isFilterOpen} isFloating={false} backdropClick={() => setFilterOpen(false)}>
        <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 text-center rounded-t-xl">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="text-heading s semibold-18">Filter Lokasi Cabang</div>

              <button
                onClick={() => {
                  setFilterOpen(false)
                }}
              >
                <div className=" text-extra-small semibold-12 text-[#2C598D]">Reset</div>
              </button>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <label className="flex text-paragraph regular-14">
              <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Semua Lokasi</span>
              <div className="custom-radio">
                <input
                  type="radio"
                  onChange={() => setLocation('all')}
                  defaultChecked={location === 'all'}
                  name="radio"
                />

                <span className="radio"></span>
              </div>
            </label>
            <div className="divider"></div>
            <label className="flex text-paragraph regular-14 space-x-6">
              <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">DKI 1</span>
              <button type="button">
                <IconChevronBottom width={24} height={24}></IconChevronBottom>
              </button>
              <div className="custom-radio">
                <input
                  type="radio"
                  onChange={() => setLocation('dki1')}
                  defaultChecked={location === 'dki1'}
                  name="radio"
                />

                <span className="radio"></span>
              </div>
            </label>
            <div className="divider"></div>
            <div className="pl-4">
              <label className="flex text-paragraph regular-14 space-x-6">
                <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Harapan Indah</span>
                <div className="custom-radio">
                  <input
                    type="radio"
                    onChange={() => setLocation('dki1')}
                    defaultChecked={location === 'dki1'}
                    name="radio"
                  />

                  <span className="radio"></span>
                </div>
              </label>
              <div className="divider"></div>
              <label className="flex text-paragraph regular-14 space-x-6">
                <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Pondok Indah</span>
                <div className="custom-radio">
                  <input
                    type="radio"
                    onChange={() => setLocation('dki1')}
                    defaultChecked={location === 'dki1'}
                    name="radio"
                  />

                  <span className="radio"></span>
                </div>
              </label>
              <div className="divider"></div>
              <label className="flex text-paragraph regular-14 space-x-6">
                <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Blok M</span>
                <div className="custom-radio">
                  <input
                    type="radio"
                    onChange={() => setLocation('dki1')}
                    defaultChecked={location === 'dki1'}
                    name="radio"
                  />

                  <span className="radio"></span>
                </div>
              </label>
              <div className="divider"></div>
            </div>
            <label className="flex text-paragraph regular-14 space-x-6">
              <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">DKI 2</span>
              <button type="button">
                <IconChevronBottom width={24} height={24}></IconChevronBottom>
              </button>
              <div className="custom-radio">
                <input
                  type="radio"
                  onChange={() => setLocation('dki2')}
                  onClick={() => setLocation('dki2')}
                  defaultChecked={location === 'dki2'}
                  name="radio"
                />

                <span className="radio"></span>
              </div>
            </label>
            <div className="divider"></div>
            <div className="pl-4">
              <label className="flex text-paragraph regular-14 space-x-6">
                <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Rawamangun</span>
                <div className="custom-radio">
                  <input
                    type="radio"
                    onChange={() => setLocation('dki1')}
                    defaultChecked={location === 'dki1'}
                    name="radio"
                  />

                  <span className="radio"></span>
                </div>
              </label>
              <div className="divider"></div>
              <label className="flex text-paragraph regular-14 space-x-6">
                <span className="flex-1 text-left text-heading xs semibold-16 text-[#0C0C0C]">Cawang</span>
                <div className="custom-radio">
                  <input
                    type="radio"
                    onChange={() => setLocation('dki1')}
                    defaultChecked={location === 'dki1'}
                    name="radio"
                  />

                  <span className="radio"></span>
                </div>
              </label>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
