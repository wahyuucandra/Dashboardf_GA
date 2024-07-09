'use client'

import IconDotsVertical from '@assets/icons/IconDotsVertical'
import Header from '@components/atoms/Header'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { DefaulVehicleOrderForm, VehicleOrderForm } from '@interfaces/schedule'
import { useRouter } from 'next/navigation'
import BannerCar from '@assets/images/BannerCar.png'
import Image from 'next/image'

import { useForm, useWatch } from 'react-hook-form'
import IconCloudDownload from '@assets/icons/IconCloudDownload'
import Link from 'next/link'
import IconCloudUpload from '@assets/icons/IconCloudUpload'
import { useRef } from 'react'
import IconPencil from '@assets/icons/IconPencil'
import IconTrash from '@assets/icons/IconTrash'
import './style.css'

export function DetailOrder() {
  const router = useRouter()

  const fileInput = useRef<HTMLInputElement>(null)

  const array = new Uint32Array(1)
  const fileInputKey = useRef<string>(crypto.getRandomValues(array).toString())

  const { handleSubmit, setValue, control } = useForm<VehicleOrderForm>({
    defaultValues: { ...DefaulVehicleOrderForm },
  })

  const fileForm = useWatch({
    control,
    name: 'fileForm',
  })

  const onSubmit = async () => {
    router.push('/booking-asset/vehicle/special-operational/process')
  }

  const onFileClicked = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  return (
    <>
      <Header prevLink="/booking-asset/vehicle/special-operational/0" title="Detail Pesanan" key={'header'}></Header>
      <div className="px-6 pt-16 h-screen bg-[#F6F6F6]">
        <div className="text-heading xs semibold-16 text-[#0C0C0C] -mr-6 px-2 py-2 border-b border-[#E6E5E6]">
          Pesanan Berlangsung
        </div>
        <br />
        <div className="bg-[#FFFFFF] rounded-md text-paragraph regular-14 p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#0C0C0C]">Kode Booking</span>
            <span className="text-[#505050]">F-2468623081</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#0C0C0C]">Tanggal Selesai</span>
            <span className="text-[#505050]">Kamis, 24 Mei 2024</span>
          </div>
        </div>

        <br />

        <div className="bg-[#FFFFFF] rounded-md  p-3">
          <div className="text-heading xs semibold-16 mb-4">Detail Produk</div>

          {/* Item Vehicle */}
          <div className="border border-[#D5D5D5] p-3 rounded-md">
            <div className="flex items-center space-x-1">
              <div className="flex-1 mt-1">
                <div className="text-paragraph semibold-14 mb-1">Vehicle</div>
                <div className="text-extra-small regular-12">14 Mei 2024</div>
              </div>
              <div className="text-right">
                <div className="inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded">
                  Kirim Dokumen
                </div>
                <div className="mt-1 text-extra-small regular-12 text-[#909090]">Kirim Form sebelum 19.30</div>
              </div>
              <div className="flex-shrink-0">
                <button>
                  <IconDotsVertical></IconDotsVertical>
                </button>
              </div>
            </div>

            <hr className="my-3 border-b border-[#E6E5E6]" />

            <div className="flex space-x-3">
              <div>
                <Image
                  width={0}
                  height={0}
                  sizes="100"
                  className="object-cover w-[72px] h-[72px] rounded"
                  src={BannerCar.src}
                  alt="Banner 1"
                />
              </div>
              <div className="flex-1">
                <div className="text-paragraph semibold-14 tetx-[#0C0C0C] mb-1">Operational Khusus</div>
                <div className="text-extra-small regular-12 text-[#909090]">Toyota Innova Reborn 2022</div>
              </div>
            </div>
          </div>

          <br />

          {/* Form */}
          <div className="border border-[#D5D5D5] p-3 rounded-md">
            <div className="text-paragraph semibold-14">FORM KELUAR MASUK KENDARAAN INVENTARIS</div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="p-1">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-paragraph regular-14 mb-3">
                  Untuk peminjaman kendaraan diwajibkan untuk melampirkan form dan sudah di tanda tangani.
                </div>
                <Link
                  href={'https://pii.or.id/uploads/dummies.pdf'}
                  target="_blank"
                  className="border border-[#0072BB] bg-[#E9F9FE] text-paragraph regular-14 flex items-center px-4 py-3 w-full justify-center space-x-2 rounded mb-3"
                >
                  <IconCloudDownload></IconCloudDownload>

                  <span className="text-[#626262]">
                    Klik <span className="text-paragraph semibold-14 text-[#0089CF]">disini</span> untuk mengunduh file
                  </span>
                </Link>

                <input
                  key={fileInputKey.current}
                  ref={fileInput}
                  id="fileInput"
                  type="file"
                  className="hidden"
                  accept="application/pdf"
                  onChange={e => {
                    if (e?.target.files?.length) {
                      setValue('fileForm', e?.target?.files[0])
                      fileInputKey.current = Math.random().toString(36)
                    }
                  }}
                />

                {!fileForm && (
                  <button
                    onClick={onFileClicked}
                    className="border border-[#0072BB] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full justify-center space-x-2 rounded"
                  >
                    <IconCloudUpload></IconCloudUpload>

                    <span className="text-[#626262]">
                      Klik <span className="text-paragraph semibold-14 text-[#0089CF]">disini</span> untuk pilih file
                    </span>
                  </button>
                )}

                {fileForm && (
                  <div className="border border-[#0072BB] border-dashed text-paragraph regular-14 flex items-center px-4 py-3 w-full space-x-2 rounded">
                    <span className="flex-1 truncate w-40">{fileForm?.name}</span>

                    <button
                      onClick={onFileClicked}
                      className="border border-[#0072BB] flex items-center justify-center rounded w-7 h-7"
                    >
                      <IconPencil></IconPencil>
                    </button>
                    <button
                      onClick={() => setValue('fileForm', undefined)}
                      className="border border-[#FF4040] flex items-center justify-center rounded w-7 h-7"
                    >
                      <IconTrash></IconTrash>
                    </button>
                  </div>
                )}

                <br />

                <button
                  disabled={!fileForm}
                  type="submit"
                  className={`${
                    !fileForm ? 'bg-[#B1B1B1]' : 'submit-button'
                  } h-11 w-full text-[#ffffff] py-2.5 text-paragraph semibold-14 rounded-lg`}
                >
                  Submit File
                </button>
              </form>
            </div>
          </div>
        </div>

        <br />

        {/* Order Detail */}
        <div className="bg-[#FFFFFF] rounded-md  p-3">
          <div className="text-heading xs semibold-16 mb-4">Rincian Peminjaman</div>

          <div className="text-paragraph regular-14">
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Lokasi</span>
              <span className="text-[#0C0C0C]">ACC HO</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Dengan Driver</span>
              <span className="text-[#0C0C0C]">Ya</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Nomor Polisi</span>
              <span className="text-[#0C0C0C]">B1234ZXC</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Tanggal</span>
              <span className="text-[#0C0C0C]">23 Mei - 24 Mei 2024</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Jam</span>
              <span className="text-[#0C0C0C]">16:00 - 18:00</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div className="flex items-center justify-between">
              <span className="text-[#505050]">Kapasitas</span>
              <span className="text-[#0C0C0C]">4 orang</span>
            </div>
            <hr className="my-3 border-b border-[#E6E5E6]" />
            <div>
              <div className="text-[#505050] mb-3">Keperluan</div>
              <ReasonInputArea
                disabled={true}
                showCounter={false}
                value={'Mengunjungi dealer untuk sosialisasi program baru'}
              ></ReasonInputArea>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <VehicleBannerImage photos={photos}></VehicleBannerImage>

        <div className="fixed top-4 left-4">
          <Link
            href={'/booking-asset/vehicle/special-operational'}
            className="rounded-md bg-white w-8 h-8 flex items-center justify-center"
          >
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </div>

        <div className="px-6 pt-[290px] h-screen">
          <VehicleDescription vehicle={vehicle}></VehicleDescription>
          <br />
          <VehicleInformation vehicle={vehicle}></VehicleInformation>
          <br />
          <VehicleTerms vehicle={vehicle}></VehicleTerms>
          <br />
          <label className="flex-1 flex items-center custom-checkbox text-paragraph regular-14">
            <span className="text-[#252525]">
              Saya menyetujui <span className="text-[#0089CF]">syarat dan ketentuan</span> yang berlaku
            </span>
            <input
              type="checkbox"
              onChange={e => setAcceptTerm(e?.target?.checked)}
              defaultChecked={acceptTerm}
              name="checkmark"
            />
            <span className="-mt-0.5 checkmark"></span>
          </label>
        </div>
      </div>
      <VehicleBooking acceptTerm={acceptTerm}></VehicleBooking> */}
    </>
  )
}
