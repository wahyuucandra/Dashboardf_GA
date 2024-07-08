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
