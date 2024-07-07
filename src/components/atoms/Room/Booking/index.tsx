'use client'

import IconCalendar from '@assets/icons/IconCalendar'
import IconTime from '@assets/icons/IconTime'

import { DateRangeInputCustom } from '@components/atoms/DateRangeInput'
import { TimeRangeInputCustom } from '@components/atoms/TimeRangeInput'
import { DateInput } from '@interfaces/date-input'
import { RoomDetail } from '@interfaces/room'
import { TimeInput } from '@interfaces/time-input'
import { useState } from 'react'
import './style.css'
import { useForm, useWatch } from 'react-hook-form'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
import { daysData, monthsData } from '@components/atoms/DateRangeInput/data'
import { useRouter } from 'next/navigation'

export function Booking() {
  const router = useRouter()

  const [isDateModalOpen, setDateModalOpen] = useState<boolean>(false)
  const [isTimeModalOpen, setTimeModalOpen] = useState<boolean>(false)

  const { handleSubmit, setValue, getValues, control } = useForm<ScheduleForm>({ defaultValues: DefaulScheduleForm })

  const date = useWatch({
    control,
    name: 'date',
  })

  const time = useWatch({
    control,
    name: 'time',
  })

  const onSubmit = async (data: any) => {
    console.log(data)
    router.push('/booking-asset/room/meeting-room/success')
  }

  const handleBindDate = (input: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => {
    if (input?.start?.date && input?.end?.date) {
      const start = input?.start
      const end = input?.end

      if (start?.date?.getTime() == end?.date?.getTime())
        return `${start?.date?.getDate()} ${monthsData[start?.date?.getMonth()].text} ${start?.date?.getFullYear()}`
      if (start?.date?.getTime() != end?.date?.getTime())
        if (start?.date?.getFullYear() == end?.date?.getFullYear())
          return `${start?.date?.getDate()} ${monthsData[start?.date?.getMonth()].text} - ${end?.date?.getDate()} ${monthsData[end?.date?.getMonth()].text} ${start?.date?.getFullYear()}`
      return `${start?.date?.getDate()} ${monthsData[start?.date?.getMonth()].text} ${start?.date?.getFullYear()} - ${end?.date?.getDate()} ${monthsData[end?.date?.getMonth()].text} ${start?.date?.getFullYear()}`
    }

    return 'Pilih Tanggal'
  }

  const handleBindTime = (input: { start: TimeInput | undefined; end: TimeInput | undefined } | undefined) => {
    if (input?.start?.startTime && input?.end?.endTime) {
      const start = input?.start?.startText
      const end = input?.end?.endText
      if (start || end) {
        return `${start} - ${end}`
      }
    }

    return 'Pilih Jam'
  }

  return (
    <>
      <div className="fixed z-[101] bg-white bottom-0 left-0 w-full border border-t-[#F6F6F6] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] px-6 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading xs semibold-16 text-[#101010] mb-4">Reservation Date</div>
          <div className="text-room-detail badge-time text-[#0089CF] flex items-center space-x-3 mb-4">
            <button
              onClick={() => setDateModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconCalendar color="#0089CF"></IconCalendar>
              <span className="mt-0.5">{handleBindDate(date)}</span>
            </button>

            <div
              onClick={() => setTimeModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconTime color="#0089CF"></IconTime>
              <span className="mt-0.5">{handleBindTime(time)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="booking-button w-full text-[#FFFFFF] py-2.5 rounded-lg text-heading xs semibold-16 mb-6"
          >
            Booking Sekarang
          </button>
        </form>
      </div>

      <DateRangeInputCustom
        isOpen={isDateModalOpen}
        value={date}
        onCloseClick={() => setDateModalOpen(false)}
        onButtonClick={val => {
          setDateModalOpen(false)
          setValue('date', val)
        }}
      ></DateRangeInputCustom>

      <TimeRangeInputCustom
        isOpen={isTimeModalOpen}
        value={time}
        onCloseClick={() => setTimeModalOpen(false)}
        onButtonClick={val => {
          setTimeModalOpen(false)
          setValue('time', val)
        }}
      ></TimeRangeInputCustom>
    </>
  )
}
