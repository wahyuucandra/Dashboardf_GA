'use client'

import { Button } from '@components/atoms/button'
import TextForm from '@components/atoms/Form/TextForm'
import { IconLeftArrow } from '@components/atoms/Icon'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotPasswordCredentials } from '@interfaces/auth'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Nomor Telepon diperlukan').min(9, 'No Handphone minimal 9 digit'),
})

export default function ForgotPasswordPage() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control, watch, setValue } = useForm<ForgotPasswordCredentials>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    data.phoneNumber = '62' + data.phoneNumber.replace(/^0+/, '')
    setTimeout(() => {
      setIsLoading(false)
      router.push('/forgot-password/otp')
    }, 1000)
  }

  const handlePhoneNumberChange = (e: any) => {
    const value = e.target.value
    const formattedValue = value.replace(/^0+/, '')
    setValue('phoneNumber', formattedValue)
  }

  // Handle tombol back ke dashboard
  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full max-w-xs">
        <IconLeftArrow height={24} width={24} onClick={handleBack} className="cursor-pointer" />
        <h1 className="text-[28px] font-bold text-black mt-[12px]">Atur Ulang Kata Sandi</h1>
        <p className="text-sm font-normal text-[#6B7280]">
          Masukkan nomor HP yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-[#7d8389] mt-[10px] text-sm">No. Telepon</p>
          <TextForm
            fieldInput={{
              type: 'tel',
              placeholder: 'Masukkan Nomor Telepon',
            }}
            control={control}
            name="phoneNumber"
            prefix="+62"
            onChange={handlePhoneNumberChange}
          />
          <Button
            className="flex bg-buttonLogin hover:bg-blue-700 mt-[20px] shadowtext-white font-bold border-2 border-white focus:outline-none focus:shadow-outline rounded-lg items-center justify-center w-full h-[48px]"
            type="submit"
            loader={isLoading}
            disabled={!watch('phoneNumber')}
          >
            Lanjut
          </Button>
        </form>
      </div>
    </div>
  )
}
