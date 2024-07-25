'use client'

// import * as Yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

import './style.css'
import bookingAsset from '@assets/images/BookingAsset.png'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { DefaulManpowerScheduleForm, ManpowerScheduleForm } from '@interfaces/schedule'
import CapacityInput from '@components/atoms/CapacityInput'
import Footer from '@components/atoms/Footer'

// const schema = Yup.object().shape({
//   gender: Yup.string().required('Jenis kelamin wajib diisi'),
//   date: Yup.string().required('Tanggal wajib diisi'),
//   time: Yup.string().required('Waktu wajib diisi'),
//   reason: Yup.string().required('Keperluan wajib diisi'),
//   manpower: Yup.string().required('Jumlah Manpower wajib diisi'),
// })

export function Schedule() {
  const router = useRouter()

  const [gender, setGender] = useState<string>('')

  const { handleSubmit, setValue, control } = useForm<ManpowerScheduleForm>({
    defaultValues: DefaulManpowerScheduleForm,
    // resolver: yupResolver(schema), // Menggunakan yupResolver untuk validasi
  })

  const manpower = useWatch({
    control,
    name: 'manpower',
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
    router.push('/booking-asset/manpower/process')
  }

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value)
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
              <div className="text-paragraph regular-14 mb-1">
                Jenis Kelamin: <span className="text-[#E15241] -mt-1">*</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <label className="container">
                  Laki-Laki{' '}
                  <input type="radio" checked={gender === 'L'} onChange={handleGenderChange} name="gender" value="L" />
                  <span className="radio"></span>
                </label>

                <label className="container">
                  Perempuan{' '}
                  <input type="radio" checked={gender === 'P'} onChange={handleGenderChange} name="gender" value="P" />
                  <span className="radio"></span>
                </label>
              </div>
            </div>

            {/* Date Input */}
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
              ></DateRangeInput>
            </div>

            {/* Time Input */}
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

            {/* Keperluan Input */}
            <div>
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

            {/* Manpower Input */}
            <div>
              <div className="text-paragraph regular-14 mb-1">
                Kebutuhan Manpower <span className="text-[#E15241]">*</span>
              </div>

              <CapacityInput
                name="manpower"
                control={control}
                data={[1, 2, 3, 4, 5]}
                value={manpower}
                onButtonClick={val => {
                  setValue('manpower', val)
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
