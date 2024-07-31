'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import TextForm from '@components/atoms/Form/TextForm'
import { ButtonUpload } from '@components/atoms/button'
import DatePickerForm from '@components/atoms/Form/DatePickerForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'), // Required field with validation message
  cabang: Yup.string().required('Cabang wajib diisi'), // Required field with validation message
  timelinePerbaikan: Yup.object().required('Timeline perbaikan wajib diisi'), // Required field with validation message
})

export function MaintenanceReport() {
  const { handleSubmit, control } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = () => {}

  interface Condition {
    id: string
    name: string
  }

  const conditionsData: Condition[] = [
    { id: 'kondisi-pagar-luar', name: 'Kondisi Pagar Luar' },
    { id: 'kondisi-pos-security', name: 'Kondisi Pos Security' },
    { id: 'kondisi-bangunan-eksterior', name: 'Kondisi Bangunan Eksterior' },
    { id: 'kondisi-fasad', name: 'Kondisi Fasad' },
    { id: 'kondisi-lobby', name: 'Kondisi Lobby' },
    { id: 'area-service', name: 'Area Service' },
    { id: 'area-sales', name: 'Area Sales' },
    { id: 'area-ar', name: 'Area AR' },
    { id: 'area-remo', name: 'Area Remo' },
    { id: 'area-atap-rooftop', name: 'Area Atap/Rooftop' },
  ]

  const handleConditionClick = (id: any) => {
    const condition = conditionsData.find(c => c.id === id)
    if (condition) {
      return condition
    }
  }

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
          <p className="text-heading xs regular-16">Timeline Perbaikan</p>
          <DatePickerForm
            control={control}
            name="timelinePerbaikan"
            disablePast
            placeholder="Pilih timeline perbaikan"
            className="mt-1"
          />
        </div>

        {/* Foto - foto kondisi cabang */}
        <div className="mb-4 gap-2">
          <div className="mb-4">
            <p className="text-heading s semibold-18">Foto Kondisi Cabang</p>
            <p className="text-paragraph regular-14">
              Silahkan lengkapi konfirmasi di bawah ini dengan memfoto kondisi pada bangunan cabang
            </p>
          </div>
          {/* {conditions.map(condition => (
            <ButtonUpload key={condition} mainText={condition} onClick={() => handleClick} containerClass="mb-4" />
          ))} */}
          {conditionsData.map(condition => (
            <ButtonUpload
              key={condition.id}
              mainText={condition.name}
              onClick={() => handleConditionClick(condition.id)}
              containerClass="mb-4"
            />
          ))}
        </div>
        <button
          type="submit"
          className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF] mb-4"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
