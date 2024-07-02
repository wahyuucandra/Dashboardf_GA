export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  fullName: string
  email: string
  dateOfBirth: Date
  phoneNumber: string
  password: string
  confPassword: string
}

export interface ForgotPasswordCredentials {
  phoneNumber: string
}

export interface ResetPasswordCredentials {
  password: string
  confPassword: string
}
