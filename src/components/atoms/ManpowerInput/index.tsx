import IconChevronTop from '@assets/icons/IconChevronTop'
import { useState } from 'react'

export interface ManpowerInputProps {
  data: number[]
  value?: number
  label?: string
  placeholder?: string
  onButtonClick?: (val: number | undefined) => void | undefined
}

const ManpowerInput: React.FC<ManpowerInputProps> = ({
  data,
  value,
  label = 'orang',
  placeholder = 'Masukan kebutuhan',
  onButtonClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleActiveText = (input: number | undefined) => {
    if (input != undefined) {
      return 'text-[#505050]'
    }

    return 'text-[#909090]'
  }

  const handleBindCapacity = (input: number | undefined) => {
    if (input && input > 0) {
      return `${input} ${label}`
    }

    return `${placeholder}`
  }

  return (
    <div className="relative">
      <div
        onKeyDown={() => {}}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-11 border ${isOpen ? 'border-[#4994EC]' : 'border-[#D5D5D5]'}  py-2.5 px-3 rounded flex items-center space-x-4`}
      >
        <div className={`flex-1 text-paragraph regular-14 -mb-1 ${handleActiveText(value)}`}>
          {handleBindCapacity(value)}
        </div>
        <IconChevronTop
          className={`transition-all ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          color={isOpen ? '#3874CB' : '#252525'}
        ></IconChevronTop>
      </div>
      <div
        onKeyDown={() => {}}
        onClick={e => e.stopPropagation()}
        className={`${isOpen ? 'absolute' : 'hidden'} z-[1] top-11 right-0 w-full`}
      >
        <div className="h-[120px] w-full bg-[#FFFFFF] p-3 mt-2 border border-[#D5D5D5] rounded-md overflow-y-scroll">
          {data?.map((val, index) => (
            <div
              key={val ?? index}
              onKeyDown={() => {}}
              onClick={() => {
                onButtonClick && onButtonClick(val)
                setIsOpen(false)
              }}
              className={`text-heading xs regular-16 text-[#333333]  ${data?.length - 1 != index ? 'mb-3' : ''}`}
            >
              {val} orang
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManpowerInput
