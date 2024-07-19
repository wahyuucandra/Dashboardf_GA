'use client'

import { RoomSchedule } from '@components/molecules/Room'
import { setShowNavbar } from '@store/actions/actionContainer'
import { store } from '@store/storage'
import { useEffect } from 'react'

export function SchedulePage() {
  useEffect(() => {
    const { dispatch } = store

    dispatch(setShowNavbar(false))
  }, [])

  return <RoomSchedule></RoomSchedule>
}
