'use client'

import IconNotification from '@assets/icons/IconNotification'
import { IProfile } from '@interfaces/auth'
import { apiProfile } from '@services/authentication/api'
import { useEffect, useRef, useState } from 'react'

export function ProfileHeader() {
  const initialRef = useRef(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<IProfile>()

  const handleFetchProfile = async () => {
    try {
      setLoading(true)
      const response = await apiProfile()
      if (response.status == 'T') setProfile(response.data)
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialRef.current === false) {
      handleFetchProfile()
      initialRef.current = true
    }
  }, [])

  return (
    <div className="h-16 px-3 pt-3 flex items-center space-x-3">
      <div className="w-14 h-14 rounded-full bg-[#D9D9D9]"></div>
      {loading && (
        <div className="flex-1 flex flex-col space-y-1 animate-pulse">
          <span className="text-paragraph regular-14 w-20 h-5 bg-[#D9D9D9]"></span>
          <span className="text-heading s semibold-18 w-1/2 h-5 bg-[#D9D9D9]"></span>
        </div>
      )}

      {!loading && (
        <div className="flex-1 flex flex-col space-y-1">
          <span className="text-paragraph regular-14">Halo,</span>
          <span className="text-heading s semibold-18">{profile?.nameUser}</span>
        </div>
      )}

      <button>
        <IconNotification></IconNotification>
      </button>
    </div>
  )
}
