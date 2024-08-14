'use client'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { RoomCard } from '@components/atoms/Room'
import { IRoomList, IRoomType } from '@interfaces/room'
import { apiGetListRoom } from '@services/room/api'
import { setShowNavbar } from '@store/actions/actionContainer'
import { RootState } from '@store/reducers'
import { store } from '@store/storage'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function List({ category = 'Meeting Room' }: { category?: string }) {
  const { dispatch } = store

  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)
  const roomListParams = useSelector((state: RootState) => state.dataRoom.roomListParams)

  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rooms, setRooms] = useState<IRoomList[]>()
  const [roomTypes, setRoomTypes] = useState<IRoomType[]>()
  const [selectedTypes, setSelectedTypes] = useState<IRoomType[]>()

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

  const dummies = Array.from({ length: 10 }, (_, i) => i + 1)

  const handleMappingDate = () => {
    if (roomListParams?.startBookingDate && roomListParams?.endBookingDate) {
      const startDate = moment(roomListParams?.startBookingDate)
      const endDate = moment(roomListParams?.endBookingDate)

      if (startDate == endDate) {
        return `${startDate.format('D MMM').toString()}`
      }

      if (startDate != endDate) {
        if (startDate.format('YYYY') != endDate.format('YYYY')) {
          return `${startDate.format('D MMM YYYY').toString()} - ${endDate.format('D MMM YYYY').toString()}`
        }
        return `${startDate.format('D MMM').toString()} - ${endDate.format('D MMM').toString()}`
      }
    }

    return null
  }

  const handleFetchListRoom = async (params?: any) => {
    try {
      setIsLoading(true)
      const response = await apiGetListRoom({ ...roomListParams, ...params })
      if (response.status == 'T') setRooms(response.data)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectRoomType = (input: IRoomType) => {
    setSelectedTypes(prev => {
      if (prev) {
        const data = prev

        if (data?.find(val => val.id === input.id)) {
          const newData = data.filter(val => val?.id != input?.id)

          return [...newData]
        }

        return [...data, input]
      }

      return [input]
    })
  }

  const handleMappingRoomTypes = () => {
    if (bookingLocation === 'ACC') {
      setRoomTypes([
        {
          id: 'meeting-room',
          text: 'Meeting Room',
        },
        {
          id: 'pods',
          text: 'Pods',
        },
      ])
    }

    if (bookingLocation === 'BERIJALAN') {
      setRoomTypes([
        {
          id: 'meeting-room',
          text: 'Meeting Room',
        },
        {
          id: 'ballroom',
          text: 'Ballroom',
        },
        {
          id: 'karaoke',
          text: 'Karaoke',
        },
      ])
    }
  }

  const handleSelectRoomTypeByCategory = () => {
    if (category === 'Meeting Room') {
      handleSelectRoomType({
        id: 'meeting-room',
        text: 'Meeting Room',
      })
    }

    if (category === 'Pods') {
      handleSelectRoomType({
        id: 'pods',
        text: 'Pods',
      })
    }
  }

  const handleMappingPrevLink = () => {
    switch (category) {
      case 'Meeting Room':
        return '/booking-asset/room/meeting-room/schedule'
      case 'Pods':
        return '/booking-asset/room/pods/schedule'

      default:
        break
    }
  }

  useEffect(() => {
    dispatch(setShowNavbar(true))
    handleMappingRoomTypes()
  }, [])

  useEffect(() => {
    if (roomTypes?.length) {
      handleSelectRoomTypeByCategory()
    }
  }, [roomTypes])

  useEffect(() => {
    if (selectedTypes != undefined) {
      if (selectedTypes && selectedTypes?.length == 1) {
        handleFetchListRoom({ kategoriMenu: selectedTypes[0].text })
      } else {
        handleFetchListRoom({ kategoriMenu: '' })
      }
    }
  }, [selectedTypes])

  return (
    <>
      <Header
        prevLink={handleMappingPrevLink()}
        title="Schedule Ruangan"
        key={'header'}
        useLink={false}
        onBack={() => setIsConfimationModalOpen(true)}
      ></Header>
      <div className="px-6 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom></IconScheduleRoom>
              <span className="text-information">{bookingLocation}</span>
            </div>
            <div className="text-desc flex items-center space-x-2">
              <span>{handleMappingDate()}</span> <div className="w-2 h-2 rounded-full bg-[#000000]"></div>{' '}
              <span>{roomListParams?.kapasitas} Kursi</span>
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
        <div className="w-full max-container whitespace-nowrap hide-scrollbar overflow-x-auto mb-6 -pr-6">
          {roomTypes?.map(val => (
            <div
              onKeyDown={() => {}}
              onClick={() => handleSelectRoomType(val)}
              key={val.id}
              className={`${selectedTypes?.find(selected => selected.id === val.id) ? 'badge-option-active' : 'badge-option-not-active'}`}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-40">
          {isLoading &&
            dummies?.map(dummy => (
              <div key={dummy}>
                <RoomCard isLoading={true}></RoomCard>
              </div>
            ))}

          {!isLoading &&
            rooms?.map(room => (
              <Link key={room.idRoom} href={`/booking-asset/room/meeting-room/${room.idRoom}`}>
                <RoomCard room={room}></RoomCard>
              </Link>
            ))}
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
                router.push(handleMappingPrevLink() ?? '', { scroll: false })
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
