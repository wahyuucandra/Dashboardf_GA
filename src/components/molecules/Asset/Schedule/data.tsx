import bannerCar from '@assets/images/BannerCar.png'
import bannerCar2 from '@assets/images/BannerCar2.png'
import { Asset, OperationType } from '@interfaces/vehicle'

export const operationTypes: OperationType[] = [
  {
    id: 'special-operational',
    text: 'Operational Khusus',
  },
  {
    id: 'office-operational',
    text: 'Operational Kantor',
  },
]

export const vehiclesData: Asset[] = [
  {
    id: 0,
    operationType: operationTypes[0],
    banner: bannerCar.src,
    name: 'Innova Zenix 2023',
    plateType: 'Genap',
    isAvailabel: true,
  },
  {
    id: 1,
    operationType: operationTypes[1],
    banner: bannerCar2.src,
    name: 'Fortuner Sport 2021',
    plateType: 'Ganjil',
    isAvailabel: true,
  },
  {
    id: 2,
    operationType: operationTypes[0],
    banner: bannerCar.src,
    name: 'Fortuner Sport 2020',
    plateType: 'Ganjil',
    isAvailabel: true,
  },
  {
    id: 3,
    operationType: operationTypes[1],
    banner: bannerCar2.src,
    name: 'Fortuner Sport 2020',
    plateType: 'Genap',
    isAvailabel: false,
  },
]
