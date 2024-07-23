'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import Footer from '@components/atoms/Footer'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
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

export function Schedule() {
  const router = useRouter()

  const { handleSubmit, setValue, control, clearErrors, formState } = useForm<ScheduleForm>({
    defaultValues: DefaulScheduleForm,
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const { isValid } = formState

  const capacity = useWatch({
    control,
    name: 'capacity',
  })

  const date = useWatch({
    control,
    name: 'date',
  })

  const time = useWatch({
    control,
    name: 'time',
  })

  const reason = useWatch({
    control,
    name: 'reason',
  })

  const onSubmit = async () => {
    // data: ScheduleForm
    // Action Here
    if (isValid) {
      router.push('/booking-asset/room/meeting-room')
    }
  }

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
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="bg-white py-[216px] h-screen overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6 px-4">Schedule Meeting Room</div>

          <div className="grid grid-cols-1 gap-6 pb-[150px] px-4">
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Pilih tanggal <span className="text-[#E15241]">*</span>
              </div>
              <DateRangeInput
                name="date"
                control={control}
                value={date}
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
                name="time"
                control={control}
                value={time}
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
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                value={capacity}
                control={control}
                name="capacity"
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
                name="reason"
                control={control}
                value={reason}
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
