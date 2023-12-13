import MenuList from '@components/atoms/menuList'
import { MENU_HEADER } from '@utils/list'

export default function Menu() {
  return (
    <ul className="flex bg-primary h-full">
      <div className="py-6 px-3 items-center flex-col w-[240px]">
        {MENU_HEADER.map((item, index) => (
          <MenuList key={item.id} item={item} index={index} />
        ))}
      </div>
    </ul>
  )
}
