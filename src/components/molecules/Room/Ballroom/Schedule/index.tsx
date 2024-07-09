'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'

import './style.css'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import bookingAsset from '@assets/images/BookingAsset.png'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { DefaulScheduleForm, ScheduleForm } from '@interfaces/schedule'
import CapacityInput from '@components/atoms/CapacityInput'
import SelectForm from '@components/atoms/Form/SelectForm'

export function BallroomSchedule() {
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

  const options = [
    { label: 'Proyektor (2)', value: 'proyektor' },
    { label: 'Kursi (2)', value: 'kursi' },
    { label: 'Meja (2)', value: 'meja' },
    { label: 'Mic (2)', value: 'mic' },
  ]

  return (
    <div>
      <Image
        width={0}
        height={0}
        sizes="100"
        className=" top-0 right-0 object-cover w-full h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      />

      <div className="fixed top-4 left-4">
        <Link href={'/booking-asset/room'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="bg-white w-full px-4 z-[101] bottom-0 top-0 mt-2">
        <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Ballroom</div>

          {/* Date input */}
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
              />
            </div>

            {/* Time input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Jam <span className="text-[#E15241]">*</span>
              </div>
              <TimeRangeInput
                value={time}
                onButtonClick={val => {
                  setValue('time', val)
                }}
              />
            </div>

            {/* Capacity input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Jumlah orang <span className="text-[#E15241]">*</span>
              </div>
              <CapacityInput
                data={[1, 2, 3, 4, 5]}
                value={capacity}
                onButtonClick={val => {
                  setValue('capacity', val)
                }}
                placeholder="Masukan jumlah orang"
                label="orang"
              />
            </div>

            {/* Facility input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Fasilitas <span className="text-[#E15241]">*</span>
              </div>
              <div className="flex flex-row items-center justify-center">
                <SelectForm
                  fieldInput={{}}
                  control={control}
                  name="exampleSelect"
                  options={options}
                  setValue={setValue}
                  placeholder="Pilih opsi"
                  isSearchable={true}
                  // onChangeValue={(value: string | number) => {
                  //   console.log('Selected value:', value)
                  // }}
                  isDisabled={false}
                  isLoading={false}
                  className="w-full mr-2"
                />
                <button
                  className="w-1/3 text-paragraph regular-14 next-button h-[38px] rounded-lg text-heading xs text-[#FFFFFF]"
                  type="button"
                >
                  Tambah
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="table mt-2">
                  {/* head */}
                  <thead className="bg-[#f5f5f5] semibold-14">
                    <tr className="text-center text-black">
                      <th>Asset</th>
                      <th className="text-center">QTY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-center">
                      <td>Meja</td>
                      <td>1</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="text-center">
                      <td>Kursi</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Capacity input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Jumlah orang <span className="text-[#E15241]">*</span>
              </div>
              <CapacityInput
                data={[1, 2, 3, 4, 5]}
                value={capacity}
                onButtonClick={val => {
                  setValue('capacity', val)
                }}
                placeholder="Masukan jumlah orang"
                label="orang"
              />
            </div>

            {/* Reason input */}
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

          {/* Button submit */}
          <div className="bottom-12 w-full">
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
