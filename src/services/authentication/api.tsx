import { API_ACCOUNT } from '@utils/environment'
import { APIBaseResponse } from '@interfaces/api'
import { ILoginResponse, LoginCredentials, OTPCredential, IOTPLoginResponse, IProfile } from '@interfaces/auth'
import httpRequest from '@utils/helper'

const api = httpRequest(API_ACCOUNT)

export function apiPostLogin(data: LoginCredentials) {
  return api.post<ILoginResponse, APIBaseResponse<ILoginResponse>>('/auth/loginMobile', data)
}

export function apiPostOTPLogin(data: OTPCredential) {
  return api.post<IOTPLoginResponse, APIBaseResponse<IOTPLoginResponse>>('/auth/loginMobile/verifyOtp', data)
}

export function apiPostRegister(data: any) {
  return api.post<boolean, APIBaseResponse<boolean>>('/auth/registerMobile', data)
}

export function apiPostOTPRegister(data: OTPCredential) {
  return api.post<boolean, APIBaseResponse<boolean>>('/auth/registerMobile/verifyOtp', data)
}

export function apiPostForgotPassword(data: any) {
  return api.post<boolean, APIBaseResponse<boolean>>('/auth/forgotPasswordMobile/changePassword', data)
}

export function apiPostSendOTPForgot(data: any) {
  return api.post<string, APIBaseResponse<string>>('/auth/forgotPasswordMobile/sendOtp', data)
}

export function apiPostVerifyOTPForgot(data: any) {
  return api.post<string, APIBaseResponse<string>>('/auth/forgotPasswordMobile/verifyOtp', data)
}

export function apiProfile(): Promise<APIBaseResponse<IProfile>> {
  // const response: APIBaseResponse<IProfile> = {
  //   reqId: 'a',
  //   error: null,
  //   message: 'Berhasil',
  //   status: 'T',
  //   data: {
  //     npk: null,
  //     nameUser: 'Dummx7251',
  //     email: 'dummx7251@gmail.com',
  //     dateOfBirth: '2000-01-01',
  //     noHp: '0817482384788',
  //   },
  //   pagination: {
  //     totalRecords: 2,
  //     currentPage: 1,
  //     totalPage: 1,
  //     nextPage: null,
  //     prevPage: null,
  //   },
  // }

  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 500)
  // })

  return api.get<IProfile, APIBaseResponse<IProfile>>('/auth/profile')
}
