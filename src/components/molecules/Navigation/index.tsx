'use client'

import { MenuNav } from '@components/atoms/menuList'
import useNamePage from '@hooks/useNamePage'
import { MENU_HEADER } from '@utils/list'
import { pageWithlist } from '@utils/regex'
import React from 'react'

export default function Navigation() {
  const pageName = useNamePage()

  if (!pageWithlist.test(pageName)) {
    return null
  }

  return (
    <div className="md:hidden bg-primary fixed bottom-0 z-[900] w-screen shadow-[0px_0px_20px_0px_#00000024] px-4 py-2 grid grid-cols-4">
      {MENU_HEADER.map((item, index) => (
        <MenuNav key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
