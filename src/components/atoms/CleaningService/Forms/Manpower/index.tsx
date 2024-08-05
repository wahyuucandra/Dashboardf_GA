import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '@components/atoms/button'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import SelectForm from '@components/atoms/Form/SelectForm'
import { manpowerFormDefaultValues, IFormManpowerCleaningService } from '@interfaces/cleaning-service'

const schema = Yup.object().shape({
  area: Yup.string().required('Area wajib diisi'),
  branch: Yup.string().required('Cabang wajib diisi'),
  lastUpdate: Yup.date().required('Tanggal pengajuan wajib diisi'),
  offeredCategory: Yup.object().required('Kategori pengajuan wajib dipilih'),
  manpowerExisting: Yup.string().required('Nama manpower existing wajib diisi'),
  year: Yup.string().required('Lama year bekerja wajib diisi'),
  month: Yup.string().required('Lama month bekerja wajib diisi'),
  reason: Yup.string().required('Alasan wajib diisi'),
})

export function CleaningServiceManpowerForm({
  onSubmitForm,
}: {
  onSubmitForm: (formValue: IFormManpowerCleaningService) => void
}) {
  const { handleSubmit, control, setValue } = useForm<IFormManpowerCleaningService>({
    defaultValues: manpowerFormDefaultValues,
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const options = [
    { label: 'Refreshment', value: 1 },
    { label: 'Additional', value: 2 },
  ]

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

  const onSubmit = (formValue: IFormManpowerCleaningService) => {
    onSubmitForm(formValue)
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
            name={'lastUpdate'}
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

                {errors?.['lastUpdate']?.message && (
                  <span className="text-xs text-error">{errors?.['lastUpdate']?.message?.toString()}</span>
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
