'use server'

import { OTPCredential } from '@interfaces/auth'
import satellite from '@services/satellite'

export const otpLoginAPI = async (dataOTP: OTPCredential) => {
  try {
    const response = await satellite.post('v1/api/auth/loginMobile/verifyOtp', dataOTP)
    satellite.defaults.headers.common.Authorization = `Bearer ${response?.data.token}`

    return response
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return { res: 'Email atau OTP yang dimasukkan salah' }
    }
    return { res: 'Terjadi kesalahan silahkan coba lagi' }
  }
}
