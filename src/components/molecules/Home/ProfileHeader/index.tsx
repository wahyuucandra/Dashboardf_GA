'use client'

import IconNotification from '@assets/icons/IconNotification'
import { GetCookie } from '@store/storage'
import { useEffect, useState } from 'react'

export function ProfileHeader() {
  const [dataUser, setDataUser] = useState<any>({})

  useEffect(() => {
    const data = GetCookie('data_user')
    setDataUser(data)
  }, [])

  return (
    <div className="h-16 px-3 pt-3 flex items-center space-x-3">
      <div className="w-14 h-14 rounded-full bg-[#D9D9D9]"></div>
      <div className="flex-1 flex flex-col space-y-1">
        <span className="text-paragraph regular-14">Halo,</span>
        <span className="text-heading s semibold-18">{dataUser?.data?.namaUser || '-'}</span>
      </div>
      <button>
        <IconNotification></IconNotification>
      </button>
    </div>
  )
}
