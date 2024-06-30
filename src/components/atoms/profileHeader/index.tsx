'use client'

import IconNotification from '@assets/icons/iconNotification'

export function ProfileHeader() {
  return (
    <>
      <div className="flex items-center space-x-4 px-3 py-4">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>
        <div className="flex-1 flex flex-col">
          <span className="text-sm">Halo,</span>
          <span className="text-lg font-semibold">Biko Haryono</span>
        </div>
        <button>
          <IconNotification width={24} height={24}></IconNotification>
        </button>
      </div>
    </>
  )
}
