import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
import DatePickerForm from '@components/atoms/Form/DatePickerForm'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import SelectForm from '@components/atoms/Form/SelectForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  cabang: Yup.string().required('Cabang wajib diisi'),
  submissionDate: Yup.date().required('Tanggal pengajuan wajib diisi'),
  kategoriPengajuan: Yup.object().required('Kategori pengajuan wajib dipilih'),
  shiftExisting: Yup.string().required('Shift existing wajib diisi'),
  penambahanManpower: Yup.object().required('Penambahan manpower wajib dipilih'),
  alasan: Yup.string().required('Alasan wajib diisi'),
})

export default function FormASMS() {
  const { handleSubmit, control, setValue } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const options = [
    { label: 'Armed Guard', value: 1 },
    { label: 'Unarmed Guard', value: 2 },
    { label: 'CCTV Monitoring', value: 3 },
    { label: 'Access Control', value: 4 },
    { label: 'K9 Unit', value: 5 },
  ]

  const optionsManpower = [
    { label: '1 Orang', value: 1 },
    { label: '2 orang', value: 2 },
    { label: '3 orang', value: 3 },
    { label: '4 orang', value: 4 },
    { label: '5 orang', value: 5 },
  ]

  const onSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Area</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan area',
            }}
            name="area"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Cabang</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan cabang',
            }}
            name="cabang"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Tanggal Pengajuan</p>
          <DatePickerForm
            control={control}
            name="submissionDate"
            disablePast
            placeholder="Pilih tanggal pengajuan"
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Kategori Pengajuan</p>
          <SelectForm
            control={control}
            name="kategoriPengajuan" // name matches label
            placeholder="Pilih kategori pengajuan"
            options={options}
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Shift Existing</p>
          <TextAreaForm
            control={control}
            name="shiftExisting" // name matches label
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Penambahan Manpower</p>
          <SelectForm
            control={control}
            name="penambahanManpower" // name matches label
            placeholder="Pilih penambahan manpower"
            options={optionsManpower}
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Alasan</p>
          <TextAreaForm
            control={control}
            name="alasan" // name matches label
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <Button
          type="submit"
          className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF] mb-4"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
