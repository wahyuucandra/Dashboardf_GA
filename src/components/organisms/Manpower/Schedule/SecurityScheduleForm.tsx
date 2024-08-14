'use client'

import { ManpowerSchedule } from '@components/molecules/Manpower'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function SecurityScheduleFormPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <ManpowerSchedule title="Security" category="Security"></ManpowerSchedule>
}
