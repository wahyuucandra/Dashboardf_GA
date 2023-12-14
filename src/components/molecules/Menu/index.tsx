'use client'

import LogoutButton from '@components/atoms/logoutButton'
import { MenuList } from '@components/atoms/menuList'
import { Profile } from '@components/atoms/profile'
import useNamePage from '@hooks/useNamePage'
import { MENU_HEADER } from '@utils/list'
import { pageWithlist } from '@utils/regex'

export default function Menu() {
  const pageName = useNamePage()

  if (!pageWithlist.test(pageName)) {
    return null
  }

  return (
    <ul className="bg-primary h-screen hidden md:block shadow-[0px_0px_20px_0px_#00000024]">
      <div className="py-6 px-3 items-center flex-col w-[240px]">
        <div className="mb-10">
          <Profile />
        </div>
        {MENU_HEADER.map((item, index) => (
          <MenuList key={item.id} item={item} index={index} />
        ))}
      </div>

      <LogoutButton />
    </ul>
  )
}
