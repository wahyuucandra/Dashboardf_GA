'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconSpinner from '@assets/icons/IconSpinner'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import Footer from '@components/atoms/Footer'
import { ReasonInput } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { IManpowerBookingTime, IManpowerScheduleForm, IManpowerSchedulePayload } from '@interfaces/manpower'
import { apiGetBookingTime, apiSubmitBookingManpower } from '@services/manpower/api'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
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
  gender: yup.string().required('Jenis kelamin wajib dipilih'),
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
  manpower: yup.number().required().typeError('Kapasitas wajib diisi'),
  reason: yup.string().required('Alasan wajib diisi'),
})

export function Schedule() {
  const router = useRouter()

  const [availableTimes, setAvailabelTimes] = useState<IManpowerBookingTime[]>()
  const [isLoading, setIsLoading] = useState<boolean>()
  const min = new Date(new Date().setHours(0, 0, 0, 0))
  const capacities = Array.from({ length: 10 }, (_, i) => i + 1)

  const { handleSubmit, setValue, clearErrors, control } = useForm<IManpowerScheduleForm>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const handleFetchBookingTime = async () => {
    const response = await apiGetBookingTime()
    if (response.status == 'T') setAvailabelTimes(response.data)
  }

  const handleSubmitBookingManpower = async (payload: IManpowerSchedulePayload) => {
    try {
      setIsLoading(true)
      const response = await apiSubmitBookingManpower(payload)
      if (response.status == 'T') {
        setIsLoading(false)
        router.push('/booking-asset/manpower/process')
      }
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleFetchBookingTime()
  }, [])

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors('gender')
    setValue('gender', event.target.value)
  }

  const onSubmit = async (form: IManpowerScheduleForm) => {
    const formDateStart = form?.date?.start?.date
    const dateRequest = `${formDateStart?.getFullYear()}-${formDateStart?.getMonth() + 1 >= 10 ? formDateStart?.getMonth() + 1 : '0' + (formDateStart?.getMonth() + 1)}-${formDateStart?.getDate()}`

    const payload: IManpowerSchedulePayload = {
      gender: form.gender,
      manpower: form.manpower.toString(),
      kapasitas: form.manpower,
      flagAccBerijalan: 'ACC',
      keperluan: form.reason,
      dateRequest: dateRequest,
      timeRequest: form?.time?.start?.startText,
    }

    handleSubmitBookingManpower(payload)
  }

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        className="fixed z-[102] top-0 object-cover w-full max-container h-[188px] rounded-b"
        src={bookingAsset}
        alt="Booking Asset"
      />

      <div className="fixed z-[102] top-4 ml-4">
        <Link href={'/booking-asset/manpower'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="bg-white py-[216px] h-screen overflow-y-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-6 px-4 text-heading m semibold-21 text-[#2C598D]">Schedule Manpower</p>
          <div className="grid grid-cols-1 gap-6 pb-[150px] px-4">
            {/* Gender Input */}
            <div>
              <div className="text-paragraph regular-14 mb-2">
                Pilih Gender: <span className="text-[#E15241] -mt-1">*</span>
              </div>
              <Controller
                defaultValue={''}
                control={control}
                name={'gender'}
                render={({ field, formState: { errors } }) => (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <label className="container">
                        Laki-Laki{' '}
                        <input
                          type="radio"
                          checked={field?.value === 'M'}
                          onChange={handleGenderChange}
                          name="gender"
                          value="M"
                        />
                        <span className="radio"></span>
                      </label>

                      <label className="container">
                        Perempuan{' '}
                        <input
                          type="radio"
                          checked={field?.value === 'F'}
                          onChange={handleGenderChange}
                          name="gender"
                          value="F"
                        />
                        <span className="radio"></span>
                      </label>
                    </div>
                    {errors?.['gender']?.message && (
                      <div className="text-xs text-error mt-1">{errors?.['gender']?.message?.toString()}</div>
                    )}
                  </>
                )}
              />
            </div>

            {/* Date Input */}
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

            {/* Time Input */}
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
              />
            </div>

            {/* Keperluan Input */}
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
              />
            </div>

            {/* Manpower Input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Kebutuhan Manpower <span className="text-[#E15241]">*</span>
              </div>

              <CapacityInput
                name="manpower"
                control={control}
                data={capacities}
                onButtonClick={val => {
                  if (val) {
                    clearErrors('manpower')
                    setValue('manpower', val)
                  }
                }}
                label="orang"
                placeholder="Masukan kebutuhan"
              />
            </div>
          </div>

          {/* Button submit */}
          <Footer>
            <div className="bg-white pt-3 pb-12 px-3 w-full">
              <button
                disabled={isLoading}
                type="submit"
                className="next-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF] flex items-center justify-center"
              >
                {isLoading && <IconSpinner className="animate-spin"></IconSpinner>}
                {!isLoading && 'Lanjutkan'}
              </button>
            </div>
          </Footer>
        </form>
      </div>
    </div>
  )
}
