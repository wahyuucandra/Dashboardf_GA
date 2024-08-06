import { IPaginationParams, ISearchParams } from './api'
import { DateInput } from './date-input'
import { TimeInput } from './time-input'

// Asset
export interface IListAssetParams extends IPaginationParams, ISearchParams {}

export interface IListAsset {
  noIdAsset: number // Contoh data : 1
  asset: string // Contoh data : 'Kursi'
  pathImage: string // Contoh data : 'https://image'
  description: string // Contoh data  : 'lorem ipsum dolor sit amet'
  stock: number // Contoh data : 4
}

export interface IListAssetBrandParams {
  noIdAsset: string // Contoh : '1'
}

export interface IListAssetBrand {
  noIdBrand: number // Contoh : 1
  noIdAsset: number // Contoh : 1
  brand: string // Contoh : 'Epson'
  stock: number // Contoh : 10
}

export interface IAssetBookingTime {
  time: string // Contoh : '08:00 - 08:30'
  timeStart: string // Contoh : '08:00'
  timeEnd: string // Contoh : '08:30'
  stockAvailability: number // Contoh : 5
}

export interface IAssetScheduleForm {
  date: { start: DateInput; end: DateInput }
  time: { start: TimeInput; end: TimeInput }
  reason: string
}

export interface ISubmitBookingAssetPayload {
  noIdAsset: number // Contoh payload : 1
  startBookingTime: string // Contoh payload : '13:00'
  startBookingDate: string // Contoh payload : '2024-07-10'
  endBookingTime: string // Contoh payload : '14:00'
  endBookingDate: string // Contoh payload : '2024-07-10'
  items: {
    noIdBrand: number // Contoh payload : 1
    kapasitas: number // Contoh payload : 3
  }[]
}
// Asset

export interface Asset {
  id: number
  name: string
  banner: string
  desc: string
  isAvailabel: boolean
}

export interface Brand {
  id: number
  asset: Asset
  name: string
  qty: number
  isAvailabel: boolean
}

export interface BrandItem extends Brand {
  isSelected: boolean
}

export interface AssetForm {
  brands: BrandItem[] | undefined
  reason: string | undefined
}

export const DefaulAssetForm = {
  brands: undefined,
  reason: undefined,
}
