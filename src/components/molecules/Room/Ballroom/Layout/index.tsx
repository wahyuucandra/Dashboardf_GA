'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// import './style.css';
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconCloudDownload from '@assets/icons/IconCloudDownload'
import BannerBallroomLayout from '@assets/images/BannerBallroomLayout.png'
import IconCalendar from '@assets/icons/IconCalendar'
import IconTime from '@assets/icons/IconTime'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
import { DateRangeInputCustom } from '@components/atoms/DateRangeInput'
import { monthsData } from '@components/atoms/DateRangeInput/data'
import { TimeRangeInputCustom } from '@components/atoms/TimeRangeInput'
import { DateInput } from '@interfaces/date-input'
import { TimeInput } from '@interfaces/time-input'
import FileInput from '@components/atoms/FileInput'

export function LayoutUpload() {
  const router = useRouter()

  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false)
  const [isTimeModalOpen, setIsTimeModalOpen] = useState<boolean>(false)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }

  const { handleSubmit, setValue, control } = useForm<ScheduleForm>({
    defaultValues: DefaulScheduleForm,
  })

  const reason = useWatch({
    control,
    name: 'reason',
  })

  const date = useWatch({
    control,
    name: 'date',
  })

  const time = useWatch({
    control,
    name: 'time',
  })

  const onSubmit = async () => {
    router.push('/booking-asset/room/ballroom/waiting')
  }

  const handleBindDate = (input: { start: DateInput | undefined; end: DateInput | undefined } | undefined) => {
    if (input?.start?.date && input?.end?.date) {
      const start = input?.start
      const end = input?.end

      if (start?.date?.getTime() == end?.date?.getTime())
        return `${start?.date?.getDate()} ${monthsData[start?.date?.getMonth()].text} ${start?.date?.getFullYear()}`
      if (start?.date?.getTime() != end?.date?.getTime())
        if (start?.date?.getFullYear() == end?.date?.getFullYear())
          return `${start?.date?.getDate()} ${monthsData[start?.date?.getMonth()].text} - ${end?.date?.getDate()} ${
            monthsData[end?.date?.getMonth()].text
          } ${start?.date?.getFullYear()}`
      return `${start?.date?.getDate()} ${
        monthsData[start?.date?.getMonth()].text
      } ${start?.date?.getFullYear()} - ${end?.date?.getDate()} ${
        monthsData[end?.date?.getMonth()].text
      } ${start?.date?.getFullYear()}`
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
      <div className="relative">
        <Image
          width={0}
          height={0}
          sizes="100"
          className="fixed top-0 object-cover w-full max-container h-[188px] rounded-b"
          src={BannerBallroomLayout.src}
          alt="Layout Ballroom"
        />

        <div className="fixed top-4 ml-4">
          <Link
            href={'/booking-asset/room/ballroom/1'}
            className="rounded-md bg-[#d3d3d3] w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft />
          </Link>
        </div>

        <div className="bg-white bottom-0 top-0 max-container z-[101] px-4 mt-[253px]">
          <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
            {/* Button download layout */}
            <button
              className="h-[45px] flex gap-1 items-center justify-center bg-[#e9f9fe] hover:bg-[#d1e9f9] text-[#626262] text-paragraph regular-14 py-2 px-4 rounded shadow-md w-full border border-[#0072BB] mb-6"
              type="button"
            >
              <div className="mr-2">
                <IconCloudDownload />
              </div>
              Klik <span className="text-[#0089CF] text-paragraph semibold-14 ">di sini</span> untuk mengunduh layout
            </button>

            <div className="text-heading s semibold-18 text-black mb-4">Submit layout</div>

            <div>
              <p className="text-paragraph regular-14 mb-2">Upload layout Anda dengan file PDF</p>
              <FileInput onChangeFile={handleFileChange} value={selectedFile} />
            </div>

            <div className="grid grid-cols-1 gap-6 mt-2">
              <div>
                <div className="text-paragraph regular-14 mb-1">
                  Deskripsi<span className="text-[#E15241]">*</span>
                </div>
                <ReasonInputArea
                  value={reason}
                  onChangeInput={val => {
                    if (val) {
                      setValue('reason', val)
                    }
                  }}
                  placeholder="Contoh: Layout di buat letter L dan juga siapkan 2 proyektor"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Reservation date */}
        <div className="fixed z-[101] bg-white bottom-0 w-full max-container border border-t-[#F6F6F6] shadow-[2px_4px_12px_0_rgba(0,0,0,0.1)] px-6 py-4">
          <div className="text-heading xs semibold-16 text-[#101010] mb-4">Reservation Date</div>
          <div className="text-room-detail badge-time text-[#0089CF] flex items-center space-x-3 mb-4">
            <button
              type="button"
              onClick={() => setIsDateModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconCalendar color="#0089CF" />
              <span className="mt-0.5">{handleBindDate(date)}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsTimeModalOpen(true)}
              className="rounded-full flex items-center space-x-2 px-4 py-2 bg-[#E5F2FC]"
            >
              <IconTime color="#0089CF" />
              <span className="mt-0.5">{handleBindTime(time)}</span>
            </button>
          </div>

          <button
            type="submit"
            className="booking-button w-full text-[#FFFFFF] py-2.5 rounded-lg text-heading xs semibold-16 mb-6"
          >
            Submit
          </button>
        </div>
      </div>

      <DateRangeInputCustom
        isOpen={isDateModalOpen}
        value={date}
        onCloseClick={() => setIsDateModalOpen(false)}
        onButtonClick={val => {
          setIsDateModalOpen(false)
          if (val?.start && val?.end) {
            setValue('date', { start: val?.start, end: val?.end })
          }
        }}
      />

      <TimeRangeInputCustom
        isOpen={isTimeModalOpen}
        value={time}
        onCloseClick={() => setIsTimeModalOpen(false)}
        onButtonClick={val => {
          setIsTimeModalOpen(false)
          if (val?.start && val?.end) {
            setValue('time', { start: val?.start, end: val?.end })
          }
        }}
      />
    </>
  )
}
