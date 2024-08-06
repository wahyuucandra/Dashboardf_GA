'use client'

import IconMinus from '@assets/icons/IconMinus'
import IconPlus from '@assets/icons/IconPlus'
import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import IconSearch from '@assets/icons/IconSearch'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import { AssetItem } from '@components/atoms/Asset'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import {
  Asset,
  AssetForm,
  Brand,
  DefaulAssetForm,
  IListAsset,
  IListAssetBrand,
  IListAssetBrandParams,
  IListAssetParams,
} from '@interfaces/asset'
import { apiGetListAsset, apiGetListAssetBrand } from '@services/asset/api'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { assetsData, brandsData } from './data'
import './style.css'

export function List() {
  const initialRef = useRef(false)

  const searchParams = useSearchParams()
  const queryForm = searchParams.get('queryForm')

  const router = useRouter()

  const [assetLoading, setAssetLoading] = useState<boolean>(false)
  const [assetData, setAssetData] = useState<IListAsset[]>()

  const [assetBrandLoading, setAssetBrandLoading] = useState<boolean>(false)
  const [assetBrandData, setAssetBrandData] = useState<IListAssetBrand[]>()

  const handleFetchListAsset = async () => {
    const params: IListAssetParams = {
      page: 1,
      size: 10,
    }

    try {
      setAssetLoading(true)
      const response = await apiGetListAsset(params)
      if (response.status == 'T') setAssetData(response.data)
    } catch (error) {
      setAssetLoading(false)
    } finally {
      setAssetLoading(false)
    }
  }

  const handleFetchListAssetBrand = async (noIdAsset: string) => {
    const params: IListAssetBrandParams = {
      noIdAsset,
    }

    try {
      setAssetBrandLoading(true)
      const response = await apiGetListAssetBrand(params)
      if (response.status == 'T') setAssetBrandData(response.data)
    } catch (error) {
      setAssetBrandLoading(false)
    } finally {
      setAssetBrandLoading(false)
    }
  }

  useEffect(() => {
    if (initialRef.current === false) {
      handleFetchListAsset()
      handleFetchListAssetBrand('1')
      initialRef.current = true
    }
  }, [])

  const [assets] = useState<Asset[]>(assetsData)
  const [brands, setBrands] = useState<Brand[]>([{ ...brandsData[0] }, { ...brandsData[1] }, { ...brandsData[2] }])
  const [selectedAsset, setSelectedAsset] = useState<Asset>(assetsData[0])

  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)
  const [isItemModalOpen, setIsItemModalOpen] = useState<boolean>(false)
  const [isItemConfimationModalOpen, setIsItemConfimationModalOpen] = useState<boolean>(false)

  const { setValue, control } = useForm<AssetForm>({ defaultValues: DefaulAssetForm })

  const brandsForm = useWatch({
    control,
    name: 'brands',
  })

  const handleSearchBrand = (keyword: string) => {
    const data = brandsData.filter(
      val => val?.name?.toLowerCase().includes(keyword.toLowerCase()) && val?.asset?.id === selectedAsset?.id
    )
    setBrands(data)
  }

  const handleFindBrand = (brand: Brand) => {
    return brandsForm?.find(val => val?.id == brand?.id)
  }

  const handleFindBrandByAsset = (asset: Asset) => {
    return brandsForm?.filter(val => val?.asset?.id == asset?.id)
  }

  const handleFindBrandIndex = (brand: Brand): number => {
    if (brandsForm?.length) return brandsForm?.findIndex(val => val?.id == brand?.id)
    return -1
  }

  const handleAddItem = (brand: Brand) => {
    const data = brandsForm

    if (data?.length) {
      const index = handleFindBrandIndex(brand)

      if (index >= 0) {
        data[index] = {
          ...data[index],
          qty: data[index]?.qty + 1,
          isSelected: true,
        }

        setValue('brands', [...data])
        return undefined
      }

      setValue('brands', [...data, { ...brand, qty: 1, isSelected: true }])
      return undefined
    }

    setValue('brands', [{ ...brand, qty: 1, isSelected: true }])
    return undefined
  }

  const handleSubtractItem = (brand: Brand) => {
    const data = brandsForm

    if (data?.length) {
      const index = handleFindBrandIndex(brand)

      if (index >= 0) {
        if (data[index]?.qty > 0) {
          data[index] = {
            ...data[index],
            qty: data[index]?.qty - 1,
          }

          setValue('brands', [...data])
          return
        }

        data.splice(index, 1)
        setValue('brands', [...data])
        return
      }
    }
  }

  const handleCanAdd = (brand: Brand) => {
    const data = handleFindBrand(brand)

    if (!data?.isAvailabel) return false
    if (!data?.isSelected) return false
    if (!data?.qty) return true
    if (data?.qty < brand?.qty) return true
  }

  const handleCanSubtract = (brand: Brand) => {
    const data = handleFindBrand(brand)

    if (!data?.isAvailabel) return false
    if (!data?.isSelected) return false
    if (!data?.qty) return false
    if (brand?.qty > 0) return true
  }

  const handleIsSelected = (brand: Brand) => {
    const data = handleFindBrand(brand)

    if (data?.isSelected) return true
    return false
  }

  const handleSelectBrand = (brand: Brand, checked: boolean) => {
    const data = brandsForm
    const findedBrand = handleFindBrand(brand)

    if (data?.length) {
      const index = handleFindBrandIndex(brand)

      if (index >= 0) {
        data[index] = {
          ...data[index],
          isSelected: checked,
          qty: findedBrand?.qty ?? 0,
        }

        setValue('brands', [...data])
        return undefined
      }

      setValue('brands', [...data, { ...brand, qty: findedBrand?.qty ?? 0, isSelected: checked }])
      return undefined
    }

    setValue('brands', [{ ...brand, qty: findedBrand?.qty ?? 0, isSelected: checked }])
    return undefined
  }

  const handleTotalQty = (asset?: Asset) => {
    const data = brandsForm
    let total

    if (asset) {
      total = data?.reduce((prev, curr) => {
        if (curr.asset?.id == asset?.id && curr.isSelected) {
          return prev + curr.qty
        }

        return prev
      }, 0)
    } else {
      total = data?.reduce((prev, curr) => {
        if (curr.isSelected) {
          return prev + curr.qty
        }

        return prev
      }, 0)
    }

    return total ?? 0
  }

  return (
    <>
      {/* Top Navbar */}
      <Header
        prevLink="/booking-asset/asset/schedule"
        title="Asset"
        key={'header'}
        useLink={false}
        onBack={() => {
          setIsItemModalOpen(false)
          setIsConfimationModalOpen(true)
        }}
      ></Header>
      {assetLoading && <div className="hidden"></div>}
      {assetBrandLoading && <div className="hidden"></div>}
      {assetData && <div className="hidden"></div>}
      {assetBrandData && <div className="hidden"></div>}

      <div className="px-4 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-1">
              <IconScheduleRoom></IconScheduleRoom>
              <span className="text-information">ACC TB Simatupang</span>
            </div>
            <div className="text-desc flex items-center space-x-2">
              <span>13 Maret 2024</span>{' '}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsConfimationModalOpen(true)}
            className="text-button bg-[#E5F2FC] text-[#0089CF] px-3 py-2 rounded-md"
          >
            Ubah
          </button>
        </div>
        <div className="search-input h-[38px] mb-6 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-lg">
          <IconSearch color="#909090" />
          <input type="text" placeholder="Cari Assets" className="flex-1 text-paragraph regular-14 mt-1" />
        </div>
        <div>
          {assets?.map(asset => (
            <div key={asset.id}>
              <AssetItem
                onButtonClick={() => {
                  setSelectedAsset(asset)
                  if (!handleTotalQty(asset)) {
                    setIsItemModalOpen(true)
                    setBrands(brandsData.filter(val => val.asset == asset))
                  } else {
                    setIsItemConfimationModalOpen(true)
                  }
                }}
                asset={asset}
                qty={handleTotalQty(asset)}
              ></AssetItem>
              <hr className="border-b border-[#EDEDED] my-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Button Pesan */}
      <div className="fixed bottom-0 z-[101] bg-white pb-10 pt-5 w-full px-4 max-container">
        <div className="max-container">
          <button
            disabled={handleTotalQty() == 0}
            onClick={() => {
              router.push(`/booking-asset/asset/order-summary?${queryForm}`)
            }}
            type="button"
            className={` ${
              handleTotalQty() == 0 ? 'bg-[#B1B1B1]' : 'save-button'
            } h-12 w-full text-[#ffffff] py-2.5 rounded-lg`}
          >
            {handleTotalQty() == 0 && <span className="text-heading xs semibold-16">Pesan Sekarang</span>}
            {handleTotalQty() > 0 && (
              <div className="flex items-center justify-between px-4">
                <span>{handleTotalQty()} items</span>
                <span className="text-heading xs semibold-16">Pesan Sekarang</span>
              </div>
            )}
          </button>
        </div>
      </div>

      <Modal isOpen={isConfimationModalOpen} backdropClick={() => setIsConfimationModalOpen(!isConfimationModalOpen)}>
        <div className="max-w-[350px] bg-white relative p-6 text-center rounded-xl">
          <div>
            <Image
              width={0}
              height={0}
              sizes="100"
              src={confirmationDanger.src}
              className="mx-auto mb-4 w-28 h-28"
              alt="confirmation"
            ></Image>
          </div>
          <div className="text-heading s semibold-18 text-[#252525] mb-1">Konfirmasi Pindah Menu</div>
          <div className="text-paragraph regular-14 text-[#717171] mb-8 px-3">
            Semua data yang telah diisi akan hilang jika beralih ke menu lain. Yakin ingin melanjutkan?
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
                router.push(`/booking-asset/room`, { scroll: false })
              }}
              type="button"
              className="exit-button w-full text-center text-[#00376A] rounded-md overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Pindah</div>
            </button>
            <button
              onClick={() => {
                setIsConfimationModalOpen(false)
              }}
              type="button"
              className="cancel-button w-full text-center text-white rounded-xl overflow-hidden h-11"
            >
              <div className="py-2.5 px-6 text-heading xs semibold-16">Batal</div>
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isItemModalOpen}
        isFloating={false}
        backdropDismiss={false}
        backdropClick={() => setIsItemModalOpen(!isItemModalOpen)}
      >
        <div className="w-screen max-container h-[calc(100vh_-_50px)] bg-white relative py-6 px-4">
          <div className="text-heading xs semibold-16 mb-4">Pilih Brand {selectedAsset?.name}</div>

          <div className="search-input h-[38px] mb-4 px-3 flex items-center justify-center space-x-3 border border-[#D5D5D5] rounded-lg">
            <IconSearch color="#909090"></IconSearch>
            <input
              onChange={e => handleSearchBrand(e?.target?.value)}
              type="text"
              placeholder="Cari Brand"
              className="flex-1 text-paragraph regular-14 mt-1"
            />
          </div>

          <div className="-mx-4 overflow-x-auto h-screen pb-[350px]">
            {brands?.map(brand => (
              <div
                key={brand.id}
                className={`${brand?.asset != selectedAsset ? 'hidden' : ''} flex items-center space-x-6 mb-6 px-4`}
              >
                <label className="flex-1 flex custom-checkbox text-paragraph regular-14">
                  <span
                    className={`${brand.isAvailabel ? 'text-[#000000]' : 'text-[#D5D5D5]'} text-heading xs regular-16  mr-2`}
                  >
                    {brand.name}
                  </span>
                  <span
                    className={`text-paragraph regular-14 ${brand.isAvailabel ? 'text-[#000000]' : 'text-[#D5D5D5]'} `}
                  >
                    ({brand.qty} pcs)
                  </span>
                  <input
                    disabled={!brand.isAvailabel}
                    type="checkbox"
                    onChange={e => handleSelectBrand(brand, e?.target?.checked)}
                    defaultChecked={handleIsSelected(brand)}
                    name="checkmark"
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    disabled={!handleCanSubtract(brand)}
                    onClick={() => handleSubtractItem(brand)}
                    className={`${!handleCanSubtract(brand) ? 'border-[#D5D5D5] text-[#D5D5D5]' : 'border-[#0089CF] text-[#0089CF]'} h-6 w-6 border  text-3xl rounded-full flex items-center justify-center`}
                  >
                    <IconMinus color={!handleCanSubtract(brand) ? '#D5D5D5' : '#0089CF'}></IconMinus>
                  </button>
                  <div className={`${handleIsSelected(brand) ? '' : 'text-[#D5D5D5]'}`}>
                    {handleFindBrand(brand)?.qty ?? 0}
                  </div>
                  <button
                    disabled={!handleCanAdd(brand)}
                    onClick={() => handleAddItem(brand)}
                    className={`${!handleCanAdd(brand) ? 'border-[#D5D5D5] text-[#D5D5D5]' : 'border-[#0089CF] text-[#0089CF]'} h-6 w-6 border  text-3xl rounded-full flex items-center justify-center`}
                  >
                    <IconPlus color={!handleCanAdd(brand) ? '#D5D5D5' : '#0089CF'}></IconPlus>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 left-0 max-container">
            <div className="bg-white h-full px-4 py-6">
              <div
                className={`${handleTotalQty(selectedAsset) ? '' : 'hidden'} text-heading xs semibold-16 flex justify-between mb-6`}
              >
                <span>Item quantity</span>
                <span>{handleTotalQty(selectedAsset)} item</span>
              </div>
              <button
                onClick={() => {
                  setIsItemModalOpen(false)
                }}
                type="button"
                className="save-button h-12 rounded-lg w-full text-paragraph semibold-14 text-[#FFFFFF]"
              >
                Simpan Pesanan
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isItemConfimationModalOpen}
        isFloating={false}
        backdropDismiss={true}
        backdropClick={() => setIsItemConfimationModalOpen(false)}
      >
        <div className="w-screen h-[calc(40vh)] bg-white relative py-6 px-4 rounded-t-xl ">
          <div className="text-heading xs semibold-16">{selectedAsset?.name}</div>
          <hr className="border border-[#D9D9D9] my-4" />

          <div className="flex space-x-4 h-[400px] overflow-y-auto">
            <Image
              width={0}
              height={0}
              sizes="100"
              className="w-16 h-16 object-cover rounded"
              src={selectedAsset.banner}
              alt="banner more"
            ></Image>
            <div className="flex-1">
              <div className="text-heading xs semibold-16 mb-2">{selectedAsset?.name}</div>
              {handleFindBrandByAsset(selectedAsset)?.length &&
                handleFindBrandByAsset(selectedAsset)?.map(val => (
                  <div key={val.id} className="text-extra-small regular-12 text-[#0C0C0C] mb-1">
                    {val.name} ({val.qty} items)
                  </div>
                ))}
            </div>
            <div>
              <button className="border border-[#0089CF] w-full text-extra-small regular-12 text-[#0089CF] py-1 rounded px-6">
                {handleTotalQty(selectedAsset) + ' items'}
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 left-0">
            <div className="bg-white h-full px-4 py-6">
              <button
                onClick={() => {
                  setIsItemConfimationModalOpen(false)
                  setIsItemModalOpen(true)
                  setBrands(brandsData.filter(val => val.asset?.id == selectedAsset?.id))
                }}
                type="button"
                className="save-button h-11 rounded-lg w-full text-paragraph  semibold-14 text-[#FFFFFF]"
              >
                Pesan Lagi
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
