import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
import DatePickerForm from '@components/atoms/Form/DatePickerForm'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  password: Yup.string().required('Kata sandi wajib diisi'),
})

export default function FormASMS() {
  const { handleSubmit, control } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = () => {}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Area</p>
            <TextForm
              fieldInput={{
                placeholder: 'Misalnya: Jakarta',
              }}
              name="area"
              control={control}
            />
          </div>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Cabang</p>
            <TextForm
              fieldInput={{
                placeholder: 'Misalnya: Jakarta',
              }}
              name="area"
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
            <DatePickerForm
              control={control}
              name="submissionDate"
              disablePast
              placeholder="Pilih tanggal pengajuan"
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Nama Manpower Existing</p>
            <TextForm
              fieldInput={{
                placeholder: 'Misalnya: Jakarta',
              }}
              name="area"
              control={control}
            />
          </div>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Lama Bekerja</p>
            <TextForm
              control={control}
              name="year"
              fieldLabel={{ children: 'Phone Number' }}
              fieldInput={{ placeholder: 'Enter phone number' }}
              suffix="Tahun"
            />
            <TextForm
              control={control}
              name="month"
              fieldLabel={{ children: 'Phone Number' }}
              fieldInput={{ placeholder: 'Enter phone number' }}
              suffix="Bulan"
            />
          </div>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Alasan</p>
            <TextAreaForm
              control={control}
              name="description"
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
    </>
  )
}
