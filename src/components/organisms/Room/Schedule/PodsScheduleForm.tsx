'use client'

import { RoomSchedule } from '@components/molecules/Room'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function PodsScheduleFormPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <RoomSchedule title="Pods" category="Pods"></RoomSchedule>
}
