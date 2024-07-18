import { API } from '@utils/common/constants'
import axios, { AxiosError } from 'axios'

const satellite = axios.create({
  baseURL: API,
  timeout: 5000, // in millisecond
  headers: {
    'Content-Type': 'application/json',
  },
})

// Menambahkan interceptor ketika menerima response
satellite.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

satellite.interceptors.response.use(
  response => {
    return response.data
  },
  (error: Error | AxiosError) => {
    return Promise.reject(error as AxiosError)
  }
)

export default satellite
