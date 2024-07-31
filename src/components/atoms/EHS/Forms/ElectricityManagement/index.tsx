'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { ElectricityManagementForm, defaulElectricityManagementForm } from '@interfaces/ehs'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  area: yup.string().required('Area wajib diisi'),
  branch: yup.string().required('Cabang wajib diisi'),
  lastUpdate: yup.date().required('Update terakhir wajib diisi'),
  existKwhMeter: yup.number().required('Electricity meter existing wajib diisi'),
  updateKwhMeter: yup.number().required('Electricity meter update wajib diisi'),
})

export function EHSElectricityManagementForm({
  type = 'User',

  onSubmitForm,
}: {
  type?: 'Admin' | 'User'
  onSubmitForm: (formValue: ElectricityManagementForm) => void
}) {
  const { handleSubmit, control } = useForm<ElectricityManagementForm>({
    defaultValues: { ...defaulElectricityManagementForm, updateKwhMeter: type === 'User' ? 0 : 75 },
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  })

  const handleMappingDate = (date: Date) => {
    return `${date?.getFullYear()}-${date?.getMonth() + 1 >= 10 ? date?.getMonth() + 1 : '0' + (date?.getMonth() + 1)}-${date?.getDate()}`
  }

  const onSubmit = (formValue: ElectricityManagementForm) => {
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
          name={'existKwhMeter'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">KWH Meter Exsiting</div>
              <div className="h-[38px] border border-[#D5D5D5] bg-[#F6F6F6] rounded pt-1 px-4 flex items-center space-x-1">
                <span className="text-paragraph regular-14 text-[#909090]">{field?.value}</span>
                <span className="text-paragraph regular-14 text-[#909090]">KWH</span>
                <input
                  {...field}
                  type="number"
                  disabled={true}
                  className="hidden w-fit bg-[#F6F6F6] outline-none text-paragraph regular-14 text-[#909090]"
                />
              </div>
              {errors?.['existKwhMeter']?.message && (
                <span className="text-xs text-error">{errors?.['existKwhMeter']?.message?.toString()}</span>
              )}
            </>
          )}
        />
        <br />
        <Controller
          defaultValue={0}
          control={control}
          name={'updateKwhMeter'}
          render={({ field, formState: { errors } }) => (
            <>
              <div className="text-heading xs regular-16 text-[#0C0C0C] mb-1">KWH Meter Update</div>
              <div
                className={`h-10 overflow-hidden border border-[#D5D5D5] ${type === 'User' ? 'bg-[#FFFFFF]' : 'bg-[#F6F6F6]'} rounded pt-1 px-4 flex items-center space-x-1`}
              >
                <span className={`${type == 'User' ? 'hidden' : ''} text-paragraph regular-14 text-[#909090]`}>
                  {field?.value}
                </span>
                <span className={`${type == 'User' ? 'hidden' : ''} text-paragraph regular-14 text-[#909090]`}>
                  KWH
                </span>
                <input
                  {...field}
                  type="number"
                  disabled={type == 'Admin'}
                  className={`${type == 'User' ? '' : 'hidden'} w-full hide-arrow bg-[#FFFFFF] outline-none text-paragraph regular-14 text-[#0A0A0A]`}
                />
                <span
                  className={`${type == 'User' ? '' : 'hidden'} text-paragraph regular-14 text-[#404040] border-l border-[#D5D5D5] -pr-4 py-4 pl-4`}
                >
                  KWH
                </span>
              </div>
              {errors?.['updateKwhMeter']?.message && (
                <span className="text-xs text-error">{errors?.['updateKwhMeter']?.message?.toString()}</span>
              )}
            </>
          )}
        />

        <br />
        <br />
        <button
          type="submit"
          className={`${type === 'Admin' ? 'hidden' : ''} save-button h-11 rounded-lg w-full text-heading xs semibold-16 text-[#FFFFFF]`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
