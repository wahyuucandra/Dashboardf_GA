'use client'

import { ManpowerProcess } from '@components/molecules/Manpower'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function ProcessPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)
  const submitResponse = useSelector((state: RootState) => state.dataManpower.submitResponse)

  if (!bookingLocation) {
    redirect('/')
  }

  if (!submitResponse) {
    redirect('/booking-asset/manpower')
  }

  return <ManpowerProcess></ManpowerProcess>
}
