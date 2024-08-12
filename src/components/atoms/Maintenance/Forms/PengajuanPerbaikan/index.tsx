'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import FileInput from '@components/atoms/FileInput'
import TextAreaForm from '@components/atoms/Form/TextAreaForm'
import TextForm from '@components/atoms/Form/TextForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { defaultImprovementProposalForm, ImprovementProposalForm } from '@interfaces/building-maintenance'

const formSchema = yup.object().shape({
  area: yup.string().required('Area wajib diisi'),
  branch: yup.string().required('Cabang wajib diisi'),
  submissionDate: yup.date().required('Update terakhir wajib diisi'),
  description: yup.string().required('Deskripsi pengajuan wajib diisi'),
  estCost: yup.string().required('Estimation cost wajib diisi'),
})

export function MaintenancePengajuan({ onSubmitForm }: { onSubmitForm: (formValue: ImprovementProposalForm) => void }) {
  const { handleSubmit, control } = useForm<ImprovementProposalForm>({
    defaultValues: defaultImprovementProposalForm,
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${
      date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)
    }-${date?.getDate()}`
  }

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }

  const onSubmit = (formValue: ImprovementProposalForm) => {
    onSubmitForm(formValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Area</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan Area',
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
              placeholder: 'Masukkan Cabang',
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
          <p className="text-heading xs regular-16">Deskripsi Pengajuan</p>
          <TextAreaForm
            control={control}
            name="description"
            fieldLabel={{ children: 'Description' }}
            fieldInput={{ rows: 5 }}
            counter
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">Estimasi Cost</p>
          <TextForm
            fieldInput={{
              placeholder: 'Masukkan perkiraan biaya yang diperlukan',
            }}
            name="estCost"
            control={control}
          />
        </div>
        <div className="mb-4">
          <p className="text-heading xs regular-16">
            Upload File dalam bentuk PDF/JPG/PNG<span className="text-red-500">*</span>
          </p>
          <FileInput
            onChangeFile={handleFileChange}
            value={selectedFile}
            accept="image/png, image/jpg, application/pdf"
          />
        </div>
        <button type="submit" className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]">
          Submit
        </button>
      </form>
    </div>
  )
}
