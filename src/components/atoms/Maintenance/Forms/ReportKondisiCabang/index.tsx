'use client'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { ButtonUpload } from '@components/atoms/button'
import { BranchConditionReportForm, defaultBranchConditionReportForm } from '@interfaces/building-maintenance'
import TextForm from '@components/atoms/Form/TextForm'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  updateDate: Yup.date().required('Timeline perbaikan wajib diisi'),
})

export function MaintenanceReport() {
  const { handleSubmit, control } = useForm<BranchConditionReportForm>({
    defaultValues: defaultBranchConditionReportForm,
    resolver: yupResolver(schema),
    mode: 'all',
  })

  // const onSubmit = (value: BranchConditionReportForm) => {}
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

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

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
              disabled: true,
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
              disabled: true,
            }}
            name="branch"
            control={control}
          />
        </div>
        <div className="mb-4">
          <Controller
            defaultValue={undefined}
            control={control}
            name={'updateDate'}
            render={({ field, formState: { errors } }) => (
              <>
                <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Tanggal Update</div>
                <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center">
                  <input
                    type="date"
                    value={handleMappingDate(field?.value)}
                    disabled={true}
                    className="w-full bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                  />
                </div>

                {errors?.['updateDate']?.message && (
                  <span className="text-xs text-error">{errors?.['updateDate']?.message?.toString()}</span>
                )}
              </>
            )}
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
