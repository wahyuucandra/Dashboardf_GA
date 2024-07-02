'use client'

import IconChair from '@assets/icons/IconChair'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconScheduleRoom from '@assets/icons/IconScheduleRoom'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import './style.css'

import IconClose from '@assets/icons/IconClose'
import { Room, RoomType, roomTypes, roomsData } from './data'

import confirmationDanger from '@assets/images/confirmationDanger.png'

import { Modal } from '@components/atoms/modalCustom'

export default function ScheduleRoom() {
  const initialize = useRef<boolean>(false)

  const router = useRouter()

  const [isOpen, setOpen] = useState<boolean>(false)

  const [selectedTypes, setSelectedTypes] = useState<RoomType[]>()
  const [rooms, setRooms] = useState<Room[]>()

  const handleFetchRooms = () => {
    setRooms(roomsData)
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

  const handleClassRoomType = (input: RoomType) => {
    return selectedTypes?.includes(input)
      ? 'bg-[#E5F2FC] border-[#0089CF] text-[#0089CF]'
      : 'border-[#B1B1B1] text-[#0C0C0C]'
  }

  const handleClassRoom = (input: Room) => {
    if (!selectedTypes?.length) {
      return ''
    }

    return selectedTypes?.includes(input.type) ? '' : 'hidden'
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchRooms()
      initialize.current = true
    }
  }, [])

  return (
    <>
      {/* onClick={() => router.back()} */}
      <header className="relative shadow flex items-center justify-center h-11">
        <button type="button" onClick={() => setOpen(true)} className="absolute px-2 py-2.5 top-0 left-2">
          <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
        </button>
        <h1 className="font-semibold text-[#2C598D]">Schedule Ruangan</h1>
      </header>

      <div className="pb-20 bg-white h-screen overflow-y-auto">
        <div className="flex items-center space-x-3 px-6 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <IconScheduleRoom className="w-4 h-4 text-[#0089CF]"></IconScheduleRoom>
              <span className="font-semibold">ACC TB Simatupang</span>
            </div>
            <div className="text-sm flex items-center space-x-2">
              <span>13 Mar - 16 Mar</span> <div className="w-2 h-2 rounded-full bg-[#000000]"></div>{' '}
              <span>10 Kursi</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-[#E5F2FC] text-[#0089CF] px-3 py-2 rounded-md text-xs"
          >
            Ubah
          </button>
        </div>
        <div className="px-6 w-screen whitespace-nowrap overflow-x-auto mb-6">
          {roomTypes?.map((val, index) => (
            <div
              onClick={() => handleSelectRoomType(val)}
              key={index}
              className={`inline-block rounded-full border ${handleClassRoomType(val)}  py-1 px-3 text-sm mr-2`}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-6">
          {rooms?.map(val => (
            <div key={val.id} className={`${handleClassRoom(val)} rounded-xl overflow-hidden shadow-md`}>
              <img src={val.banner} className="rounded-sm w-full h-auto" alt="" />
              <div className="p-3">
                <div className="text-xs font-bold mb-1">{val.name}</div>
                <div className="flex items-center space-x-1 text-[8px] font-medium">
                  <IconChair></IconChair> <span>{val.capacity} Kursi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} backdropClick={() => setOpen(!isOpen)}>
        <div className="max-w-[350px] bg-white relative p-5 text-center rounded-xl">
          <div>
            <img src={confirmationDanger.src} className="mx-auto mb-2" alt="" />
          </div>
          <div className="text-xl font-semibold mb-1">Konfirmasi Pindah Menu</div>
          <div className="text-sm text-[#717171] mb-6">
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setOpen(false)
                router.push(`/booking-asset/room/schedule`, { scroll: false })
              }}
              type="button"
              className="justify-self-stretch border border-[#00376A] w-full text-center text-white font-semibold rounded-lg overflow-hidden"
            >
              <div className="text-[#00376A] py-3">Pindah</div>
            </button>
            <button
              onClick={() => {
                setOpen(false)
              }}
              type="button"
              className="justify-self-stretch w-full text-center text-white font-semibold rounded-lg overflow-hidden"
            >
              <div className="bg-[#2C598D] py-3">Batal</div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
