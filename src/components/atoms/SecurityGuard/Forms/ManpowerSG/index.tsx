import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import DatePickerForm from '@components/atoms/Form/DatePickerForm'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import { Button } from '@components/atoms/button'
import SelectForm from '../../../Form/SelectForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  password: Yup.string().required('Kata sandi wajib diisi'),
})

export default function FormManpowerSG() {
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
            <SelectForm
              control={control}
              name="selectedOption"
              fieldLabel={{ children: 'Select an option' }}
              options={options}
              setValue={setValue}
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
              fieldInput={{
                placeholder: 'Misalnya: Jakarta',
              }}
              name="area"
              control={control}
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
