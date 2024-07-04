'use client'

import { default as IconCalendar, default as IconTime } from '@assets/icons/IconCalendar'
import DateRangeInput from '@components/atoms/DateRangeInput'
import TimeRangeInput from '@components/atoms/TimeRangeInput '
import { DateInput } from '@interfaces/date-input'
import { RoomDetail } from '@interfaces/room'
import { TimeInput } from '@interfaces/time-input'
import { useState } from 'react'
import './style.css'

export function Booking({ room }: { room?: RoomDetail }) {
  const [isTimeModalOpen, setTimeModalOpen] = useState<boolean>(false)
  const [isDateModalOpen, setDateModalOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<{ start: DateInput | undefined; end: DateInput | undefined }>()
  const [selectedTime, setSelectedTime] = useState<{ start: TimeInput | undefined; end: TimeInput | undefined }>()

  return (
    <>
      <div className="fixed z-[101] bg-white bottom-0 left-0 w-full border border-t-[#F6F6F6] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] px-6 py-4">
        <div className="text-heading xs semibold-16 text-[#101010] mb-4">Reservation Date</div>
        <div className="text-room-detail badge-time text-[#0089CF] flex items-center space-x-3 mb-4">
          <button
            onClick={() => setDateModalOpen(true)}
            className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
          >
            <IconCalendar color="#0089CF"></IconCalendar>
            <span className="mt-0.5">29 April - 31 April 2024</span>
          </button>

          <div
            onClick={() => setTimeModalOpen(true)}
            className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
          >
            <IconTime color="#0089CF"></IconTime>
            <span className="mt-0.5">07:00 - 09:30</span>
          </div>
        </div>

        <button className="booking-button w-full text-[#FFFFFF] py-2.5 rounded-lg text-heading xs semibold-16 mb-6">
          Booking Sekarang
        </button>
      </div>

      <DateRangeInput
        isOpen={isDateModalOpen}
        value={selectedDate}
        onCloseClick={() => setDateModalOpen(false)}
        onButtonClick={val => {
          setDateModalOpen(false)
          setSelectedDate(val)
        }}
      ></DateRangeInput>

      <TimeRangeInput
        isOpen={isTimeModalOpen}
        value={selectedTime}
        onCloseClick={() => setTimeModalOpen(false)}
        onButtonClick={val => {
          setTimeModalOpen(false)
          setSelectedTime(val)
        }}
      ></TimeRangeInput>
    </>
  )
}
