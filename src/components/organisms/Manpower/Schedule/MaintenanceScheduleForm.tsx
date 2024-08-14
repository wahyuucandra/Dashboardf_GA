'use client'

import { ManpowerSchedule } from '@components/molecules/Manpower'
import { RootState } from '@store/reducers'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'

export function MaintenanceScheduleFormPage() {
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  if (!bookingLocation) {
    redirect('/')
  }

  return <ManpowerSchedule title="Maintenance" category="Maintenance"></ManpowerSchedule>
}
