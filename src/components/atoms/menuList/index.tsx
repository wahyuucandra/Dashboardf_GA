'use client'

import { ListInterface } from '@interfaces/listInterfaces'
import { ICON_MENU } from '@utils/list'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MenuList({ item, index }: Readonly<ListInterface>) {
  const pathname = usePathname()
  const ListMenu = ICON_MENU[item.icon as keyof typeof ICON_MENU]

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div key={index}>
      <Link href={item.href}>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`${
            pathname === item.href ? 'bg-menuColor rounded-lg text-teksActive' : 'text-black'
          } text-base font-semibold my-1 py-2 px-3 hover:bg-menuColor hover:rounded-lg hover:text-teksActive flex flex-row items-center`}
        >
          <div className="mr-2">
            <ListMenu color={pathname === item.href || isHovering ? '#8C4D99' : 'black'} />
          </div>
          {item.name}
        </li>
      </Link>
    </div>
  )
}
