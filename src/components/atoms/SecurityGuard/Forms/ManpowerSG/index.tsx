import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import SelectForm from '@components/atoms/Form/SelectForm'
import { formManpowerSGValues, IFormManpowerSG } from '@interfaces/security-guard'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  submissionDate: Yup.date().required('Tanggal pengajuan wajib diisi'),
  selectedOption: Yup.object().required('Kategori pengajuan wajib dipilih'),
  manpowerExistingName: Yup.string().required('Nama manpower existing wajib diisi'),
  year: Yup.string().required('Lama year bekerja wajib diisi'),
  month: Yup.string().required('Lama month bekerja wajib diisi'),
  reason: Yup.string().required('Alasan wajib diisi'),
})

export default function FormManpowerSG() {
  const { handleSubmit, control, setValue } = useForm<IFormManpowerSG>({
    defaultValues: formManpowerSGValues,
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
            name="selectedOption"
            placeholder="Pilih kategori pengajuan"
            options={options}
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Nama Manpower Existing</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan nama manpower existing',
            }}
            name="manpowerExistingName"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Lama Bekerja</p>
          <div className="flex gap-4">
            <div className="w-6/12">
              <TextForm
                fieldInput={{ type: 'tel', placeholder: 'Tahun' }}
                name="year"
                control={control}
                suffix="Tahun"
              />
            </div>
            <div className="w-6/12">
              <TextForm
                fieldInput={{ type: 'tel', placeholder: 'Bulan' }}
                name="month"
                control={control}
                suffix="Bulan"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Alasan</p>
          <TextAreaForm
            control={control}
            name="reason"
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
