import bannerAsset1 from '@assets/images/BannerAsset1.png'
import bannerAsset2 from '@assets/images/BannerAsset2.png'
import bannerAsset3 from '@assets/images/BannerAsset3.png'
import { Asset, Brand } from '@interfaces/asset'

export const assetsData: Asset[] = [
  {
    id: 0,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua proyektor.',
    banner: bannerAsset1.src,
    name: 'Proyektor',
    isAvailabel: true,
  },
  {
    id: 1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua kamera.',
    banner: bannerAsset2.src,
    name: 'Kamera',
    isAvailabel: true,
  },
  {
    id: 3,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua hdmi.',
    banner: bannerAsset3.src,
    name: 'Kabel HDMI',
    isAvailabel: false,
  },
]

export const brandsData: Brand[] = [
  {
    id: 0,
    asset: assetsData[0],
    name: 'Epson',
    qty: 3,
    isAvailabel: true,
  },
  {
    id: 1,
    asset: assetsData[0],
    name: 'Panasonic',
    qty: 5,
    isAvailabel: true,
  },
  {
    id: 2,
    asset: assetsData[0],
    name: 'Canon',
    qty: 1,
    isAvailabel: false,
  },
  {
    id: 3,
    asset: assetsData[1],
    name: 'Canon SLR',
    qty: 5,
    isAvailabel: true,
  },
  {
    id: 4,
    asset: assetsData[1],
    name: 'Nikon SLR',
    qty: 3,
    isAvailabel: true,
  },
  {
    id: 5,
    asset: assetsData[2],
    name: 'HDMI AAA',
    qty: 7,
    isAvailabel: true,
  },
]
