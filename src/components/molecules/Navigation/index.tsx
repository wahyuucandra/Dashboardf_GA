'use client'

import { MenuNav } from '@components/atoms/menuList'
import useNamePage from '@hooks/useNamePage'
import { RootState } from '@store/reducers'
import { MENU_HEADER } from '@utils/list'
import { pageWithlist } from '@utils/regex'
import { useSelector } from 'react-redux'

export default function Navigation() {
  const isShow = useSelector((state: RootState) => state.dataContainer.isShow)

  const pageName = useNamePage()

  if (!pageWithlist.test(pageName)) {
    return null
  }

  return (
    <div className={`${!isShow ? 'hidden' : 'fixed'} z-[100] bottom-0 left-0 flex justify-center w-full`}>
      <div className="w-full max-container mx-auto px-4 py-2 grid grid-cols-4 bg-primary shadow-[0px_-1px_0px_rgba(0,0,0,0.1)]">
        {MENU_HEADER.map((item, index) => (
          <MenuNav key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
