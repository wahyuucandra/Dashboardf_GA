import { useEffect, useRef, useState } from 'react'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconChevronRight from '@assets/icons/IconChevronRight'
import IconClose from '@assets/icons/IconClose'
import { DateInput, daysData, monthsData } from './data'

interface DateInputComponentProps {
  closeClick: () => void
  appendClick: (selectedDate: { start: DateInput | null; end: DateInput | null }) => void
}

const DateInputComponent: React.FC<DateInputComponentProps> = ({ closeClick, appendClick }) => {
  const initialize = useRef(false)
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [daysInMonth, setDaysInMonth] = useState<DateInput[]>([])
  const [selectedDate, setSelectedDate] = useState<{ start: DateInput | null; end: DateInput | null }>({
    start: null,
    end: null,
  })

  const handleFetchDaysInMonth = (monthInput: number, yearInput: number): void => {
    let date = new Date(yearInput, monthInput, 1)
    let days: DateInput[] = []

    while (date.getMonth() === monthInput) {
      days.push({
        date,
        dateNumber: date.getDate(),
        day: date.getDay(),
        include: true,
        now: date.toDateString() === new Date().toDateString(),
      })
      date.setDate(date.getDate() + 1)
    }

    // Handle previous month days
    if (days[0]?.day !== 1) {
      const prev = days[0]?.day
      for (let index = 1; index < prev; index++) {
        date = new Date(yearInput, monthInput, 1 - index)
        days.unshift({
          date,
          dateNumber: date.getDate(),
          day: date.getDay(),
          include: false,
          now: date.toDateString() === new Date().toDateString(),
        })
      }
    }

    // Handle next month days to ensure 35 days shown
    if (days.length > 35) {
      days = days.slice(-(days.length - 35))
    } else if (days.length < 35) {
      const lastDate = days[days.length - 1]
      const lastDateCounter = 35 - days.length
      for (let index = 1; index <= lastDateCounter; index++) {
        date = new Date(yearInput, monthInput, lastDate?.date?.getDate() + index)
        days.push({
          date,
          dateNumber: date.getDate(),
          day: date.getDay(),
          include: false,
          now: date.toDateString() === new Date().toDateString(),
        })
      }
    }

    setDaysInMonth(days)
  }

  const handleNext = (): void => {
    if (month < 11) {
      setMonth(prev => prev + 1)
      handleFetchDaysInMonth(month + 1, year)
    } else {
      setMonth(0)
      setYear(prev => prev + 1)
      handleFetchDaysInMonth(0, year)
    }
  }

  const handlePrev = (): void => {
    if (month > 0) {
      setMonth(prev => prev - 1)
      handleFetchDaysInMonth(month - 1, year)
    } else {
      setMonth(11)
      setYear(prev => prev - 1)
      handleFetchDaysInMonth(11, year)
    }
  }

  const handleSelectedDate = (dateInput: DateInput): void => {
    if (!dateInput.include || !selectedDate) return

    setSelectedDate(prev => {
      const start = prev.start
      const end = prev.end

      if (!start && !end) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start && end && start.date.getTime() !== end.date.getTime()) {
        return { ...prev, start: dateInput, end: dateInput }
      }

      if (start && dateInput.date.getTime() < start.date.getTime()) {
        return { ...prev, start: dateInput }
      }

      if (start && dateInput.date.getTime() > start.date.getTime()) {
        return { ...prev, end: dateInput }
      }

      return prev
    })
  }

  const handleValidate = (dateInput: DateInput): string => {
    if (selectedDate) {
      const start = selectedDate.start
      const end = selectedDate.end

      if (
        start &&
        end &&
        dateInput.date.toDateString() === start.date.toDateString() &&
        dateInput.date.toDateString() === end.date.toDateString()
      ) {
        return 'rounded bg-[#2C598D] text-[#ffffff]'
      }
      if (start && dateInput.date.toDateString() === start.date.toDateString()) {
        return 'rounded-l bg-[#2C598D] text-[#ffffff]'
      }

      if (end && dateInput.date.toDateString() === end.date.toDateString()) {
        return 'rounded-r bg-[#2C598D] text-[#ffffff]'
      }
    }
    return ''
  }

  const handleBetween = (dateInput: DateInput): string => {
    if (selectedDate) {
      if (
        selectedDate.start &&
        selectedDate.end &&
        dateInput.date.getTime() > selectedDate.start.date.getTime() &&
        dateInput.date.getTime() < selectedDate.end.date.getTime()
      ) {
        return 'bg-[#E5F2FC]'
      }
    }
    return ''
  }

  const handleButtonValidator = (): boolean => {
    if (selectedDate && selectedDate.start && selectedDate.end) {
      const start = selectedDate.start.date.getTime()
      const end = selectedDate.end.date.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff < 7 ? false : true
    }

    return true
  }

  const handleAlertValidator = (): boolean => {
    if (selectedDate && selectedDate.start && selectedDate.end) {
      const start = selectedDate.start.date.getTime()
      const end = selectedDate.end.date.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff < 7 ? true : false
    }

    return true
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchDaysInMonth(new Date().getMonth(), new Date().getFullYear())
      initialize.current = true
    }
  }, [])

  return (
    <div className="pb-6">
      <div className="flex items-center space-x-4 mb-6">
        <button onClick={closeClick}>
          <IconClose className="w-6 h-6"></IconClose>
        </button>
        <div className="text-xl font-semibold">Pilih Tanggal</div>
      </div>

      <div className="flex items-center justify-between space-x-3 mb-4">
        <button onClick={handlePrev}>
          <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
        </button>
        <div className="font-semibold">
          {monthsData[month].text} {year}
        </div>
        <button onClick={handleNext}>
          <IconChevronRight className="w-6 h-6"></IconChevronRight>
        </button>
      </div>

      <div className="grid grid-cols-7 mb-4">
        {daysData.map((val, index) => (
          <div key={index} className="p-1 mb-6 text-[#2C598D] font-semibold">
            {val}
          </div>
        ))}
        {daysInMonth.map((val, index) => (
          <div
            onClick={() => handleSelectedDate(val)}
            key={index}
            className={`${handleValidate(val)} ${handleBetween(val)} relative p-1 mb-6`}
          >
            <span
              className={`absolute -top-4 left-2 whitespace-nowrap text-xs text-[#0089CF] ${val.now ? '' : 'hidden'}`}
            >
              Hari ini
            </span>
            <div className={`${val.include ? '' : 'text-[#E5E4EA]'}`}>{val.dateNumber}</div>
          </div>
        ))}
      </div>
      <div className={`${handleAlertValidator() ? 'hidden' : ''} text-red-600 text-left text-xs mb-1`}>
        * Range tanggal tidak boleh lebih dari 7 hari
      </div>
      <button
        disabled={handleButtonValidator()}
        onClick={() => appendClick(selectedDate)}
        type="button"
        className={` ${handleButtonValidator() ? 'bg-[#B1B1B1]' : 'bg-[#2C598D]'} h-11 w-full  text-[#ffffff] py-2.5 font-semibold rounded-lg`}
      >
        Pilih Tanggal
      </button>
    </div>
  )
}

export default DateInputComponent
