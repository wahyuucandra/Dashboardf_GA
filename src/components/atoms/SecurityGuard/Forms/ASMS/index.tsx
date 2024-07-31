import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
// import DatePickerForm from '@components/atoms/Form/DatePickerForm'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import SelectForm from '@components/atoms/Form/SelectForm'
import { formASMSValues, IFormASMS } from '@interfaces/security-guard'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  submissionDate: Yup.date().required('Tanggal pengajuan wajib diisi'),
  category: Yup.object().required('Kategori pengajuan wajib dipilih'),
  shiftExisting: Yup.string().required('Shift existing wajib diisi'),
  additionalManpower: Yup.object().required('Penambahan manpower wajib dipilih'),
  reason: Yup.string().required('Alasan wajib diisi'),
})

export default function FormASMS() {
  const { handleSubmit, control, setValue } = useForm<IFormASMS>({
    defaultValues: formASMSValues,
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
            name={'submissionDate'}
            render={({ field, formState: { errors } }) => (
              <>
                <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Tanggal Pengajuan</div>
                <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center">
                  <input
                    type="date"
                    value={handleMappingDate(field?.value)}
                    disabled={true}
                    className="w-full bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                  />
                </div>

                {errors?.['submissionDate']?.message && (
                  <span className="text-xs text-error">{errors?.['submissionDate']?.message?.toString()}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Kategori Pengajuan</p>
          <SelectForm
            control={control}
            name="category" // name matches label
            placeholder="Pilih kategori pengajuan"
            options={options}
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Shift Existing</p>
          <TextAreaForm
            control={control}
            name="shiftExisting"
            fieldLabel={{ children: 'Masukkan shift existing' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Penambahan Manpower</p>
          <SelectForm
            control={control}
            name="additionalManpower" // name matches label
            placeholder="Pilih penambahan manpower"
            options={optionsManpower}
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Alasan</p>
          <TextAreaForm
            control={control}
            name="reason" // name matches label
            fieldLabel={{ children: 'Masukkan alasan' }}
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
