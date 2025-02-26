'use client'

import { BookingAssetMenu } from '@components/molecules/BookingAsset'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function BookingAsset() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <BookingAssetMenu></BookingAssetMenu>
}
