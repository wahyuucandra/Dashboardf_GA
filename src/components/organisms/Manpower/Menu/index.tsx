'use client'

import { ManpowerMenu } from '@components/molecules/Manpower'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function MenuPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <ManpowerMenu></ManpowerMenu>
}
