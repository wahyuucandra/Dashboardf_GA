'use client'

import { RoomList } from '@components/molecules/Room'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function MeetingRoomListPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)
  const roomListParams = useSelector((state: RootState) => state.dataRoom.roomListParams)

  if (!bookingLocation) {
    redirect('/')
  }

  if (!roomListParams) {
    redirect('/booking-asset/room/meeting-room/schedule')
  }

  return <RoomList category="Meeting Room"></RoomList>
}
