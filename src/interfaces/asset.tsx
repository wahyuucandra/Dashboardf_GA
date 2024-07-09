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
