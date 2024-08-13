'use client'

import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { ReasonInput } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { DefaulVehicleScheduleForm, VehicleScheduleForm } from '@interfaces/schedule'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import './style.css'

export function Schedule() {
  const router = useRouter()

  const { handleSubmit, setValue, control } = useForm<VehicleScheduleForm>({
    defaultValues: DefaulVehicleScheduleForm,
  })

  const withDriver = useWatch({
    control,
    name: 'withDriver',
  })

  const plateType = useWatch({
    control,
    name: 'plateType',
  })

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
    router.push('/booking-asset/vehicle/special-operational')
  }

  const min = new Date(new Date().setHours(0, 0, 0, 0))

  return (
    <div className="relative max-container">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full h-[188px] rounded-b max-container"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 ml-4">
        <Link href={'/booking-asset/vehicle'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="bg-white w-full fixed bottom-0 top-0 z-[101] px-4 mt-[216px] max-container">
        <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Operation Khusus</div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="text-paragraph regular-14 mb-2">
                Dengan driver?
                <span className="text-[#E15241]">*</span>
              </div>
              <div className="w-2/3 flex items-center space-x-1">
                <label className="flex-1 flex items-center custom-radio text-paragraph regular-14">
                  <span className="text-[#252525]">Ya</span>
                  <input
                    type="radio"
                    onChange={() => setValue('withDriver', true)}
                    defaultChecked={withDriver}
                    name="radio"
                  />
                  <span className="-mt-0.5 radio"></span>
                </label>

                <label className="flex-1 flex items-center custom-radio text-paragraph regular-14">
                  <span className="text-[#252525]">Tidak</span>
                  <input
                    type="radio"
                    onChange={() => setValue('withDriver', false)}
                    defaultChecked={withDriver === false}
                    name="radio"
                  />
                  <span className="-mt-0.5 radio"></span>
                </label>
              </div>
            </div>
            <div>
              <div className="text-paragraph regular-14 mb-2">
                Nomor Polisi
                <span className="text-[#E15241]">*</span>
              </div>
              <div className="w-2/3 flex items-center space-x-1">
                <label className="flex-1 flex items-center custom-checkbox text-paragraph regular-14">
                  <span className="text-[#252525]">Ganjil</span>
                  <input
                    type="checkbox"
                    onChange={e =>
                      setValue('plateType', {
                        odd: e.target.checked,
                        even: plateType?.even,
                      })
                    }
                    defaultChecked={plateType?.odd}
                    name="checkmark"
                  />
                  <span className="-mt-0.5 checkmark"></span>
                </label>

                <label className="flex-1 flex items-center custom-checkbox text-paragraph regular-14">
                  <span className="text-[#252525]">Genap</span>
                  <input
                    type="checkbox"
                    onChange={e =>
                      setValue('plateType', {
                        odd: plateType?.odd,
                        even: e.target.checked,
                      })
                    }
                    defaultChecked={plateType?.even}
                    name="checkmark"
                  />
                  <span className="-mt-0.5 checkmark"></span>
                </label>
              </div>
            </div>
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Pilih tanggal <span className="text-[#E15241]">*</span>
              </div>
              <DateRangeInput
                min={min}
                control={control}
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
                control={control}
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
                control={control}
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
  )
}
