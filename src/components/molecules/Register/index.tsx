'use client'

import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { IconLeftArrow } from '@components/atoms/Icon'
import { passwordPattern } from '@utils/regex'
import { RegisterCredentials } from '@interfaces/auth'
import { Button } from '@components/atoms/button'
import TextForm from '@components/atoms/Form/TextForm'
import DatePickerForm from '@components/atoms/Form/DatePickerForm'

const schema = yup.object().shape({
  fullName: yup.string().required('Nama Lengkap diperlukan'),
  email: yup
    .string()
    .email('Masukkan alamat email Anda menggunakan format: bikomaryono@acc.co.id')
    .required('Email diperlukan'),
  dateOfBirth: yup.date().required('Tanggal Lahir diperlukan'),
  phoneNumber: yup.string().required('Nomor Telepon diperlukan').min(9, 'No Handphone minimal 9 digit'),
  password: yup
    .string()
    .required('Kata Sandi diperlukan')
    .min(8, 'Kata Sandi minimal 8 digit')
    .matches(passwordPattern, 'Password harus berupa Huruf Besar, Huruf Kecil, Angka dan Simbol.'),
  confPassword: yup
    .string()
    .required('Konfirmasi Kata Sandi diperlukan')
    .min(8, 'Konfirmasi Kata Sandi minimal 8 digit')
    .matches(passwordPattern, 'Kata Sandi harus berupa Huruf Besar, Huruf Kecil, Angka dan Simbol.')
    .oneOf([yup.ref('password')], 'Kata Sandi tidak sama'),
})

export default function RegisterPage() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control, setValue } = useForm<RegisterCredentials>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/register/otp')
    }, 1000)
  }

  const isDisabled = () => {
    if (isLoading) {
      return true
    } else {
      return false
    }
  }

  const handlePhoneNumberChange = (e: any) => {
    const value = e.target.value
    const formattedValue = value.replace(/^0+/, '')
    setValue('phoneNumber', formattedValue)
  }

  // Handle tombol back ke dashboard
  const handleBack = useCallback(() => {
    router.back()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center mt-5">
        <div className="w-full max-w-xs">
          <button onClick={handleBack}>
            <IconLeftArrow height={24} width={24} className="cursor-pointer" />
          </button>
          <h1 className="text-[28px] font-bold text-black mt-[12px]">Daftar Sekarang</h1>
          <div>
            <span className="text-sm">Sudah memiliki akun BARN? </span>
            <Link href="/login" className="text-blue-500 hover:underline text-[14px] font-semibold">
              Masuk
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xs mt-5">
          <p className="text-sm text-[#7d8389] mt-[10px]">Nama Lengkap</p>
          <TextForm
            fieldInput={{
              placeholder: 'Nama Lengkap',
            }}
            name="fullName"
            control={control}
          />
          <p className="text-sm text-[#7d8389] mt-[10px]">No. Telepon</p>
          <TextForm
            fieldInput={{
              type: 'tel',
              placeholder: 'Masukkan Nomor Telepon',
            }}
            control={control}
            name="phoneNumber"
            prefix="+62"
            onChange={e => handlePhoneNumberChange(e)}
          />
          <p className="text-sm text-[#7d8389] mt-[10px]">Email</p>
          <TextForm
            fieldInput={{
              placeholder: 'Email',
            }}
            name="email"
            control={control}
          />
          <p className="text-sm text-[#7d8389] mt-[10px]">Tanggal Lahir</p>
          <DatePickerForm control={control} name="dateOfBirth" placeholder="Choose a date" className="my-4" />
          <p className="text-sm text-[#7d8389] mt-[10px]">Kata Sandi</p>
          <TextForm
            fieldInput={{
              placeholder: 'Password',
              type: 'password',
            }}
            name="password"
            control={control}
          />
          <p className="text-sm text-[#7d8389] mt-[10px]">Ketik Ulang Kata Sandi</p>
          <TextForm
            fieldInput={{
              placeholder: 'Password',
              type: 'password',
            }}
            name="confPassword"
            control={control}
          />

          <Button
            loader={isLoading}
            className="flex bg-[#346194] hover:bg-blue-700 mt-[20px] text-white font-bold border-2 border-white focus:outline-none focus:shadow-outline rounded-lg items-center justify-center w-full h-[48px]"
            disabled={isDisabled()}
            type="submit"
          >
            Daftar
          </Button>
        </div>
      </div>
    </form>
  )
}
