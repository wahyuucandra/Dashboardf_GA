export interface Car {
  id: number
  policeNumberType: string
  name: string
  banner: string
  type: OperationType
}

export interface OperationType {
  id: string
  text: string
}

import car from '@assets/images/bannerCar.png'

export const operationTypes: OperationType[] = [
  {
    id: 'special-operation',
    text: 'Operational Khusus',
  },
  {
    id: 'office-operation',
    text: 'Operational Kantor',
  },
]

export const carsData: Car[] = [
  {
    id: 0,
    policeNumberType: 'Ganjil',
    banner: car.src,
    name: 'Inova',
    type: operationTypes[0],
  },
  {
    id: 1,
    policeNumberType: 'Ganjil',
    banner: car.src,
    name: 'Fortuner',
    type: operationTypes[0],
  },
  {
    id: 2,
    policeNumberType: 'Genap',
    banner: car.src,
    name: 'Alphard',
    type: operationTypes[1],
  },
  {
    id: 3,
    policeNumberType: 'Ganjil',
    banner: car.src,
    name: 'Inova V2',
    type: operationTypes[1],
  },
  {
    id: 4,
    policeNumberType: 'Genap',
    banner: car.src,
    name: 'Wagon R',
    type: operationTypes[0],
  },
]
