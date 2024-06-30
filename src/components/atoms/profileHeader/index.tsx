'use client'

import IconNotification from '@assets/icons/IconNotification'

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
          <IconNotification className="w-6 h-6"></IconNotification>
        </button>
      </div>
    </>
  )
}
