'use client'

import IconCalendar from '@assets/icons/IconCalendar'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconTime from '@assets/icons/IconTime'
import { RoomBannerImage, RoomDescription, RoomFacility, RoomTerms } from '@components/atoms/Room'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRoomDetail, IRoomDetailParams, ISubmitBookingRoomPayload } from '@interfaces/room'
import { apiGetDetailRoom, apiSubmitBookingRoom } from '@services/room/api'
import { RootState } from '@store/reducers'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { photos } from './data'
import { GetCookie } from '@store/storage'
import { IOTPLoginResponse } from '@interfaces/auth'
import IconSpinner from '@assets/icons/IconSpinner'

const schema = yup.object().shape({
  cdSp: yup.string().required('cdSp wajib diisi'),
  tipeBooking: yup.string().required('Tipe Booking wajib diisi'),
  startBookingDate: yup.string().required('Tanggal awal wajib diisi'),
  endBookingDate: yup.string().required('Tanggal akhir wajib diisi'),
  startBookingTime: yup.string().required('Waktu awal wajib diisi'),
  endBookingTime: yup.string().required('Waktu akhir wajib diisi'),
  kapasitas: yup.string().required('Kapasitas wajib diisi'),
  bookingMeetingRoom: yup.string().required('Booking meeting room wajib diisi'),
  deskripsi: yup.string().required('Deskripsi wajib diisi'),
  itemId: yup.number().required('Item ID wajib diisi'),
  keperluan: yup.string().required('Keperluan wajib diisi'),
})

export function Detail({ category = 'Meeting Room' }: { category?: string }) {
  const router = useRouter()

  const paramsPage = useParams<{ meetingRoom: string }>()
  const roomListParams = useSelector((state: RootState) => state.dataRoom.roomListParams)
  const scheduleForm = useSelector((state: RootState) => state.dataRoom.scheduleForm)

  const dataUser: IOTPLoginResponse = GetCookie('data_user')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false)
  const [room, setRoom] = useState<IRoomDetail>()

  const { getValues } = useForm<ISubmitBookingRoomPayload>({
    defaultValues: {
      cdSp: dataUser?.cdSp || 'cdSp',
      tipeBooking: 'tipe 1',
      startBookingDate: roomListParams?.startBookingDate,
      endBookingDate: roomListParams?.endBookingDate,
      startBookingTime: roomListParams?.timeOpen,
      endBookingTime: roomListParams?.timeClose,
      kapasitas: roomListParams?.kapasitas?.toString(),
      bookingMeetingRoom: 'Yes',
      itemId: parseInt(paramsPage.meetingRoom),
      keperluan: scheduleForm?.reason,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const handleFetchDetailRoom = async () => {
    if (
      roomListParams?.timeOpen &&
      roomListParams?.timeClose &&
      roomListParams?.startBookingDate &&
      roomListParams?.endBookingDate
    ) {
      const params: IRoomDetailParams = {
        roomId: paramsPage.meetingRoom,
        startBookingTime: roomListParams?.timeOpen,
        endBookingTime: roomListParams?.timeClose,
        startBookingDate: roomListParams?.startBookingDate,
        endBookingDate: roomListParams?.endBookingDate,
      }

      try {
        setIsLoading(true)
        const response = await apiGetDetailRoom(params)
        if (response.status == 'T') setRoom(response.data)
      } catch (error) {
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleSubmitBookingRoom = async (payload: ISubmitBookingRoomPayload) => {
    try {
      setIsSubmitLoading(true)
      const response = await apiSubmitBookingRoom(payload, dataUser?.idUser)
      if (response.status == 'T') {
        router.push(handleMappingSuccessLink() ?? '')
      }
    } catch (error) {
      setIsSubmitLoading(false)
    } finally {
      setIsSubmitLoading(false)
    }
  }

  const handleMappingPrevLink = () => {
    switch (category) {
      case 'Meeting Room':
        return '/booking-asset/room/meeting-room'
      case 'Pods':
        return '/booking-asset/room/pods'

      default:
        break
    }
  }

  const handleMappingSuccessLink = () => {
    switch (category) {
      case 'Meeting Room':
        return '/booking-asset/room/meeting-room/success'
      case 'Pods':
        return '/booking-asset/room/pods/success'

      default:
        break
    }
  }

  const onSubmit = () => {
    const payload = getValues()
    handleSubmitBookingRoom(payload)
  }

  useEffect(() => {
    handleFetchDetailRoom()
  }, [])

  const handleShowMoreFacility = () => {}

  return (
    <>
      <div className="relative">
        <RoomBannerImage photos={photos}></RoomBannerImage>

        <div className="fixed top-4 ml-4">
          <Link
            href={handleMappingPrevLink() ?? ''}
            className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <div className="px-6 py-[290px] overflow-y-auto">
          <RoomDescription isLoading={isLoading} room={room}></RoomDescription>
          <br />
          <RoomFacility isLoading={isLoading} room={room} onButtonClick={handleShowMoreFacility}></RoomFacility>
          <br />
          <RoomTerms isLoading={isLoading} room={room}></RoomTerms>
        </div>
      </div>

      <div className="fixed z-[101] bg-white bottom-0 w-full max-container border-t border-[#F6F6F6] px-6 py-4">
        <div className="text-heading xs semibold-16 text-[#101010] mb-4">Reservation Date</div>
        <div className="text-room-detail badge-time text-[#0089CF] flex items-center space-x-3 mb-4">
          <div className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]">
            <IconCalendar color="#0089CF"></IconCalendar>
            <span className="mt-0.5">{room?.dateRequest}</span>
          </div>

          <div className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]">
            <IconTime color="#0089CF"></IconTime>
            <span className="mt-0.5">{room?.timeRequest}</span>
          </div>
        </div>

        <button
          disabled={isSubmitLoading}
          type="button"
          onClick={() => onSubmit()}
          className="booking-button w-full text-[#FFFFFF] py-2.5 rounded-lg text-heading xs semibold-16 mb-6"
        >
          {isSubmitLoading && <IconSpinner className="animate-spin"></IconSpinner>}
          {!isSubmitLoading && 'Lanjutkan'}
        </button>
      </div>
    </>
  )
}
