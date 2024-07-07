'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import ReasonInput from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import './style.css'

export function Schedule() {
  const router = useRouter()

  const { handleSubmit, setValue, control } = useForm<ScheduleForm>({ defaultValues: DefaulScheduleForm })

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

  const onSubmit = async (data: any) => {
    router.push('/booking-asset/room/meeting-room')
  }

  return (
    <>
      <div className="relative">
        <Image
          width={0}
          height={0}
          sizes="100"
          className="fixed top-0 right-0 object-cover w-full h-[188px] rounded-b"
          src={bookingAsset.src}
          alt="Booking Asset"
        ></Image>

        <div className="fixed top-4 left-4">
          <Link href={'/'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <div className="bg-white w-full fixed bottom-0 top-0 z-[101] px-4 mt-[216px]">
          <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Meeting Room</div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <div className="text-paragraph regular-14 mb-1">
                  Pilih tanggal <span className="text-[#E15241]">*</span>
                </div>
                <DateRangeInput
                  value={date}
                  onButtonClick={val => {
                    setValue('date', val)
                  }}
                ></DateRangeInput>
              </div>
              <div>
                <div className="text-paragraph regular-14 mb-1">
                  Jam <span className="text-[#E15241]">*</span>
                </div>
                <TimeRangeInput
                  value={time}
                  onButtonClick={val => {
                    setValue('time', val)
                  }}
                ></TimeRangeInput>
              </div>
              <div>
                <div className="text-paragraph regular-14 mb-1">
                  Kapasitas <span className="text-[#E15241]">*</span>
                </div>

                <CapacityInput
                  data={[1, 2, 3, 4, 5]}
                  value={capacity}
                  onButtonClick={val => {
                    setValue('capacity', val)
                  }}
                ></CapacityInput>
              </div>
              <div>
                <div className="text-paragraph regular-14 mb-1">
                  Keperluan <span className="text-[#E15241]">*</span>
                </div>
                <ReasonInput
                  value={reason}
                  onChangeInput={val => {
                    setValue('reason', val)
                  }}
                ></ReasonInput>
              </div>
            </div>

            <div className="absolute bottom-12 w-full">
              <button
                type="submit"
                className="next-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]"
              >
                Lanjutkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
