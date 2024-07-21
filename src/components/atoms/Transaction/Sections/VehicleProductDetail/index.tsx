'use client'

import IconCloudDownload from '@assets/icons/IconCloudDownload'
import IconCloudUpload from '@assets/icons/IconCloudUpload'
import IconDotsVertical from '@assets/icons/IconDotsVertical'
import IconPencil from '@assets/icons/IconPencil'
import IconTrash from '@assets/icons/IconTrash'
import BannerCar from '@assets/images/BannerCar.png'
import { DefaulVehicleOrderForm, VehicleOrderForm } from '@interfaces/schedule'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import './style.css'

export function VehicleProductDetail() {
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

  const onSubmit = async () => {}

  const onFileClicked = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  return (
    <div className="bg-[#FFFFFF] rounded-md p-3">
      <div className="text-heading xs semibold-16 mb-4">Detail Produk</div>

      <div className="border border-[#D5D5D5] p-3 rounded">
        <div className="flex items-center space-x-1">
          <div className="flex-1 mt-1">
            <div className="text-paragraph semibold-14 mb-1 text-[#0C0C0C]">Vehicle</div>
            <div className="text-extra-small regular-12 text-[#909090]">14 Mei 2024</div>
          </div>
          <div className="text-right">
            <div className={`inline text-extra-small semibold-12 bg-[#FDF4E2] text-[#F19D38] px-2 py-[1.5px] rounded`}>
              Kirim Dokumen
            </div>
            {/* <div className={`inline text-extra-small semibold-12 bg-[#D3FED7] text-[#4EC558] px-2 py-[1.5px] rounded`}>
              Selesai
            </div> */}
            {/* <div className={`inline text-extra-small semibold-12 bg-[#FCEBEE] text-[#FF4040] px-2 py-[1.5px] rounded`}>
              Tidak Berhasil
            </div> */}

            <div className={`mt-1 text-extra-small regular-12 text-[#909090]`}>Kirim Form sebelum 19.30</div>
          </div>
          <button>
            <IconDotsVertical></IconDotsVertical>
          </button>
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
            {/* <div className="text-paragraph regular-14 mb-3">
              Untuk peminjaman kendaraan diwajibkan untuk melampirkan form dan sudah di tanda tangani.
            </div> */}
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
                  fileInputKey.current = crypto.getRandomValues(array).toString()
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
  )
}
