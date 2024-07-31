'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import FileInput from '@components/atoms/FileInput'
import DatePickerForm from '@components/atoms/Form/DatePickerForm'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { FuelManagementForm, defaulFuelManagementForm } from '@interfaces/ehs'

const formSchema = yup.object().shape({
  area: yup.string().required('Area wajib diisi'),
  branch: yup.string().required('Cabang wajib diisi'),
  lastUpdate: yup.date().required('Update terakhir wajib diisi'),
  existFuelUsage: yup.number().required('Fuel meter existing wajib diisi'),
  updateFuelUsage: yup.number().required('Fuel meter update wajib diisi'),
})

export function MaintenancePengajuan({ onSubmitForm }: { onSubmitForm: (formValue: FuelManagementForm) => void }) {
  const { handleSubmit, control } = useForm<FuelManagementForm>({
    defaultValues: defaulFuelManagementForm,
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  })

  // const handleMappingDate = (date: Date) => {
  //   return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  // }

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File) => {
    setSelectedFile(file)
  }

  const onSubmit = (formValue: FuelManagementForm) => {
    onSubmitForm(formValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Area</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan Area',
            }}
            name="area"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Cabang</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan Cabang',
            }}
            name="branch"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Tanggal Pengajuan</p>
          {/* <TextForm
            fieldInput={{
              placeholder: 'Masukkan Tanggal Pengajuan',
            }}
            name="lastUpdate"
            control={control}
          /> */}
          <DatePickerForm
            control={control}
            name="lastUpdate"
            disablePast
            placeholder="Pilih tanggal pengajuan"
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Deskripsi Pengajuan</p>
          <TextAreaForm
            control={control}
            name="description"
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Estimasi Cost</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan perkiraan biaya yang diperlukan',
            }}
            name="costEstimation"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">
            Upload File dalam bentuk PDF/JPG/PNG<span className="text-red-500">*</span>
          </p>
          <FileInput onChangeFile={handleFileChange} value={selectedFile} />
        </div>
        <button type="submit" className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]">
          Submit
        </button>
      </form>
    </div>
  )
}
