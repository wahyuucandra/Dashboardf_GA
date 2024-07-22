'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { ballroomFacility, options } from './data'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import IconButtonMinus from '@assets/icons/IconButtonMinus'
import IconButtonPlus from '@assets/icons/IconButtonPlus'
import bookingAsset from '@assets/images/BookingAsset.png'
import CapacityInput from '@components/atoms/CapacityInput'
import SelectInput from '@components/atoms/Form/Select'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { BallroomScheduleForm, DefaulBallroomScheduleForm } from '@interfaces/schedule'
import { BallroomFacility } from '@interfaces/room'

export function BallroomSchedule() {
  const [facilityList, setFacilityList] = useState<BallroomFacility[]>(ballroomFacility)

  const router = useRouter()

  const { handleSubmit, setValue, control } = useForm<BallroomScheduleForm>({
    defaultValues: DefaulBallroomScheduleForm,
  })

  const date = useWatch({
    control,
    name: 'date',
  })

  const time = useWatch({
    control,
    name: 'time',
  })

  const capacity = useWatch({
    control,
    name: 'capacity',
  })

  const facility = useWatch({
    control,
    name: 'facility',
  })

  const reason = useWatch({
    control,
    name: 'reason',
  })

  const onSubmit = async () => {
    router.push('/booking-asset/room/ballroom/1')
  }

  const addFacility = () => {
    if (facility) {
      const selectedFacility = facility as any
      const updatedFacility = [...facilityList]

      updatedFacility.push({
        id: selectedFacility.value.id,
        facility: selectedFacility.value.facility,
        qty: selectedFacility.value.qty,
      })

      setFacilityList(updatedFacility)
      setValue('facility', []) // Clear the selected facility
    } else {
      toast.error('Facility is undefined or does not have a valid structure')
    }
  }

  const handleDecrementQty = (id: number) => {
    const updatedFacilityList = facilityList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty - 1,
        }
      }
      return item
    })

    setFacilityList(updatedFacilityList)
  }

  const handleIncrementQty = (id: number) => {
    const updatedFacilityList = facilityList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        }
      }
      return item
    })

    setFacilityList(updatedFacilityList)
  }

  const filteredOptions = options.filter(option => !facilityList.some(facility => facility.id === option.value.id))

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

      <div className="relative bg-white w-full bottom-0 top-0 z-[101] px-4 pt-4 pb-8">
        <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-heading m semibold-21 text-[#2C598D] mb-6">Schedule Ballroom</div>

          {/* Date input */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Pilih tanggal <span className="text-[#E15241]">*</span>
              </div>
              <DateRangeInput
                control={control}
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
                control={control}
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
                control={control}
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
                <SelectInput
                  options={filteredOptions}
                  value={facility}
                  placeholder="Pilih opsi"
                  className="w-full mr-2"
                  onChange={(selectedOption: any) => {
                    setValue('facility', selectedOption)
                  }}
                />
                <button
                  className="w-1/3 text-paragraph regular-14 next-button h-[38px] rounded-lg text-heading xs text-[#FFFFFF]"
                  type="button"
                  onClick={() => {
                    addFacility()
                  }}
                >
                  + Tambah
                </button>
              </div>

              <div className="overflow-x-auto">
                {facilityList.length > 0 ? (
                  <table className="table mt-2">
                    <thead className="bg-[#f5f5f5] semibold-14">
                      <tr className="text-center text-black">
                        <th>Asset</th>
                        <th className="text-center">QTY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facilityList.map(item => (
                        <tr key={item.id} className="text-center">
                          <td>{item.facility}</td>
                          <td className="flex flex-row justify-center items-center">
                            <button type="button" disabled={item.qty < 1}>
                              <IconButtonMinus
                                onClick={() => handleDecrementQty(item.id)}
                                color={item.qty >= 1 ? '#0089CF' : '#d5d5d5'}
                              />
                            </button>
                            <span className="px-2">{item.qty}</span>
                            <button type="button" disabled={item.qty >= 10}>
                              <IconButtonPlus
                                onClick={() => handleIncrementQty(item.id)}
                                color={item.qty < 10 ? '#0089CF' : '#d5d5d5'}
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="border-1 p-3 border mt-3 text-center">Tidak ada fasilitas yang dipinjam</p>
                )}
              </div>
            </div>

            {/* Reason input */}
            <div className="mb-2">
              <div className="text-paragraph regular-14 mb-1">
                Keperluan <span className="text-[#E15241]">*</span>
              </div>
              <ReasonInputArea
                control={control}
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
