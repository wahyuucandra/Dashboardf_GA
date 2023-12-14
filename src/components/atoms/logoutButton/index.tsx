import IconLogout from '@assets/icons/iconLogout'
import React from 'react'

export default function LogoutButton() {
  return (
    <div className="cursor-pointer my-6 mx-3 bg-main text-white px-4 py-2 rounded-lg fixed bottom-0 flex flex-row justify-center items-center">
      <IconLogout className="mr-2" />
      <p>Logout</p>
    </div>
  )
}
