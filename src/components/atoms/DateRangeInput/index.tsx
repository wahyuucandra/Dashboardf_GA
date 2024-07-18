import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import IconClose from '@assets/icons/IconClose'
import { DateInput } from '@interfaces/date-input'
import { useState } from 'react'
import { Modal } from '../ModalCustom'
import { daysData, daysSplit, handleFetchDaysInMonth, monthsData } from './data'
import './style.css'
import IconCalendar from '@assets/icons/IconCalendar'

export interface DateRangeInputProps {
  maxRange?: number
  value?: { start: DateInput | undefined; end: DateInput | undefined }
  onButtonClick?: (val: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => void | undefined
}

export const DateRangeInput: React.FC<DateRangeInputProps> = ({ value, maxRange = 7, onButtonClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const daysInit: DateInput[] = handleFetchDaysInMonth(
    new Date(Date.now()).getMonth(),
    new Date(Date.now()).getFullYear()
  )

  const [year, setYear] = useState<number>(new Date(Date.now()).getFullYear())
  const [month, setMonth] = useState<number>(new Date(Date.now()).getMonth())

  const [daysInMonth, setDaysInMonth] = useState<DateInput[]>(daysInit)
  const [selectedDate, setSelectedDate] = useState<
    { start: DateInput | undefined; end: DateInput | undefined } | undefined
  >(value)

  const handleNext = () => {
    if (month < 11) {
      setMonth(prev => prev + 1)
      const fetchData: DateInput[] = handleFetchDaysInMonth(month + 1, year)
      setDaysInMonth(fetchData)
    } else {
      setMonth(0)
      setYear(prev => prev + 1)
      const fetchData: DateInput[] = handleFetchDaysInMonth(0, year)
      setDaysInMonth(fetchData)
    }
  }

  const handlePrev = () => {
    if (month > 0) {
      setMonth(prev => prev - 1)
      const fetchData: DateInput[] = handleFetchDaysInMonth(month - 1, year)
      setDaysInMonth(fetchData)
    } else {
      setMonth(11)
      setYear(prev => prev - 1)
      const fetchData: DateInput[] = handleFetchDaysInMonth(11, year)
      setDaysInMonth(fetchData)
    }
  }

  const handleFindMonth = () => {
    return monthsData.find(val => val.id == month)
  }

  const handleSelectedDate = (dateInput: DateInput) => {
    if (!dateInput?.include) return

    setSelectedDate(prev => {
      const start = prev?.start
      const end = prev?.end

      if (!start && !end) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start?.date.getTime() != end?.date.getTime()) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start && dateInput?.date?.getTime() < start?.date?.getTime()) {
        return { ...prev, start: dateInput }
      }

      if (start && dateInput?.date?.getTime() > start?.date?.getTime()) {
        return { ...prev, end: dateInput }
      }
    })
  }

  const handleClassSelectedDate = (dateInput: DateInput) => {
    if (selectedDate) {
      const start = selectedDate?.start
      const end = selectedDate?.end

      if (
        dateInput?.date?.toDateString() === start?.date?.toDateString() &&
        dateInput?.date?.toDateString() === end?.date?.toDateString()
      ) {
        return 'rounded bg-[#2C598D] text-[#ffffff]'
      }
      if (dateInput?.date?.toDateString() === start?.date?.toDateString()) {
        return 'rounded-l bg-[#2C598D] text-[#ffffff]'
      }

      if (dateInput?.date?.toDateString() === end?.date?.toDateString()) {
        return 'rounded-r bg-[#2C598D] text-[#ffffff]'
      }
    }
    return 'text-[#505050]'
  }

  const handleClassBetween = (dateInput: DateInput) => {
    if (selectedDate?.start && selectedDate?.end) {
      if (
        dateInput?.date?.getTime() > selectedDate?.start?.date?.getTime() &&
        dateInput?.date?.getTime() < selectedDate?.end?.date?.getTime()
      )
        return 'bg-[#E5F2FC]'
      return ''
    }
    return ''
  }

  const handleButtonValidator = () => {
    if (selectedDate?.start && selectedDate?.end) {
      const start = selectedDate.start?.date?.getTime()
      const end = selectedDate.end?.date?.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff >= maxRange
    }

    return true
  }

  const handleAlertValidator = () => {
    if (selectedDate?.start && selectedDate?.end) {
      const start = selectedDate.start?.date?.getTime()
      const end = selectedDate.end?.date?.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff < maxRange
    }

    return true
  }

  const handleBindDate = (input: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => {
    if (input?.start?.date && input?.end?.date) {
      const start = input?.start
      const end = input?.end
      if (start?.date?.getTime() == end?.date?.getTime())
        return `${daysData[start?.day]}, ${start?.date?.getDate()}/${start?.date?.getMonth() + 1}/${start?.date?.getFullYear()}`
      if (start?.date?.getTime() != end?.date?.getTime())
        return `${daysData[start?.day]}, ${start?.date?.getDate()}/${
          start?.date?.getMonth() + 1
        }/${start?.date?.getFullYear()} - ${daysData[end?.day]}, ${end?.date?.getDate()}/${
          end?.date?.getMonth() + 1
        }/${end?.date?.getFullYear()}`
    }

    return 'Pilih Tanggal'
  }

  const handleActiveText = (input: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => {
    if (input != undefined) {
      return 'text-[#505050]'
    }

    return 'text-[#909090]'
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-11 border border-[#D5D5D5] text-left py-2.5 px-3 rounded flex items-center space-x-4"
      >
        <IconCalendar></IconCalendar>
        <div className={`flex-1 text-paragraph regular-14 -mb-1 ${handleActiveText(value)}`}>
          {handleBindDate(value)}
        </div>
      </button>

      <Modal isOpen={isOpen} isFloating={false} backdropClick={() => setIsOpen(false)}>
        <div className="w-screen max-container h-3/5 bg-white relative px-4 py-6 text-center rounded-xl">
          <div className="pb-6">
            <div className="flex items-center space-x-4 mb-6">
              <button onClick={() => setIsOpen(false)}>
                <IconClose width={24} height={24} color="#252525"></IconClose>
              </button>
              <div className="text-heading s semibold-18">Pilih Tanggal</div>
            </div>

            <div className="flex items-center justify-between space-x-3 mb-6">
              <button
                onClick={() => {
                  handlePrev()
                }}
              >
                <IconChevronLeft width={24} height={24} color="#1C1B1F"></IconChevronLeft>
              </button>
              <div className="text-heading xs semibold-16">
                {handleFindMonth()?.text} {year}
              </div>
              <button
                onClick={() => {
                  handleNext()
                }}
              >
                <IconChevronRight width={24} height={24} color="#1C1B1F"></IconChevronRight>
              </button>
            </div>

            <div>
              <div className="grid grid-cols-7 mb-4">
                {daysSplit.map(val => (
                  <div key={val} className="py-2 text-date-range-input day text-[#2C598D] mb-10">
                    {val}
                  </div>
                ))}
                {daysInMonth?.map((val: DateInput) => (
                  <button
                    type="button"
                    onClick={() => handleSelectedDate(val)}
                    key={val?.date?.getTime()}
                    className={`${handleClassSelectedDate(val)} ${handleClassBetween(val)}  relative py-2 mb-10`}
                  >
                    <span
                      className={`absolute -top-4 left-2 whitespace-nowrap text-xs text-[#0089CF] ${
                        val?.now ? '' : 'hidden'
                      }`}
                    >
                      Hari ini
                    </span>

                    <div className={` ${val?.include ? '' : 'text-[#E5E4EA]'} text-date-range-input date`}>
                      {val.dateNumber}
                    </div>
                  </button>
                ))}
              </div>
              <div className={`${handleAlertValidator() ? 'hidden' : ''} text-red-600 text-left text-xs mb-1`}>
                * Range tanggal tidak boleh lebih dari 7 hari
              </div>

              <button
                disabled={handleButtonValidator()}
                onClick={() => {
                  onButtonClick && onButtonClick(selectedDate)
                  setIsOpen(false)
                }}
                type="button"
                className={`${
                  handleButtonValidator() ? 'bg-[#B1B1B1]' : 'approve-button'
                } h-11 w-full text-[#ffffff] py-2.5 text-heading xs semibold-16 rounded-lg`}
              >
                Pilih Tanggal
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export interface DateRangeInputCustomProps {
  isOpen: boolean
  maxRange?: number
  value?: { start: DateInput | undefined; end: DateInput | undefined }
  onButtonClick?: (val: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => void | undefined
  onCloseClick?: () => void
}

export const DateRangeInputCustom: React.FC<DateRangeInputCustomProps> = ({
  isOpen,
  value,
  maxRange = 7,
  onButtonClick,
  onCloseClick,
}) => {
  const daysInit: DateInput[] = handleFetchDaysInMonth(
    new Date(Date.now()).getMonth(),
    new Date(Date.now()).getFullYear()
  )

  const [year, setYear] = useState<number>(new Date(Date.now()).getFullYear())
  const [month, setMonth] = useState<number>(new Date(Date.now()).getMonth())

  const [daysInMonth, setDaysInMonth] = useState<DateInput[]>(daysInit)
  const [selectedDate, setSelectedDate] = useState<
    { start: DateInput | undefined; end: DateInput | undefined } | undefined
  >(value)

  const handleNext = () => {
    const condition = month < 11
    setMonth(prev => (condition ? prev + 1 : 0))
    if (!condition) setYear(prev => prev + 1)
    const fetchData: DateInput[] = handleFetchDaysInMonth(condition ? month + 1 : 0, year)
    setDaysInMonth(fetchData)
  }

  const handlePrev = () => {
    const condition = month > 0
    setMonth(prev => (condition ? prev - 1 : 11))
    if (!condition) setYear(prev => prev - 1)
    const fetchData: DateInput[] = handleFetchDaysInMonth(condition ? month - 1 : 11, year)
    setDaysInMonth(fetchData)
  }

  const handleFindMonth = () => {
    return monthsData.find(val => val.id == month)
  }

  const handleSelectedDate = (dateInput: DateInput) => {
    if (!dateInput?.include) return undefined

    setSelectedDate(prev => {
      const start = prev?.start
      const end = prev?.end

      if (!start && !end) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start?.date.getTime() != end?.date.getTime()) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start && dateInput?.date?.getTime() < start?.date?.getTime()) {
        return { ...prev, start: dateInput }
      }

      if (start && dateInput?.date?.getTime() > start?.date?.getTime()) {
        return { ...prev, end: dateInput }
      }
    })
  }

  const handleClassSelectedDate = (dateInput: DateInput) => {
    if (selectedDate) {
      const start = selectedDate?.start
      const end = selectedDate?.end

      if (
        dateInput?.date?.toDateString() === start?.date?.toDateString() &&
        dateInput?.date?.toDateString() === end?.date?.toDateString()
      ) {
        return 'rounded bg-[#2C598D] text-[#ffffff]'
      }
      if (dateInput?.date?.toDateString() === start?.date?.toDateString()) {
        return 'rounded-l bg-[#2C598D] text-[#ffffff]'
      }

      if (dateInput?.date?.toDateString() === end?.date?.toDateString()) {
        return 'rounded-r bg-[#2C598D] text-[#ffffff]'
      }
    }
    return 'text-[#505050] test'
  }

  const handleClassBetween = (dateInput: DateInput) => {
    if (selectedDate?.start && selectedDate?.end) {
      if (
        dateInput?.date?.getTime() > selectedDate?.start?.date?.getTime() &&
        dateInput?.date?.getTime() < selectedDate?.end?.date?.getTime()
      )
        return 'bg-[#E5F2FC] test'
      return ''
    }
    return ''
  }

  const handleButtonValidator = () => {
    if (selectedDate?.start && selectedDate?.end) {
      const start = selectedDate.start?.date?.getTime()
      const end = selectedDate.end?.date?.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000) / 1

      return diff >= maxRange
    }

    return true
  }

  return (
    <Modal isOpen={isOpen} isFloating={false} backdropClick={onCloseClick}>
      <div className="w-screen max-container h-4/5 bg-white relative px-4 py-6 text-center rounded-xl">
        <div className="pb-6">
          <div className="flex items-center space-x-4 mb-6">
            <button onClick={onCloseClick}>
              <IconClose width={24} height={24} color="#252525"></IconClose>
            </button>
            <div className="text-heading s semibold-18">Pilih Tanggal</div>
          </div>

          <div className="flex items-center justify-between space-x-3 mb-6">
            <button
              onClick={() => {
                handlePrev()
              }}
            >
              <IconChevronLeft width={24} height={24} color="#1C1B1F"></IconChevronLeft>
            </button>
            <div className="text-heading xs semibold-16">
              {handleFindMonth()?.text} {year}
            </div>
            <button
              onClick={() => {
                handleNext()
              }}
            >
              <IconChevronRight width={24} height={24} color="#1C1B1F"></IconChevronRight>
            </button>
          </div>

          <div>
            <div className="grid grid-cols-7 mb-4">
              {daysSplit.map(val => (
                <div key={val} className="py-2 text-date-range-input day text-[#2C598D] mb-10">
                  {val}
                </div>
              ))}
              {daysInMonth?.map((val: DateInput) => (
                <button
                  type="button"
                  onClick={() => handleSelectedDate(val)}
                  key={val?.date?.getTime()}
                  className={`${handleClassSelectedDate(val)} ${handleClassBetween(val)}  relative py-2 mb-10`}
                >
                  <span
                    className={`absolute -top-4 left-2 whitespace-nowrap text-xs text-[#0089CF] ${
                      val?.now ? '' : 'hidden'
                    }`}
                  >
                    Hari ini
                  </span>

                  <div className={` ${val?.include ? '' : 'text-[#E5E4EA]'} text-date-range-input date`}>
                    {val.dateNumber}
                  </div>
                </button>
              ))}
            </div>
            <div className={`${handleButtonValidator() ? 'hidden' : ''} text-red-600 text-left text-xs mb-1`}>
              * Range tanggal tidak boleh lebih dari 7 hari
            </div>

            <button
              disabled={handleButtonValidator()}
              onClick={() => {
                onButtonClick && onButtonClick(selectedDate)
              }}
              type="button"
              className={`${
                handleButtonValidator() ? 'bg-[#B1B1B1]' : 'approve-button'
              } h-11 w-full text-[#ffffff] py-2.5 text-heading xs semibold-16 rounded-lg`}
            >
              Pilih Tanggal
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
