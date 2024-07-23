'use client'

// import * as Yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

import bookingAsset from '@assets/images/BookingAsset.png'
import IconChevronLeft from '@assets/icons/IconChevronLeft'
import { DateRangeInput } from '@components/atoms/DateRangeInput'
import { TimeRangeInput } from '@components/atoms/TimeRangeInput'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { DefaulKaraokeScheduleForm, KaraokeScheduleForm } from '@interfaces/schedule'

// const schema = Yup.object().shape({
//   gender: Yup.string().required('Jenis kelamin wajib diisi'),
//   date: Yup.string().required('Tanggal wajib diisi'),
//   time: Yup.string().required('Waktu wajib diisi'),
//   reason: Yup.string().required('Keperluan wajib diisi'),
//   capacity: Yup.string().required('Jumlah Manpower wajib diisi'),
// })

export function KaraokeSchedule() {
  const router = useRouter()

  const { handleSubmit, setValue, control } = useForm<KaraokeScheduleForm>({
    defaultValues: DefaulKaraokeScheduleForm,
    // resolver: yupResolver(schema), // Menggunakan yupResolver untuk validasi
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
    // console.log(formData) // Menggunakan formData untuk mendapatkan nilai yang di-submit
    router.push('/booking-asset/room/karaoke/success')
  }

  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100"
        className="fixed top-0 object-cover w-full h-[188px] rounded-b"
        src={bookingAsset.src}
        alt="Booking Asset"
      ></Image>

      <div className="fixed top-4 left-4">
        <Link href={'/booking-asset/room'} className="rounded-md bg-white w-8 h-8 flex items-center justify-center">
          <IconChevronLeft />
        </Link>
      </div>

      <div className="bg-white w-full fixed bottom-0 top-0 z-[101] px-4 mt-[216px]">
        <form className="relative h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-2xl font-semibold text-[#2C598D] mb-6">Schedule Karaoke</div>

          {/* Date Input */}
          <div className="mb-5">
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
          <div className="mb-5">
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
          <div className="mb-5">
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

          {/* Button submit */}
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
