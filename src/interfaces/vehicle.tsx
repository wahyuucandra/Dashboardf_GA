import { IPaginationParams } from './api'

// Vehicle
export interface IVehicleBookingTime {
  time: string
  timeStart: string
  timeEnd: string
  stockAvailability: number
}

export interface IVehicleListParams extends IPaginationParams {
  lokasi: string // Contoh : ACC TB Simatupang
  kategori: 'Operational Khusus' | 'Operational Kantor' // Contoh : Operational Khusus | Operational Kantor
  timeOpen: number // Contoh : 10:00:00
  timeClose: number // Contoh : 20:00:00
  flagACCBerijalan: string // Contoh : ACC
  kapasitas: number // Contoh : 3
}

export interface IVehicle {
  idVehicle: string // Contoh data : 2
  pathImage: string // Contoh data : https://image
  vehicle: string // Contoh data : Toyota Alphard 2020
  nomorPolisi: string // Contoh data : B 1234 ACC
  ganjilGenap: 'genap' | 'ganjil' // Contoh data : genap | ganjil
}

export interface IVehicleDetailParams {
  vehicleId: string // Contoh : 2
  startBookingDate: string // Contoh : 2020-04-05
  endBookingDate: string // Contoh : 2020-04-06
  startBookingTime: string // Contoh : 10:00:00
  endBookingTime: string // Contoh : 20:00:00
}

export interface IVehicleDetail {
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

export interface IVehicleSecurityDetailParams {
  bookingId: string
}

export interface IVehicleSecurityDetailParams {
  bookingId: string
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
