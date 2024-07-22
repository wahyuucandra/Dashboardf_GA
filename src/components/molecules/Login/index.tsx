'use client'

import * as Yup from 'yup'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginCredentials } from '@interfaces/auth'
import { Button } from '@components/atoms/button'
import { useRouter } from 'next/navigation'
import { IconLogo } from '@components/atoms/Icon'
import { apiPostLogin } from '@services/authentication/api'
import { encryptAES } from '@utils/helper/CryptoJS'
import TextForm from '@components/atoms/Form/TextForm'
import satellite from '@services/satellite'

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email wajib diisi')
    .email('Masukkan alamat email Anda menggunakan format: bikomaryono@acc.co.id'),
  password: Yup.string().required('Kata sandi wajib diisi'),
})

export default function LoginPage() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control } = useForm<LoginCredentials>({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  useEffect(() => {
    delete satellite.defaults?.headers?.common?.Authorization
  }, [])

  // const onSubmit = async (value: LoginCredentials) => {
  //   const enc = encryptAES(value.email)
  //   console.log(decryptAES(enc))
  //   console.log(value.password)
  //   const dataLogin = {
  //     email: value.email,
  //     password: decryptAES(value.password),
  //   }
  //   console.log(dataLogin)
  // }

  const onSubmit = async (value: LoginCredentials) => {
    setIsLoading(true)

    const dataLogin = {
      email: value.email,
      password: encryptAES(value.password),
    }

    try {
      const response = await apiPostLogin(dataLogin)

      if (response.status === 'T') {
        const expirationTime = Date.now()
        sessionStorage.setItem('tokenExpiration', expirationTime.toString())
        sessionStorage.setItem('email', value.email)
        setIsLoading(false)
        router.push('/login/otp')
      } else {
        throw new Error(`API returned status code: ${response.status}`)
      }
    } catch (error) {
      // setError(error.message || 'An error occurred during login. Please try again.') // Assuming `setError` is a state setter
      // toast.error('Terjadi kesalahan silahkan coba lagi')

      setIsLoading(false)
    } finally {
      // (optional, e.g., clear loading state)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full max-w-md px-12">
        <div className="flex justify-center">
          <IconLogo width={40} height={40} className="self-center" />
        </div>
        <h1 className="text-[28px] font-bold text-black mt-[12px]">Masuk Sekarang</h1>
        <p className="font-semibold text-[#6B7280] text-sm">Masukkan email dan kata sandi untuk login</p>
        <form className="rounded-2xl w-120 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <p className="text-[#7d8389] text-sm">
              Email<span className="text-red">*</span>
            </p>
            <TextForm
              fieldInput={{
                placeholder: 'Email',
              }}
              name="email"
              control={control}
            />
          </div>
          <div className="mb-6">
            <p className="text-[#7d8389] text-sm">
              Kata Sandi<span className="text-red">*</span>
            </p>
            <TextForm
              fieldInput={{
                placeholder: 'Kata Sandi',
                type: 'password',
              }}
              name="password"
              control={control}
            />
          </div>

          <div className="flex items-center justify-between mb-[80px]">
            <div className="flex items-center justify-center h-full ">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-1" />
              <label htmlFor="rememberMe" className="text-sm">
                Remember Me
              </label>
            </div>

            <Link href="/forgot-password" className=" text-blue-500 hover:underline font-semibold text-[14px]">
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Button
              className="flex bg-[#386293] hover:bg-blue-700 text-white font-bold border-2 border-white focus:outline-none focus:shadow-outline rounded-lg items-center justify-center w-full h-[48px]"
              loader={isLoading}
            >
              Masuk
            </Button>
          </div>
        </form>
      </div>

      {/* <button onClick={() => LoginAccount()} type="button">
        Login Button
      </button> */}

      <div className="mt-4 text-center ">
        <span className="text-sm font-normal">Belum memiliki akun? </span>
        <Link href="/register" className="text-blue-500 hover:underline font-semibold text-sm">
          Daftar
        </Link>
      </div>
    </div>
  )
}
