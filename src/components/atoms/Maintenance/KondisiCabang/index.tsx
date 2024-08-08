'use client'

import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import IconPlus from '@assets/icons/IconPlus'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import IconClose from '@assets/icons/IconClose'
import { Modal } from '@components/atoms/ModalCustom'

export function KondisiCabang () {
  const router = useRouter()

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isValidationModalOpen, setIsValidationModalOpen] = useState<boolean>(false)

  // State untuk menyimpan gambar yang diunggah pengguna
  const [uploadedImages, setUploadedImages] = useState<File[]>([])

  const handleDeleteImage = (indexToDelete: number) => {
    setUploadedImages(prevImages => prevImages.filter((_, i) => i !== indexToDelete))
  }

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages = Array.from(files).map(file => file)
      setUploadedImages(prevImages => [...prevImages, ...newImages])
    }
  }

  return (
    <div>
      {/* Header navigation */}
      <Header
        prevLink='/building-maintenance/maintenance/management'
        title='Building Maintenance'
        key={'header'}
        useLink={false}
        onBack={() => setIsConfimationModalOpen(true)}
      />

      {/* Form kondisi cabang */}
      <div className='px-6 pt-16 overflow-hidden mb-4'>
        {/* Bagian Judul */}
        <div className='mb-4'>
          <p className='text-heading s semibold-18'>Foto Kondisi Cabang</p>
          <p className='text-paragraph regular-14'>
            Silahkan lengkapi konfirmasi di bawah ini dengan memfoto kondisi pada bangunan cabang
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {/* Menampilkan gambar yang diunggah */}
          {uploadedImages.map((image, index) => (
            <div key={index} className='relative'>
              <div className='grid place-items-center h-[108px] w-full'>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded Image ${index}`}
                  width={0}
                  height={0}
                  className='w-full h-[108px] object-cover rounded'
                />
                <button
                  className='absolute top-0 right-0 bg-[#d8d8d8] rounded-full w-5 h-5 flex items-center justify-center hover:opacity-100 transition duration-200 ease-in-out'
                  onClick={() => handleDeleteImage(index)} // Pass the index for deletion
                >
                  <IconClose color='white' />
                </button>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {uploadedImages.length === 0 && (
            <div className='col-span-2 text-center text-gray-400'>Belum ada foto kondisi cabang.</div>
          )}

          {/* Add "Tambahkan Foto" button conditionally */}
          {uploadedImages.length < 3 && (
            <div className='flex flex-col items-center justify-center'>
              <div className='border border-[#4A90E2] border-dashed rounded grid place-items-center w-full h-[108px] items-center justify-center'>
                <label htmlFor='imageUpload' className='cursor-pointer'>
                  <IconPlus />
                </label>
                <input
                  type='file'
                  id='imageUpload'
                  accept='image/*'
                  multiple
                  onChange={handleImageUpload}
                  className='hidden'
                />
              </div>
              <div>
                <p className='mt-2 text-[#4A90E2]'>Tambahkan Foto</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Confirmation */}
      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}>
        <div className='max-w-[350px] bg-white relative p-6 text-center rounded-xl'>
          <div>
            <Image
              width={0}
              height={0}
              sizes='100'
              src={confirmationDanger.src}
              className='mx-auto mb-4 w-28 h-28'
              alt='confirmation'
            />
          </div>
          <div className='text-heading s semibold-18 text-[#252525] mb-1'>Konfirmasi Pindah Menu</div>
          <div className='text-paragraph regular-14 text-[#717171] mb-8 px-3'>
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className='grid grid-cols-2 gap-4 justify-items-center'>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
                router.push(`/building-maintenance/maintenance/management`, { scroll: false })
              }}
              type='button'
              className='exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11'
            >
              <div className='py-2.5 px-6 text-heading xs semibold-16'>Pindah</div>
            </button>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
              }}
              type='button'
              className='cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11'
            >
              <div className='py-2.5 px-6 text-heading xs semibold-16'>Batal</div>
            </button>
          </div>
        </div>
      </Modal>

      {/* Validation Modal */}
      <Modal isOpen={isValidationModalOpen} backdropClick={() => setIsValidationModalOpen(!isValidationModalOpen)}>
        <div className='mx-3 sm:mx-0 max-w-[350px] bg-white relative p-6 text-center rounded-xl'>
          <div>
            <Image
              width={0}
              height={0}
              sizes='100'
              src={confirmationDanger.src}
              className='mx-auto mb-4 w-28 h-28'
              alt='confirmation'
            />
          </div>
          <div className='text-heading s semibold-18 text-[#252525] mb-1'>Tidak Bisa Request!</div>
          <div className='text-paragraph regular-14 text-[#717171] mb-8 px-3'>
            Cabang Anda sudah diajukan sebelumnya. Anda tidak bisa merequest lagi.
          </div>

          <div className='grid grid-cols-1 gap-4 justify-items-center'>
            <button
              onClick={() => {
                setIsValidationModalOpen(false)
              }}
              type='button'
              className='cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11'
            >
              <div className='py-2.5 px-6 text-heading xs semibold-16'>Kembali</div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
