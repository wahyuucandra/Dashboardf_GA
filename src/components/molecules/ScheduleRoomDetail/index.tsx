'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconCalendar from '@assets/icons/IconCalendar'
import IconTime from '@assets/icons/IconTime'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import './style.css'

import IconClose from '@assets/icons/IconClose'

import bannerSchaduleRoomDetail from '@assets/images/bannerSchaduleRoomDetail.png'

import { Modal } from '@components/atoms/modal'

import IconChevronRight from '@assets/icons/IconChevronRight'

import './style.css'

import { DateInput, TimeInput, daysSplit, monthsData, daysData, Photo, photosData } from './data'

function DateInputComponent({
  closeClick = () => {},
  appendClick = () => {},
}: {
  closeClick?: any
  appendClick?: any
}) {
  const initialize = useRef<boolean>(false)

  const [year, setYear] = useState<number>(new Date(Date.now()).getFullYear())
  const [month, setMonth] = useState<number>(new Date(Date.now()).getMonth())

  const currDate = new Date()

  const [daysInMonth, setDaysInMonth] = useState<DateInput[]>()
  const [selectedDate, setSelectedDate] = useState<{ start: DateInput; end: DateInput }>()

  const handleFetchDaysInMonth = (monthInput: number, yearInput: number) => {
    let date = new Date(yearInput, monthInput, 1)
    let days: DateInput[] = []

    while (date.getMonth() === monthInput) {
      days.push({
        date,
        dateNumber: date.getDate(),
        day: date.getDay(),
        include: true,
        now: date.toDateString() === currDate.toDateString(),
      })
      date = new Date(yearInput, monthInput, date.getDate() + 1)
    }

    if (days[0]?.day != 1) {
      const prev = days[0]?.day
      for (let index = 1; index < prev; index++) {
        date = new Date(yearInput, monthInput, 1 - index)
        days?.unshift({
          date: date,
          dateNumber: date.getDate(),
          day: date.getDay(),
          include: false,
          now: date.toDateString() === currDate.toDateString(),
        })
      }
    }

    if (days?.length > 35) {
      days = days.slice(-(days?.length - 35))
    }

    if (days?.length < 35) {
      const lastDate: DateInput = days[days?.length - 1]
      const lastDateCounter = 35 - days?.length

      for (let index = 1; index <= lastDateCounter; index++) {
        date = new Date(yearInput, monthInput, lastDate?.date?.getDate() + index)
        days?.push({
          date,
          dateNumber: date.getDate(),
          day: date.getDay(),
          include: false,
          now: date.toDateString() === currDate.toDateString(),
        })
      }
    }

    setDaysInMonth(days)
  }

  const handleNext = () => {
    if (month < 11) {
      setMonth(prev => prev + 1)
      handleFetchDaysInMonth(month + 1, year)
    } else {
      setMonth(0)
      setYear(prev => prev + 1)
      handleFetchDaysInMonth(0, year)
    }
  }

  const handlePrev = () => {
    if (month > 0) {
      setMonth(prev => prev - 1)
      handleFetchDaysInMonth(month - 1, year)
    } else {
      setMonth(11)
      setYear(prev => prev - 1)
      handleFetchDaysInMonth(11, year)
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

  const handleValidate = (dateInput: DateInput) => {
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
    return ''
  }

  const handleBetween = (dateInput: DateInput) => {
    if (selectedDate) {
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
    if (selectedDate) {
      const start = selectedDate.start.date?.getTime()
      const end = selectedDate.end.date?.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff < 7 ? false : true
    }

    return true
  }

  const handleAlertValidator = () => {
    if (selectedDate) {
      const start = selectedDate.start.date?.getTime()
      const end = selectedDate.end.date?.getTime()

      const diff = (end - start) / (24 * 60 * 60 * 1000)

      return diff < 7 ? true : false
    }

    return true
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchDaysInMonth(new Date(Date.now()).getMonth(), new Date(Date.now()).getFullYear())
      initialize.current = true
    }
  }, [])

  return (
    <div className="pb-6">
      <div className="flex items-center space-x-4 mb-6">
        <button onClick={() => closeClick()}>
          <IconClose className="w-6 h-6"></IconClose>
        </button>
        <div className="text-xl font-semibold">Pilih Tanggal</div>
      </div>

      <div className="flex items-center justify-between space-x-3 mb-4">
        <button
          onClick={() => {
            handlePrev()
          }}
        >
          <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
        </button>
        <div className="font-semibold">
          {handleFindMonth()?.text} {year}
        </div>
        <button
          onClick={() => {
            handleNext()
          }}
        >
          <IconChevronRight className="w-6 h-6"></IconChevronRight>
        </button>
      </div>

      <div>
        <div className="grid grid-cols-7 mb-4">
          {daysSplit.map((val, index) => (
            <div key={index} className="p-1 mb-6 text-[#2C598D] font-semibold">
              {val}
            </div>
          ))}
          {daysInMonth?.map((val: DateInput, index) => (
            <div
              onClick={() => handleSelectedDate(val)}
              key={index}
              className={`${handleValidate(val)} ${handleBetween(val)} relative p-1 mb-6`}
            >
              <span
                className={`absolute -top-4 left-2 whitespace-nowrap text-xs text-[#0089CF] ${
                  val?.now ? '' : 'hidden'
                }`}
              >
                Hari ini
              </span>

              <div className={` ${val?.include ? '' : 'text-[#E5E4EA]'}`}>{val.dateNumber}</div>
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
          className={` ${
            handleButtonValidator() ? 'bg-[#B1B1B1]' : 'bg-[#2C598D]'
          } h-11 w-full  text-[#ffffff] py-2.5 font-semibold rounded-lg`}
        >
          Pilih Tanggal
        </button>
      </div>
    </div>
  )
}

function TimeInputComponent({
  endDate,
  closeClick = () => {},
  appendClick = () => {},
}: {
  endDate?: DateInput
  closeClick?: any
  appendClick?: any
}) {
  const initialize = useRef<boolean>(false)

  const [timesInDay, setTimesInDay] = useState<TimeInput[]>()
  const [selectedTimes, setSelectedTimes] = useState<TimeInput[]>()

  const handleFetchTimesInDay = () => {
    let date = new Date()
    // let endTime = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 10)

    let times: TimeInput[] = []

    const validate = (time: Date) => {
      if (endDate) {
        return time?.getTime() < endDate?.date?.getTime() ? true : false
      }

      return time.getTime() > date?.getTime() ? true : false
    }

    for (let minute = 7 * 60; minute < 21 * 60; minute += 30) {
      const start = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 0, minute)
      const end = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 0, minute + 30)

      const startString = `${start.getHours()?.toString().length >= 2 ? start.getHours() : '0' + start.getHours()}:${
        start.getMinutes()?.toString().length >= 2 ? start.getMinutes() : '0' + start.getMinutes()
      }`
      const endString = `${end.getHours()?.toString().length >= 2 ? end.getHours() : '0' + end.getHours()}:${
        end.getMinutes()?.toString().length >= 2 ? end.getMinutes() : '0' + end.getMinutes()
      }`

      times.push({
        availabel: validate(end),
        startTime: start,
        endTime: end,
        startText: `${startString}`,
        endText: `${endString}`,
      })
    }

    setTimesInDay(times)
  }

  const handleSelectTime = (timeInput: TimeInput) => {
    if (!timeInput?.availabel) return

    setSelectedTimes(prev => {
      const data = prev

      if (data?.includes(timeInput)) {
        const newData = data
          ?.filter(val => val != timeInput)
          ?.sort((prev, curr) => (prev.startTime.getTime() < curr.startTime.getTime() ? -1 : 1))
        return [...newData]
      }

      if (data?.length) {
        return [...data, timeInput]?.sort((prev, curr) =>
          prev.startTime.getTime() < curr.startTime.getTime() ? -1 : 1
        )
      }

      return [timeInput]?.sort((prev, curr) => (prev.startTime.getTime() < curr.startTime.getTime() ? -1 : 1))
    })
  }

  const handleClassValidator = (timeInput: TimeInput) => {
    if (selectedTimes?.includes(timeInput)) {
      return 'bg-[#E5F2FC] border-[#0089CF] text-[#0089CF]'
    }
    if (timeInput?.availabel) {
      return 'border-[#B1B1B1] text-[#0C0C0C]'
    }
    return 'bg-[#D9D9D9] border-[#D9D9D9] text-[#717171]'
  }

  const handleButtonValidator = () => {
    return selectedTimes?.length ? false : true
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchTimesInDay()
      initialize.current = true
    }
  }, [])

  return (
    <div className="pb-6">
      <div className="flex items-center space-x-4 mb-6">
        <button onClick={() => closeClick()}>
          <IconClose className="w-6 h-6"></IconClose>
        </button>
        <div className="text-xl font-semibold">Pilih Waktu</div>
      </div>
      <div className="h-[40vh] overflow-y-auto">
        <div className="grid grid-cols-2 gap-3 mb-6 ">
          {timesInDay?.map((val, index) => (
            <div
              onClick={() => handleSelectTime(val)}
              key={index}
              className={`rounded-lg border ${handleClassValidator(val)} text-sm p-2`}
            >
              {val.startText} - {val.endText}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-8 my-6">
        <div className="flex items-center space-x-3">
          <div className="rounded-lg border border-[#B1B1B1] w-6 h-6"></div>
          <span>Availabel</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-[#D9D9D9] border-[#D9D9D9] w-6 h-6"></div>
          <span>Reserved</span>
        </div>
      </div>

      <button
        disabled={handleButtonValidator()}
        onClick={() => appendClick(selectedTimes)}
        type="button"
        className={` ${
          handleButtonValidator() ? 'bg-[#B1B1B1]' : 'bg-[#2C598D]'
        } h-11 w-full  text-[#ffffff] py-2.5 font-semibold rounded-lg`}
      >
        Pilih Waktu
      </button>
    </div>
  )
}

function PhotoComponent({ closeClick = () => {}, appendClick = () => {} }: { closeClick?: any; appendClick?: any }) {
  const initialize = useRef<boolean>(false)

  const [photo, setPhoto] = useState<Photo>()

  const handleFetchTimesInDay = () => {
    setPhoto(photosData[0])
  }

  useEffect(() => {
    if (!initialize.current) {
      handleFetchTimesInDay()
      initialize.current = true
    }
  }, [])

  return (
    <div className="relative pt-4">
      <div className="flex text-center items-center justify-center">
        <div className="font-semibold text-white">Photos</div>
      </div>
      <button onClick={() => closeClick()}>
        <IconClose className="absolute top-4 left-4 w-6 h-6 text-white"></IconClose>
      </button>

      <div className="py-24">
        <img src={photo?.image} className="w-full object-cover" alt="" />
      </div>

      <div className="px-4 text-white bg-[#14232A]">
        <div className="pt-4 font-semibold mb-20">{photo?.desc}</div>
        <div className="flex justify-end mb-2">
          {photo?.id}/{photosData?.length}
        </div>
      </div>

      <div className="w-screen whitespace-nowrap overflow-x-auto pb-6">
        {photosData?.map((val, index) => (
          <div onClick={() => setPhoto(val)} key={index} className={`inline-block pr-0.5`}>
            <img src={val?.image} className="w-16 h-16 object-cover" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ScheduleRoomDetail() {
  const initialize = useRef<boolean>(false)

  const router = useRouter()

  const [isTimeOpen, setTimeOpen] = useState<boolean>(false)
  const [isDateOpen, setDateOpen] = useState<boolean>(false)
  const [isPhotoOpen, setPhotoOpen] = useState<boolean>(false)

  const [selectedDate, setSelectedDate] = useState<{ start: DateInput; end: DateInput }>()
  const [selectedTimes, setSelectedTimes] = useState<TimeInput[]>()

  const handleBindSelectedDate = () => {
    const start = selectedDate?.start
    const end = selectedDate?.end

    if (start?.date || end?.date) {
      if (start?.date?.getTime() == end?.date?.getTime())
        return `${start?.date?.getDate()}/${(start?.date?.getMonth() as number) + 1}/${start?.date?.getFullYear()}`
      if (start?.date?.getTime() != end?.date?.getTime())
        return `${daysData[start?.day as number]}, ${start?.date?.getDate()}/${
          (start?.date?.getMonth() as number) + 1
        }/${start?.date?.getFullYear()} - ${daysData[end?.day as number]}, ${end?.date?.getDate()}/${
          (end?.date?.getMonth() as number) + 1
        }/${end?.date?.getFullYear()}`
    } else {
      return 'Pilih Tanggal'
    }
  }

  const handleBindSelectedTimes = () => {
    if (selectedTimes) {
      const start = selectedTimes[0]?.startText
      const end =
        selectedTimes.length > 0 ? selectedTimes[selectedTimes?.length - 1]?.endText : selectedTimes[0]?.endText
      if (start || end) {
        return `${start} - ${end}`
      }
    }

    return 'Pilih Jam'
  }

  return (
    <>
      <div className="relative">
        <div className="sticky top-0 bg-white">
          <button
            type="button"
            onClick={() => router.back()}
            className="absolute top-3 left-3 rounded-md bg-white w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft className="w-6 h-6"></IconChevronLeft>
          </button>

          <img
            onClick={() => setPhotoOpen(true)}
            className="object-cover w-full h-[188px] mb-0.5"
            src={photosData[0].image}
            alt="Booking Asset"
          />

          <div className="grid grid-cols-3 gap-0.5">
            <img
              onClick={() => setPhotoOpen(true)}
              className=" object-cover w-full h-[74px]"
              src={photosData[1].image}
              alt="Booking Asset 1"
            />
            <img
              onClick={() => setPhotoOpen(true)}
              className=" object-cover w-full h-[74px]"
              src={photosData[2].image}
              alt="Booking Asset 2"
            />
            <div onClick={() => setPhotoOpen(true)} className="relative overflow-hidden">
              <img className="object-cover w-full h-[74px]" src={photosData[3].image} alt="Booking Asset 3" />
              <div className="absolute bottom-0 w-full h-full bg-[#000000] opacity-50"></div>
              <div className="text-[10px] font-bold absolute flex top-0 h-full items-center text-center justify-center w-full h-full text-white">
                +12 Foto Lainnya
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 pt-6 h-screen overflow-y-auto">
          <div className="mb-6">
            <div className="font-bold text-xl mb-3">Lantai 2 - 201</div>
            <div className="text-[#878787] text-sm">
              Lorem ipsum dolor sir amet dolor dolor lur sir amet Lorem ipsum dolor sir amet dolor dolor lur sir amet
              Lorem ipsum dolor sir amet dolor dolor lur sir amet. Lorem ipsum dolor sir amet doloR, Lorem ipsum dolor
              sir amet dolor dol.
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="font-bold text-xl  flex-1">Fasilitas</div>
              <button className="text-xs text-[#0089CF]">Lihat Semua</button>
            </div>
            <div className="text-sm ">
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
                <span>Kursi</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
                <span>Spidol</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
                <span>Penghapus papan tulis</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
                <span>Screen led TV</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#000000] rounded-full"></span>
                <span>Papan Tulis</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-xl mb-3">Terms & Conditions</div>
            <div className="text-[#878787] text-sm">
              Kebijakan peminjaman untuk ruangan ini:
              <br />
              <ul className="list-outside list-disc pl-5">
                <li className="">Lorem ipsum dolor sir amet lorem ipsum dolor sir </li>
                <li className="">Lorem ipsum dolor sir amet lorem ipsum dolor sir </li>
                <li className="">Lorem ipsum dolor sir amet lorem ipsum dolor sir </li>
              </ul>
            </div>
          </div>

          <div className="bg-white py-6 px-3 fixed z-[901] bottom-0 right-0 w-full border border-t">
            <div className="font-bold text-xl mb-3">Reservation Date</div>
            <div className="flex items-center space-x-4 mb-3">
              <div
                onClick={() => setDateOpen(true)}
                className="text-xs rounded-full flex items-center space-x-2 px-3 py-1 bg-[#E5F2FC] text-[#0089CF]"
              >
                <IconCalendar className="text-[#E5F2FC] w-3 h-3 "></IconCalendar>
                <span>29 April - 31 April 2024</span>
              </div>
              <div
                onClick={() => setTimeOpen(true)}
                className="text-xs rounded-full flex items-center space-x-2 px-3 py-1 bg-[#E5F2FC] text-[#0089CF]"
              >
                <IconTime className="text-[#E5F2FC] w-3 h-3 "></IconTime>
                <span>07:00 - 09:30</span>
              </div>
            </div>

            <button
              disabled={false}
              onClick={() => {}}
              type="button"
              className={` ${
                false ? 'bg-[#B1B1B1]' : 'bg-[#2C598D]'
              } h-11 w-full  text-[#ffffff] py-2.5 font-semibold rounded-lg`}
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Date Input */}
      <Modal isOpen={isDateOpen} isFloating={false} backdropClick={() => setDateOpen(false)}>
        <div className="w-screen h-4/5 bg-white relative p-4 text-center rounded-xl">
          {DateInputComponent({
            closeClick: () => {
              setDateOpen(false)
            },
            appendClick: (val: { start: DateInput; end: DateInput }) => {
              setSelectedDate(val)
              setSelectedTimes(undefined)
              setDateOpen(false)
            },
          })}
        </div>
      </Modal>

      {/* Time Input */}
      <Modal isOpen={isTimeOpen} isFloating={false} backdropClick={() => setTimeOpen(false)}>
        <div className="w-screen h-4/5 bg-white relative px-4 pt-4 text-center rounded-xl">
          {TimeInputComponent({
            endDate: selectedDate?.end,
            closeClick: () => {
              setTimeOpen(false)
            },
            appendClick: (val: TimeInput[]) => {
              setSelectedTimes(val)
              setTimeOpen(false)
            },
          })}
        </div>
      </Modal>

      {/* Photo */}
      <Modal isOpen={isPhotoOpen} isFloating={false} backdropClick={() => setTimeOpen(false)}>
        <div className="w-screen h-4/5 bg-[#1C2931] relative  rounded-t-xl">
          {PhotoComponent({
            closeClick: () => {
              setPhotoOpen(false)
            },
            appendClick: (val: TimeInput[]) => {
              setPhotoOpen(false)
            },
          })}
        </div>
      </Modal>
    </>
  )
}
