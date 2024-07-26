'use client'

import IconCalendar from '@assets/icons/IconCalendar'
import IconTime from '@assets/icons/IconTime'

import { DateRangeInputCustom } from '@components/atoms/DateRangeInput'
import { monthsData } from '@components/atoms/DateRangeInput/data'
import { TimeRangeInputCustom } from '@components/atoms/TimeRangeInput'
import { DateInput } from '@interfaces/date-input'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
import { TimeInput } from '@interfaces/time-input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import './style.css'

export function Booking() {
  const router = useRouter()

  // const paramsPage = useParams<{ meetingRoom: string }>()

  // const [loadingAction, setLoadingAction] = useState<boolean>(false)

  // const handleSubmitBookingRoom = async () => {
  //   const payload: ISubmitBookingRoomPayload = {
  //     area: 'Jakarta',
  //     cdSp: 'cdSp',
  //     tipeBooking: 'tipe 1',
  //     startBookingTime: '19:22:22',
  //     startBookingDate: '2000-05-02',
  //     endBookingTime: '19:22:22',
  //     endBookingDate: '2000-05-02',
  //     kapasitas: 10,
  //     bookingMeetingRoom: 'Yes',
  //     deskripsi: 'deskripsi booking',
  //     itemId: paramsPage.meetingRoom,
  //   }

  //   try {
  //     setLoadingAction(true)
  //     // const response = await apiSubmitBookingRoom(payload)
  //     // if (response.status == 'T')
  //   } catch (error) {
  //     setLoadingAction(false)
  //   } finally {
  //     setLoadingAction(false)
  //   }
  // }

  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false)
  const [isTimeModalOpen, setIsTimeModalOpen] = useState<boolean>(false)

  const { handleSubmit, setValue, control } = useForm<ScheduleForm>({ defaultValues: DefaulScheduleForm })

  const date = useWatch({
    control,
    name: 'date',
  })

  const time = useWatch({
    control,
    name: 'time',
  })

  const onSubmit = async () => {
    // handleSubmitBookingRoom()
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
      {/* {loadingAction && <div className="hidden"></div>} */}
      <div className="fixed z-[101] bg-white bottom-0 w-full max-container border border-t-[#F6F6F6] shadow-[0px_4px_0px_0_rgba(0,0,0,0.1)] px-6 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading xs semibold-16 text-[#101010] mb-4">Reservation Date</div>
          <div className="text-room-detail badge-time text-[#0089CF] flex items-center space-x-3 mb-4">
            <button
              type="button"
              onClick={() => setIsDateModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconCalendar color="#0089CF"></IconCalendar>
              <span className="mt-0.5">{handleBindDate(date)}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsTimeModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconTime color="#0089CF"></IconTime>
              <span className="mt-0.5">{handleBindTime(time)}</span>
            </button>
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
        onCloseClick={() => setIsDateModalOpen(false)}
        onButtonClick={val => {
          setIsDateModalOpen(false)
          if (val?.start && val?.end) {
            setValue('date', { start: val.start, end: val.end }, { shouldValidate: true })
          }
        }}
      ></DateRangeInputCustom>

      <TimeRangeInputCustom
        isOpen={isTimeModalOpen}
        value={time}
        onCloseClick={() => setIsTimeModalOpen(false)}
        onButtonClick={val => {
          setIsTimeModalOpen(false)
          if (val?.start && val?.end) {
            setValue('time', { start: val.start, end: val.end }, { shouldValidate: true })
          }
        }}
      ></TimeRangeInputCustom>
    </>
  )
}
