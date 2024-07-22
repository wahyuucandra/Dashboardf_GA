'use server'

import { LoginCredentials } from '@interfaces/auth'
import satellite from '@services/satellite'

export const postLoginAPI = async (dataLogin: LoginCredentials) => {
  try {
    const response = await satellite.post('account/v1/api/auth/loginMobile', dataLogin)
    // satellite.defaults.headers.common.Authorization = `Bearer ${response?.data.token}`

    return response
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      return { res: 'Email atau kata sandi yang dimasukkan salah' }
    }
    return { res: 'Terjadi kesalahan silahkan coba lagi' }
  }
}
