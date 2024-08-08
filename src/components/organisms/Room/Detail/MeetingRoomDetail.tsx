'use client'

import { RoomDetail } from '@components/molecules/Room'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function MeetingRoomDetailPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)
  const roomListParams = useSelector((state: RootState) => state.dataRoom.roomListParams)

  if (!bookingLocation) {
    redirect('/')
  }

  if (!roomListParams) {
    redirect('/booking-asset/room/meeting-room')
  }

  return <RoomDetail category="Meeting Room"></RoomDetail>
}
