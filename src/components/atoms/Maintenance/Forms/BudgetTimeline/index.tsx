'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  password: Yup.string().required('Kata sandi wajib diisi'),
})

export function MaintenanceBudget() {
  const { handleSubmit, control } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = () => {}

  return (
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
          <p className="text-heading xs regular-16">Timeline Perbaikan</p>
          <TextForm
            fieldInput={{
              placeholder: 'Misalnya: Jakarta',
            }}
            name="area"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Deskripsi Perbaikan</p>
          <TextAreaForm
            control={control}
            name="description"
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Budget</p>
          <TextForm
            fieldInput={{
              placeholder: 'Misalnya: Jakarta',
            }}
            name="area"
            control={control}
          />
        </div>
      </form>
    </div>
  )
}
