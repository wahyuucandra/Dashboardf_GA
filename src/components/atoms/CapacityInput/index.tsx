import IconChevronTop from '@assets/icons/IconChevronTop'
import { useEffect, useRef, useState } from 'react'
import { Control, Controller } from 'react-hook-form'

export interface CapacityInputProps {
  data: number[]
  label?: string
  placeholder?: string
  onButtonClick?: (val: number | undefined) => void | undefined
  control: Control<any>
  value?: any
  name?: string
}

const CapacityInput: React.FC<CapacityInputProps> = ({
  data,
  label = 'kursi',
  placeholder = 'Masukan kapasitas',
  onButtonClick,
  control,
  name = 'capacity',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleActiveText = (input: number | undefined) => {
    if (input) {
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

  useEffect(() => {
    const handleClick = (event: any) => {
      if (!containerRef?.current?.contains(event?.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <>
          <div ref={containerRef} className="relative">
            <div
              onKeyDown={() => {}}
              onClick={() => setIsOpen(!isOpen)}
              className={`h-11 border ${isOpen ? 'border-[#4994EC]' : 'border-[#D5D5D5]'}  py-2.5 px-3 rounded flex items-center space-x-4`}
            >
              <div className={`flex-1 text-paragraph regular-14 -mb-1 ${handleActiveText(field?.value)}`}>
                {handleBindCapacity(field?.value)}
              </div>
              <IconChevronTop
                className={`transition-all ${isOpen ? 'rotate-0' : 'rotate-180'}`}
                color={isOpen ? '#3874CB' : '#252525'}
              ></IconChevronTop>
            </div>
            {errors?.[name]?.message && (
              <div className="text-xs text-error mt-1">{errors?.[name]?.message?.toString()}</div>
            )}

            <div
              onKeyDown={() => {}}
              onClick={e => e.stopPropagation()}
              className={`${isOpen ? 'absolute' : 'hidden'} z-[1] top-11 right-0 w-full`}
            >
              <div className="h-[120px] w-full bg-[#FFFFFF] p-3 mt-2 border border-[#D5D5D5] rounded-md overflow-y-scroll">
                {data?.map((val, index) => (
                  <div
                    onKeyDown={() => {}}
                    key={val}
                    onClick={() => {
                      onButtonClick && onButtonClick(val)
                      setIsOpen(false)
                    }}
                    className={`text-heading xs regular-16 text-[#333333]  ${data?.length - 1 != index ? 'mb-3' : ''}`}
                  >
                    {val} {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    />
  )
}

export default CapacityInput
