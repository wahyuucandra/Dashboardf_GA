import { IPaginationParam } from './api'

// Vehicle
export interface IVehicleBookingTime {
  time: string
  timeStart: string
  timeEnd: string
  stockAvailability: number
}

export interface IVehicleListParams extends IPaginationParam {
  lokasi: string
  kategori: string
  timeOpen: number
  timeClose: number
  flagACCBerijalan: string
  kapasitas: number
}

export interface IVehicleDetailParams {
  vehicleId: string
}

export interface IVehicleSecurityDetailParams {
  bookingId: string
}

export interface IVehicleSecurityDetailParams {
  bookingId: string
}

export interface IVehicle {
  idVehicle: string
  pathImage: string
  brand: string
  tipe: string
  tahun: string
  nomorPolisi: string
  tipeOpen: string
  kapasitas: string
  flagACCBerijalan: string
  flagActive: string
}
// Vehicle

export interface Vehicle {
  id: number
  operationType: OperationType
  name: string
  banner: string
  plateType: 'Ganjil' | 'Genap'
  isAvailabel: boolean
}

export interface VehicleDetail {
  id: number
  name: string
  capacity: number
  type: 'Manual' | 'Auto'
  plateType: 'Ganjil' | 'Genap'
  fuel: 'Bensin' | 'Listrik'
  terms: string[]
}

export interface OperationType {
  id: string
  text: string
}

export interface VehicleSecurityExitForm {
  kilometer: string | undefined
  securityName: string | undefined
  exitTime: Date | undefined
  condition: string | undefined
  fuelCondition: File | undefined
  frontside: File | undefined
  backside: File | undefined
  rightside: File | undefined
  leftside: File | undefined
  desc: string | undefined
}

export interface VehicleSecurityEnterForm {
  kilometer: number | undefined
  exitTime: Date | undefined
  condition: string | undefined
  fuelCondition: File | undefined
  refuel: boolean | undefined
  frontside: File | undefined
  backside: File | undefined
  rightside: File | undefined
  leftside: File | undefined
  desc: string | undefined
}
