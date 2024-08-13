'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import Footer from '@components/atoms/Footer'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRoomListParams, IRoomScheduleForm, IRoomScheduleFormEntity } from '@interfaces/room'
import { ScheduleForm } from '@interfaces/schedule'
import { IBookingTime } from '@interfaces/time'
import { apiGetRoomBookingTime } from '@services/room/api'
import { setShowNavbar } from '@store/actions/actionContainer'
import { setRoomListParams, setRoomScheduleForm } from '@store/actions/actionRoom'
import { RootState } from '@store/reducers'
import { store } from '@store/storage'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
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
  capacity: yup.number().required().typeError('Kapasitas wajib diisi'),
  reason: yup.string().required('Alasan wajib diisi'),
})

export function Schedule({ title = 'Meeting Room', category = 'Meeting Room' }: { title?: string; category?: string }) {
  const router = useRouter()

  const { dispatch } = store

  const min = new Date(new Date().setHours(0, 0, 0, 0))
  const capacities = Array.from({ length: 10 }, (_, i) => i + 1)
  const bookingLocation = useSelector((state: RootState) => state.dataBookingAsset.bookingLocation)

  const [availableTimes, setAvailabelTimes] = useState<IBookingTime[]>()
  const [availableTimesLoading, setAvailableTimesLoading] = useState<boolean>()

  const { handleSubmit, setValue, control, clearErrors, formState } = useForm<ScheduleForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const { isValid } = formState

  const handleSubmitForm = (form: IRoomScheduleForm) => {
    const formDateStart = form?.date?.start?.date
    const formDateEnd = form?.date?.end?.date
    const formTimeStart = form?.time?.start?.startTime
    const formTimeEnd = form?.time?.end?.endTime

    const startBookingDate = `${moment(formDateStart).format('YYYY-MM-DD')}`
    const endBookingDate = `${moment(formDateEnd).format('YYYY-MM-DD')}`
    const timeOpen = `${moment(formTimeStart).format('HH:mm:ss')}`
    const timeClose = `${moment(formTimeEnd).format('HH:mm:ss')}`

    const params: IRoomListParams = {
      flagACCBerijalan: 'ACC',
      kategoriMenu: category,
      location: bookingLocation ?? '',
      timeOpen,
      timeClose,
      startBookingDate,
      endBookingDate,
      kapasitas: form.capacity,
    }

    const entityForm: IRoomScheduleFormEntity = {
      capacity: form.capacity,
      reason: form.reason,
    }

    dispatch(setRoomListParams(params))
    dispatch(setRoomScheduleForm(entityForm))
    if (category === 'Meeting Room') {
      router.push('/booking-asset/room/meeting-room')
    }

    if (category === 'Pods') {
      router.push('/booking-asset/room/pods')
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

  const onSubmit = async (form: IRoomScheduleForm) => {
    if (isValid) {
      handleSubmitForm(form)
    }
  }

  useEffect(() => {
    dispatch(setShowNavbar(false))
  }, [])

  useEffect(() => {
    handleFetchBookingTime()
  }, [])

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed z-[2] top-0 object-cover w-full max-container h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed z-[2] top-4 ml-4">
        <Link href={'/booking-asset/room'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="bg-white py-[216px] h-screen overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6 px-4">Schedule {title}</div>

          <div className="grid grid-cols-1 gap-6 pb-[150px] px-4">
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Pilih tanggal <span className="text-[#E15241]">*</span>
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
              ></DateRangeInput>
            </div>

            <div>
              <div className="text-paragraph regular-14 mb-1">
                Jam <span className="text-[#E15241]">*</span>
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
              ></TimeRangeInput>
            </div>

            <div>
              <div className="text-paragraph regular-14 mb-1">
                Kapasitas <span className="text-[#E15241]">*</span>
              </div>
              <CapacityInput
                data={capacities}
                control={control}
                onButtonClick={val => {
                  if (val) {
                    clearErrors('capacity')
                    setValue('capacity', val, { shouldValidate: true })
                  }
                }}
              ></CapacityInput>
            </div>

            <div>
              <div className="text-paragraph regular-14 mb-1">
                Keperluan <span className="text-[#E15241]">*</span>
              </div>
              <ReasonInputArea
                control={control}
                onChangeInput={val => {
                  if (val) {
                    clearErrors('reason')
                    setValue('reason', val, { shouldValidate: true })
                  }
                }}
              />
            </div>
          </div>
          <Footer>
            <div className="bg-white pt-3 pb-12 px-3 w-full">
              <button
                type="submit"
                className="next-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]"
              >
                Lanjutkan
              </button>
            </div>
          </Footer>
        </form>
      </div>
    </div>
  )
}
