'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconSpinner from '@assets/icons/IconSpinner'
import bookingAsset from '@assets/images/BookingAsset.png'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { ReasonInput } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAssetScheduleForm } from '@interfaces/asset'
import { IBookingTime } from '@interfaces/time'
import { apiGetAssetBookingTime } from '@services/asset/api'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './style.css'

const dateInputSchema = yup.object().shape({
  day: yup.number().required(),
  date: yup.date().required(),
  dateNumber: yup.number().required(),
  include: yup.boolean().required(),
  now: yup.boolean().required(),
})

const timeInputSchema = yup.object().shape({
  startText: yup.string().required(),
  endText: yup.string().required(),
  startTime: yup.date().required(),
  endTime: yup.date().required(),
  availabel: yup.boolean().required(),
})

const schema = yup.object().shape({
  date: yup
    .object()
    .shape({
      start: dateInputSchema.required(),
      end: dateInputSchema.required(),
    })
    .required()
    .typeError('Tanggal wajib diisi'),
  time: yup
    .object()
    .shape({
      start: timeInputSchema.required(),
      end: timeInputSchema.required(),
    })
    .required()
    .typeError('Waktu wajib diisi'),
  reason: yup.string().required('Alasan wajib diisi'),
})

export function Schedule() {
  const router = useRouter()

  const [availableTimes, setAvailabelTimes] = useState<IBookingTime[]>()
  const [isLoading, setIsLoading] = useState<boolean>()
  const min = new Date(new Date().setHours(0, 0, 0, 0))

  const { handleSubmit, setValue, clearErrors, control } = useForm<IAssetScheduleForm>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const handleFetchBookingTime = async () => {
    const response = await apiGetAssetBookingTime()
    if (response.status == 'T') setAvailabelTimes(response.data)
  }

  useEffect(() => {
    handleFetchBookingTime()
  }, [])

  const onSubmit = async (payload: IAssetScheduleForm) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const stringify = JSON.stringify(payload).toString()
      const queryParams = new URLSearchParams({ queryForm: stringify }).toString()
      router.push(`/booking-asset/asset?${queryParams}`)
    }, 500)
  }

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="top-0 right-0 object-cover w-full h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 ml-4">
        <Link href={'/booking-asset'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="bg-white w-full fixed bottom-0 top-0 z-[101] px-4 mt-[216px] max-container">
        <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Asset</div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Pilih tanggal <span className="text-[#E15241]">*</span>
              </div>
              <DateRangeInput
                min={min}
                maxRange={1}
                control={control}
                onButtonClick={val => {
                  if (val?.start && val?.end) {
                    clearErrors('date')
                    setValue('date', { start: val.start, end: val.end })
                  }
                }}
              ></DateRangeInput>
            </div>
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Jam <span className="text-[#E15241]">*</span>
              </div>
              <TimeRangeInput
                availableTimes={availableTimes}
                control={control}
                onButtonClick={val => {
                  if (val?.start && val?.end) {
                    clearErrors('time')
                    setValue('time', { start: val.start, end: val.end })
                  }
                }}
              ></TimeRangeInput>
            </div>

            <div>
              <div className="text-paragraph regular-14 mb-1">
                Keperluan <span className="text-[#E15241]">*</span>
              </div>
              <ReasonInput
                name="reason"
                control={control}
                onChangeInput={val => {
                  if (val) {
                    clearErrors('reason')
                    setValue('reason', val)
                  }
                }}
              ></ReasonInput>
            </div>
          </div>

          <div className="absolute bottom-12 w-full">
            <button
              disabled={isLoading}
              type="submit"
              className="next-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF] flex items-center justify-center"
            >
              {isLoading && <IconSpinner className="animate-spin"></IconSpinner>}
              {!isLoading && 'Lanjutkan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
