'use client'

import { RoomMenu } from '@components/molecules/Room'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function MenuPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <RoomMenu></RoomMenu>
}
