import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
import TextForm from '@components/atoms/Form/TextForm'
import SelectForm from '@components/atoms/Form/SelectForm'

// Skema statis
const staticSchema = {
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  submissionDate: Yup.date().required('Tanggal asessment wajib diisi'),
}

// Data forms
const dataForms = [
  { name: 'Kerapihan' },
  { name: 'Kedisiplinan' },
  { name: 'Kebersihan' },
  { name: 'Kualitas Kerja' },
  { name: 'Inisiatif' },
  { name: 'Kerjasama Tim' },
  { name: 'Komunikasi' },
  { name: 'Adaptasi' },
  { name: 'Kepemimpinan' },
]

// Skema dinamis
const dynamicSchema = dataForms.reduce((acc: any, form) => {
  acc[form.name.toLowerCase().replace(/\s+/g, '')] = Yup.object().required(`${form.name} wajib dipilih`)
  return acc
}, {})

const dynamicSchemas = dataForms.reduce((acc: any, form) => {
  // Ubah menjadi camelCase dengan cara yang lebih jelas
  const camelCaseName = form.name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  acc[camelCaseName] = Yup.string().required(`${form.name} wajib dipilih`)
  return acc
}, {})

// Gabungkan skema statis dan dinamis
const schema = Yup.object().shape({
  ...staticSchema,
  ...dynamicSchema,
  ...dynamicSchemas,
})

export default function FormSOI() {
  const { handleSubmit, control, setValue, watch } = useForm<any>({
    defaultValues: {
      area: 'Jakarta Pusat',
      branch: 'Cabang A',
      submissionDate: new Date(),
    },
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const options = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ]

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

  const onSubmit = () => {}

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p className="text-heading xs regular-16">Area</p>
            <TextForm
              fieldInput={{
                disabled: true,
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
            {/* Title form penilaian */}
            <p className="text-heading xs regular-16 mb-1">Form Penilaian</p>
            <p className="text-extra-small regular-12 text-[#B1B1B1] mb-1">
              Isi Nilai security: 1 Sangat Buruk, 10 Sangat Baik
            </p>
            <div className="dividers" />

            {/* Isi Forms */}
            {dataForms.map((form, indexs) => (
              <div key={indexs} className="flex items-center gap-4 justify-between mb-1">
                <p className="text-heading xs regular-16">{form.name}</p>
                <div className="flex flex-row">
                  {watch(form.name.toLowerCase().replace(/\s+/g, '')) === undefined ? (
                    <div className="flex items-center gap-2">
                      <p>1-10</p>
                      <SelectForm
                        control={control}
                        name={form.name.toLowerCase().replace(/\s+/g, '')}
                        placeholder="Score"
                        options={options}
                        setValue={setValue}
                        className="w-[140px]"
                        onChangeValue={(values: any) =>
                          setValue(
                            form.name
                              .toLowerCase()
                              .split(' ')
                              .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(''),
                            values
                          )
                        }
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <TextForm
                        fieldInput={{
                          placeholder: `Score ${form.name.toLowerCase()}`,
                          disabled: true,
                        }}
                        name={form.name
                          .toLowerCase()
                          .split(' ')
                          .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join('')}
                        control={control}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF] mb-4"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
