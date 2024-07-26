'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { RoomBannerImage, RoomBooking, RoomDescription, RoomFacility, RoomTerms } from '@components/atoms/Room'
import { IRoom, IRoomDetailParams } from '@interfaces/room'
import { apiGetDetailRoom } from '@services/room/api'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { photos, room } from './data'

export function Detail() {
  const initialRef = useRef(false)

  const paramsPage = useParams<{ meetingRoom: string }>()

  const [loading, setLoading] = useState<boolean>(false)
  const [roomApi, setRoomApi] = useState<IRoom>()

  const handleFetchDetailRoom = async () => {
    const params: IRoomDetailParams = {
      roomId: paramsPage.meetingRoom,
    }

    try {
      setLoading(true)
      const response = await apiGetDetailRoom(params)
      if (response.status == 'T') setRoomApi(response.data)
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialRef.current === false) {
      handleFetchDetailRoom()
      initialRef.current = true
    }
  }, [])

  const handleShowMoreFacility = () => {}

  return (
    <>
      <div className="relative">
        {roomApi && <div className="hidden"></div>}
        {loading && <div className="hidden"></div>}
        <RoomBannerImage photos={photos}></RoomBannerImage>

        <div className="fixed top-4 ml-4">
          <Link
            href={'/booking-asset/room/meeting-room'}
            className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <div className="px-6 py-[290px] overflow-y-auto">
          <RoomDescription room={room}></RoomDescription>
          <br />
          <RoomFacility room={room} onButtonClick={handleShowMoreFacility}></RoomFacility>
          <br />
          <RoomTerms room={room}></RoomTerms>
        </div>
      </div>
      <RoomBooking></RoomBooking>
    </>
  )
}
