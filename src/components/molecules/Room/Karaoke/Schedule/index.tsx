'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import * as yup from 'yup'

import bookingAsset from '@assets/images/BookingAsset.png'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import Footer from '@components/atoms/Footer'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { useEffect, useState } from 'react'
import { setShowNavbar } from '@store/actions/actionContainer'
import { IBookingTime } from '@interfaces/time'
import { store } from '@store/storage'
import { apiGetRoomBookingTime } from '@services/room/api'
import {
  DefaulKaraokeScheduleForm,
  IKaraokeScheduleForm,
  IKaraokeScheduleFormEntity,
  ISubmitBookingKaraokePayload,
} from '@interfaces/karaoke'
import { setKaraokeScheduleForm } from '@store/actions/actionKaraoke'
import { apiSubmitBookingKaraoke } from '@services/karaoke/api'
import IconSpinner from '@assets/icons/IconSpinner'

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

export function KaraokeSchedule () {
  const router = useRouter()

  const { dispatch } = store

  const min = new Date(new Date().setHours(0, 0, 0, 0))

  const [availableTimes, setAvailabelTimes] = useState<IBookingTime[]>()
  const [availableTimesLoading, setAvailableTimesLoading] = useState<boolean>()
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false)

  const { handleSubmit, setValue, control, clearErrors, formState, getValues } = useForm<IKaraokeScheduleForm>({
    defaultValues: DefaulKaraokeScheduleForm,
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const handleSubmitForm = async (form: IKaraokeScheduleForm) => {
    const formDateStart = form?.date?.start?.date
    const formDateEnd = form?.date?.end?.date
    const formTimeStart = form?.time?.start?.startTime
    const formTimeEnd = form?.time?.end?.endTime

    const startBookingDate = `${moment(formDateStart).format('YYYY-MM-DD')}`
    const endBookingDate = `${moment(formDateEnd).format('YYYY-MM-DD')}`
    const timeOpen = `${moment(formTimeStart).format('HH:mm:ss')}`
    const timeClose = `${moment(formTimeEnd).format('HH:mm:ss')}`

    const params: ISubmitBookingKaraokePayload = {
      startBookingTime: timeOpen,
      startBookingDate: startBookingDate,
      endBookingTime: timeClose,
      endBookingDate: endBookingDate,
      bookingMeetingRoom: 5,
      keperluan: form.reason,
    }

    try {
      setIsSubmitLoading(true)
      const response = await apiSubmitBookingKaraoke(params)
      if (response.status == 'T') {
        const entityForm: IKaraokeScheduleFormEntity = {
          startBookingTime: timeOpen,
          startBookingDate: startBookingDate,
          endBookingTime: timeClose,
          endBookingDate: endBookingDate,
          keperluan: form.reason,
        }
        dispatch(setKaraokeScheduleForm(entityForm))
        router.push('/booking-asset/room/karaoke/success')
      }
    } catch (error) {
      setIsSubmitLoading(false)
    } finally {
      setIsSubmitLoading(false)
    }
  }

  const handleFetchBookingTime = async () => {
    try {
      setAvailableTimesLoading(true)
      const response = await apiGetRoomBookingTime()
      if (response.status == 'T') setAvailabelTimes(response.data)
    } catch (error) {
      setAvailableTimesLoading(false)
    } finally {
      setAvailableTimesLoading(false)
    }
  }

  const { isValid } = formState

  const onSubmit = async () => {
    if (isValid) {
      const formState = getValues()
      handleSubmitForm(formState) // Gunakan getValues()
    }
  }

  useEffect(() => {
    dispatch(setShowNavbar(false))
  }, [])

  useEffect(() => {
    handleFetchBookingTime()
  }, [])

  return (
    <div className='relative '>
      <Image
        width={2000}
        height={1000}
        sizes='100'
        className='fixed z-[2] top-0 object-cover w-full max-container h-[188px] rounded-b'
        src={bookingAsset.src}
        alt='Booking Asset'
      />

      <div className='fixed z-[2] top-4 ml-4'>
        <Link href={'/booking-asset/room'} className='rounded-md bg-white w-8 h-8 flex items-center justify-center'>
          <IconChevronLeft />
        </Link>
      </div>

      <div className='bg-white py-[216px] h-screen overflow-y-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-2xl font-semibold text-[#2C598D] mb-6 px-4'>Schedule Karaoke</div>

          {/* Form */}
          <div className='grid grid-cols-1 gap-6 pb-[150px] px-4'>
            {/* Date Input */}
            <div>
              <div className='text-paragraph regular-14 mb-1'>
                Pilih tanggal <span className='text-[#E15241]'>*</span>
              </div>
              <DateRangeInput
                min={min}
                control={control}
                onButtonClick={val => {
                  if (val?.start && val?.end) {
                    clearErrors('date')
                    setValue('date', { start: val.start, end: val.end }, { shouldValidate: true })
                  }
                }}
              />
            </div>

            {/* Time Input */}
            <div>
              <div className='text-paragraph regular-14 mb-1'>
                Jam <span className='text-[#E15241]'>*</span>
              </div>
              <TimeRangeInput
                disabled={availableTimesLoading}
                availableTimes={availableTimes}
                control={control}
                onButtonClick={val => {
                  if (val?.start && val?.end) {
                    clearErrors('time')
                    setValue('time', { start: val.start, end: val.end }, { shouldValidate: true })
                  }
                }}
              />
            </div>

            {/* Keperluan Input */}
            <div>
              <div className='text-paragraph regular-14 mb-1'>
                Keperluan <span className='text-[#E15241]'>*</span>
              </div>
              <ReasonInputArea
                control={control}
                onChangeInput={val => {
                  if (val) {
                    clearErrors('reason')
                    setValue('reason', val, {
                      shouldValidate: true,
                    })
                  }
                }}
              />
            </div>
          </div>

          {/* Button submit */}
          <Footer>
            <div className='bg-white pt-3 pb-12 px-3 w-full'>
              <button
                disabled={isSubmitLoading}
                type='submit'
                onClick={() => onSubmit()}
                className='next-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]'
              >
                {isSubmitLoading && <IconSpinner className='animate-spin' />}
                {!isSubmitLoading && 'Lanjutkan'}
              </button>
            </div>
          </Footer>
        </form>
      </div>
    </div>
  )
}
