'use client'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { RoomCard } from '@components/atoms/Room'
import { IRoom, IRoomListParams, Room, RoomType } from '@interfaces/room'
import { apiGetListRoom } from '@services/room/api'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { roomTypes, roomsData } from './data'
import './style.css'

export function List() {
  const initialRef = useRef(false)

  const router = useRouter()

  const [rooms] = useState<Room[]>(roomsData)

  const [loading, setLoading] = useState<boolean>(false)
  const [roomsApi, setRoomsApi] = useState<IRoom[]>()

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [selectedTypes, setSelectedTypes] = useState<RoomType[]>()

  const handleFetchListRoom = async () => {
    const params: IRoomListParams = {
      flagACCBerijalan: 'ACC',
      kapasitas: 10,
      kategoriMenu: 'Meeting Room',
      location: 'ACC TB Simatupang',
      timeOpen: 8,
      timeClose: 10,
      page: 1,
      size: 10,
    }

    try {
      setLoading(true)
      const response = await apiGetListRoom(params)
      if (response.status == 'T') setRoomsApi(response.data)
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialRef.current === false) {
      handleFetchListRoom()
      initialRef.current = true
    }
  }, [])

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
        onBack={() => setIsConfimationModalOpen(true)}
      ></Header>
      {roomsApi && <div className="hidden"></div>}
      {loading && <div className="hidden"></div>}
      <div className="px-6 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom></IconScheduleRoom>
              <span className="text-information">ACC TB Simatupang</span>
            </div>
            <div className="text-desc flex items-center space-x-2">
              <span>13 Mar - 16 Mar</span> <div className="w-2 h-2 rounded-full bg-[#000000]"></div>{' '}
              <span>10 Kursi</span>
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
        <div className="w-full max-container whitespace-nowrap overflow-x-auto mb-6 -pr-6">
          {roomTypes?.map(val => (
            <div
              onKeyDown={() => {}}
              onClick={() => handleSelectRoomType(val)}
              key={val.id}
              className={`inline-block rounded-full  py-2 px-4 text-badge mr-2 ${handleRoomTypeIsActive(val)}`}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-20">
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
                router.push(`/booking-asset/room/meeting-room/schedule`, { scroll: false })
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
