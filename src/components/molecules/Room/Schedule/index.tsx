'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'

import './style.css'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'

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

  const onSubmit = async () => {
    router.push('/booking-asset/room/meeting-room')
  }

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full max-container h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 ml-4">
        <Link href={'/booking-asset/room'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft></IconChevronLeft>
        </Link>
      </div>

      <div className="bg-white w-full max-container fixed bottom-0 top-0 z-[101] mt-[216px]">
        <form className="relative h-full overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Meeting Room</div>

          <div className="grid grid-cols-1 gap-6 px-4 pb-[150px]">
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
              <ReasonInputArea
                value={reason}
                onChangeInput={val => {
                  setValue('reason', val)
                }}
              />
            </div>
          </div>

          <div className="fixed bottom-0 pb-12 w-full max-container px-4 bg-white pt-3">
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
  )
}
