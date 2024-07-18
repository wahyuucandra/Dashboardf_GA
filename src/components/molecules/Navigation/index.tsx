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
    <>
      <div className="fixed z-[100] bottom-0 left-0 flex justify-center w-full">
        <div className="w-full max-container mx-auto px-4 py-2 grid grid-cols-4 bg-primary shadow-[0px_0px_20px_0px_#00000024]">
          {MENU_HEADER.map((item, index) => (
            <MenuNav key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}
