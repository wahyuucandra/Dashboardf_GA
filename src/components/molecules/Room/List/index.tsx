'use client'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { RoomCard } from '@components/atoms/Room'
import { Room, RoomType } from '@interfaces/room'
import Link from 'next/link'
import { useState } from 'react'
import { roomTypes, roomsData } from './data'
import { useRouter } from 'next/navigation'

import './style.css'

export function List() {
  const router = useRouter()

  const [rooms] = useState<Room[]>(roomsData)

  const [isConfimationModalOpen, setConfimationModalOpen] = useState<boolean>(false)
  const [selectedTypes, setSelectedTypes] = useState<RoomType[]>()

  const handleRoomTypeIsActive = (input: RoomType) => {
    return selectedTypes?.includes(input)
      ? 'bg-[#E5F2FC] border-[1.2px] border-[#0089CF] text-[#0089CF]'
      : 'border border-[#D5D5D5] text-[#000000]'
  }

  const handleSelectRoomType = (input: RoomType) => {
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

  const handleIsSelectTypeSame = (input: Room) => {
    if (!selectedTypes?.length) {
      return ''
    }

    return selectedTypes?.includes(input.type) ? '' : 'hidden'
  }

  return (
    <>
      <Header
        prevLink="/booking-asset/room/schedule"
        title="Schedule Ruangan"
        key={'header'}
        useLink={false}
        onBack={() => setConfimationModalOpen(true)}
      ></Header>
      <div className="px-6 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom className="w-4 h-4 text-[#0089CF]"></IconScheduleRoom>
              <span className="text-information">ACC TB Simatupang</span>
            </div>
            <div className="text-desc flex items-center space-x-2">
              <span>13 Mar - 16 Mar</span> <div className="w-2 h-2 rounded-full bg-[#000000]"></div>{' '}
              <span>10 Kursi</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setConfimationModalOpen(true)}
            className="text-button bg-[#E5F2FC] text-[#0089CF] px-3 py-2 rounded-md"
          >
            Ubah
          </button>
        </div>
        <div className="w-screen whitespace-nowrap overflow-x-auto mb-6 px-6 -mx-6">
          {roomTypes?.map((val, index) => (
            <div
              onClick={() => handleSelectRoomType(val)}
              key={index}
              className={`inline-block rounded-full  py-2 px-4 text-badge mr-2 ${handleRoomTypeIsActive(val)}`}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {rooms?.map(room => (
            <Link
              key={room.id}
              href={`/booking-asset/room/meeting-room/${room.id}`}
              className={`${handleIsSelectTypeSame(room)}`}
            >
              <RoomCard room={room}></RoomCard>
            </Link>
          ))}
        </div>
      </div>

      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setConfimationModalOpen(!isConfimationModalOpen)}>
        <div className="max-w-[350px] bg-white relative p-6 text-center rounded-xl">
          <div>
            <img src={confirmationDanger.src} className="mx-auto mb-4 w-28 h-28" alt="" />
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Konfirmasi Pindah Menu</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setConfimationModalOpen(false)
                router.push(`/booking-asset/room`, { scroll: false })
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Pindah</div>
            </button>
            <button
              onClick={() => {
                setConfimationModalOpen(false)
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
