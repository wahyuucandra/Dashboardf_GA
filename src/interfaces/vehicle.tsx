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
  kilometer: number | undefined
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
  frontside: File | undefined
  backside: File | undefined
  rightside: File | undefined
  leftside: File | undefined
  desc: string | undefined
}
