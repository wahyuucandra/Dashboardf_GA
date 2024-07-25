'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { WasteManagementForm, defaulWasteManagementForm } from '@interfaces/ehs'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  area: yup.string().required('Area wajib diisi'),
  branch: yup.string().required('Cabang wajib diisi'),
  lastUpdate: yup.date().required('Update terakhir wajib diisi'),
  existTrashWeight: yup.number().required('Water meter existing wajib diisi'),
  updateTrashWeight: yup.number().required('Water meter update wajib diisi'),
})

export function EHSWasteManagementForm({ onSubmitForm }: { onSubmitForm: (formValue: WasteManagementForm) => void }) {
  const { handleSubmit, control } = useForm<WasteManagementForm>({
    defaultValues: defaulWasteManagementForm,
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  })

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

  const onSubmit = (formValue: WasteManagementForm) => {
    onSubmitForm(formValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          defaultValue={undefined}
          control={control}
          name={'area'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Area</div>
              <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center">
                <input
                  {...field}
                  type="text"
                  disabled={true}
                  className="w-full bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                />
              </div>
              {errors?.['area']?.message && (
                <span className="text-xs text-error">{errors?.['area']?.message?.toString()}</span>
              )}
            </>
          )}
        />
        <br />
        <Controller
          defaultValue={undefined}
          control={control}
          name={'branch'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Cabang</div>
              <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center">
                <input
                  {...field}
                  type="text"
                  disabled={true}
                  className="w-full bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                />
              </div>
              {errors?.['branch']?.message && (
                <span className="text-xs text-error">{errors?.['branch']?.message?.toString()}</span>
              )}
            </>
          )}
        />
        <br />
        <Controller
          defaultValue={undefined}
          control={control}
          name={'lastUpdate'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Tanggal Update Terakhir</div>
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
        <br />
        <Controller
          defaultValue={undefined}
          control={control}
          name={'existTrashWeight'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Berat Sampah Exsiting</div>
              <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center space-x-1">
                <span className="text-paragraph regular-14 text-[#909090]">{field?.value}</span>
                <span className="text-paragraph regular-14 text-[#909090]">KG</span>
                <input
                  {...field}
                  type="number"
                  disabled={true}
                  className="hidden w-fit bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                />
              </div>
              {errors?.['existTrashWeight']?.message && (
                <span className="text-xs text-error">{errors?.['existTrashWeight']?.message?.toString()}</span>
              )}
            </>
          )}
        />
        <br />
        <Controller
          defaultValue={0}
          control={control}
          name={'updateTrashWeight'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">Berat Sampah Exsiting</div>
              <div className="h-10 overflow-hidden border border-[#D5D5D5] bg-[#FFFFFF] rounded pt-1 px-4 flex items-center space-x-1">
                <input
                  {...field}
                  type="number"
                  className="w-full hide-arrow bg-[#FFFFFF] outline-none text-paragraph regular-14 text-[#0A0A0A]"
                />
                <span className="text-paragraph regular-14 text-[#404040] border-l border-[#D5D5D5] -pr-4 py-4 pl-4">
                  KG
                </span>
              </div>
              {errors?.['updateTrashWeight']?.message && (
                <span className="text-xs text-error">{errors?.['updateTrashWeight']?.message?.toString()}</span>
              )}
            </>
          )}
        />
        <br />
        <br />

        <button type="submit" className="save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]">
          Submit
        </button>
      </form>
    </div>
  )
}
