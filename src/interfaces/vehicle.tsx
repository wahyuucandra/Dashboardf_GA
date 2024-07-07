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
