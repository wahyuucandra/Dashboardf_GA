'use client'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import { BudgetTimelineForm, defaultBudgetTimelineForm } from '@interfaces/building-maintenance'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  repairTimeline: Yup.date().required('Timeline perbaikan wajib diisi'),
  description: Yup.string().required('Deskripsi wajib diisi'),
  budget: Yup.string().required('Budget wajib diisi'),
})

export function MaintenanceBudget() {
  const { handleSubmit, control } = useForm<BudgetTimelineForm>({
    defaultValues: defaultBudgetTimelineForm,
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

  const onSubmit = () => {}

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
            name={'repairTimeline'}
            render={({ field, formState: { errors } }) => (
              <>
                <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Timeline Perbaikan</div>
                <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center">
                  <input
                    type="date"
                    value={handleMappingDate(field?.value)}
                    disabled={true}
                    className="w-full bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                  />
                </div>

                {errors?.['repairTimeline']?.message && (
                  <span className="text-xs text-error">{errors?.['repairTimeline']?.message?.toString()}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Deskripsi Perbaikan</p>
          <TextAreaForm
            control={control}
            name="description"
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5, disabled: true }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Budget</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan budget',
              disabled: true,
            }}
            name="budget"
            control={control}
          />
        </div>
        <button type="submit" className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]">
          Submit
        </button>
      </form>
    </div>
  )
}
