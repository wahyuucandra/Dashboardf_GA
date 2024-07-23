// import { API_KEY } from '@utils/environment'

// import { getCookie } from 'cookies-next'
import { APIKey } from '@utils/environment'
import axios, { AxiosError } from 'axios'

const httpRequest = (baseURL: string) => {
  // Construct the access token string using template literal
  // const accessToken = token ?? (getCookie('access_token') || '')

  // Create the Axios instance with the configured headers
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      APIKey: APIKey,
      // Authorization: `Bearer ${accessToken}`,
    },
  })

  // Request interceptor (no changes needed here)
  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  )

  // Response interceptor with improved error handling
  instance.interceptors.response.use(
    response => response.data, // Return only the data from the response
    (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        // Handle Axios specific errors (e.g., network errors)
        return Promise.reject(error)
      } else {
        // Handle other types of errors
        return Promise.reject(error)
      }
    }
  )

  return instance
}

export default httpRequest
