'use client'

import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { assetsData, brandsData } from './data'
import './style.css'
import { Asset, AssetForm, Brand, DefaulAssetForm } from '@interfaces/asset'
import IconSearch from '@assets/icons/IconSearch'
import { AssetItem } from '@components/atoms/Asset'
import { useForm, useWatch } from 'react-hook-form'
import IconPlus from '@assets/icons/IconPlus'
import IconMinus from '@assets/icons/IconMinus'

export function OrderSummary() {
  const router = useRouter()

  const [assets] = useState<Asset[]>(assetsData)
  const [brands, setBrands] = useState<Brand[]>([{ ...brandsData[0] }, { ...brandsData[1] }, { ...brandsData[2] }])
  const [selectedAsset, setSelectedAsset] = useState<Asset>(assetsData[0])
  const [acceptTerm, setAcceptTerm] = useState<boolean>()

  const [isTermModalOpen, SetIsTermModalOpen] = useState<boolean>(false)
  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

  const { setValue, control } = useForm<AssetForm>({ defaultValues: DefaulAssetForm })

  const brandsForm = useWatch({
    control,
    name: 'brands',
  })

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

  const handleMappingData = () => {
    // let data = reason
    return ''
    // let data = brandsForm
    // const ma
    // let total
    // if (asset) {
    //   total = data?.reduce((prev, curr) => {
    //     if (curr.asset?.id == asset?.id && curr.isSelected) {
    //       return (prev += curr.qty)
    //     }
    //     return prev
    //   }, 0)
    // } else {
    //   total = data?.reduce((prev, curr) => {
    //     if (curr.isSelected) {
    //       return (prev += curr.qty)
    //     }
    //     return prev
    //   }, 0)
    // }
    // return total || 0
  }

  return (
    <>
      <Header
        prevLink="/booking-asset/asset/schedule"
        title="Asset"
        key={'header'}
        useLink={false}
        onBack={() => {
          setIsConfimationModalOpen(true)
        }}
      ></Header>
      <div className="px-4 pt-16 h-screen">
        <div className="flex items-center space-x-3 py-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <IconScheduleRoom></IconScheduleRoom>
              <span className="text-information">ACC TB Simatupang</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsConfimationModalOpen(true)}
            className="text-button bg-[#E5F2FC] text-[#0089CF] px-5 py-2 rounded-md"
          >
            Ubah
          </button>
        </div>

        <div className="h-1.5 bg-[#F9F5F5] -mx-4 mt-2 mb-6"></div>

        <div className="text-heading xs semibold-16 mb-12">Order Summary</div>

        <div>Content Here</div>

        <label className="flex-1 flex items-center custom-checkbox text-paragraph regular-14">
          <span className="text-[#252525]">
            Saya menyetujui <span className="text-[#0089CF]">syarat dan ketentuan</span> yang berlaku
          </span>
          <input
            type="checkbox"
            onChange={e => setAcceptTerm(e?.target?.checked)}
            defaultChecked={acceptTerm}
            name="checkmark"
          />
          <span className="-mt-0.5 checkmark"></span>
        </label>

        {/* <div>
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
        </div> */}
      </div>

      <div className="fixed bottom-0 z-[101] bg-white pb-10 pt-5 w-full px-4">
        {handleTotalQty() > 0 && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-heading xs regular-16">Total</span>
            <span className="text-heading s semibold-18">{handleTotalQty()} items</span>
          </div>
        )}

        <button
          disabled={handleTotalQty() == 0}
          type="button"
          className={` ${
            handleTotalQty() == 0 ? 'bg-[#B1B1B1]' : 'save-button'
          } h-12 w-full text-[#ffffff] py-2.5  rounded-lg`}
        >
          {handleTotalQty() == 0 && <span className="text-heading xs semibold-16">Pesan Sekarang</span>}
        </button>
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

      {/* <Modal
        isOpen={isItemModalOpen}
        isFloating={false}
        backdropDismiss={false}
        backdropClick={() => setIsItemModalOpen(!isItemModalOpen)}
      >
        <div className="w-screen h-[calc(100vh_-_50px)] bg-white relative py-6 px-4">
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
                <label className="flex-1 flex items-center custom-checkbox text-paragraph regular-14">
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

          <div className="absolute bottom-0 right-0 left-0">
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
      </Modal> */}

      <Modal isOpen={isTermModalOpen} backdropClick={() => SetIsTermModalOpen(false)}>
        <div className="max-w-xs bg-white relative rounded-xl">
          <div className="pt-7 pb-4 px-4">
            <div className=" text-center text-heading s semibold-18 text-[#252525] mb-1">Syarat & Ketentuan</div>

            <div className="text-paragraph regular-14 text-[#717171]">
              kami tahu Anda tergoda untuk melewati Ketentuan Layanan ini, tetapi penting untuk menetapkan apa yang
              dapat Anda harapkan dari kami saat anda menggunakan layanan Setir Kanan, dan apa yang kami harapkan dari
              Anda Persyaratan Layanan ini mencerminkan cara kerja bisnis, undang-undang yang berlaku di perusahaan
              kami, dan hal-hal tertentu yang selalu kami yakini benar. Akibatnya, Ketentuan Layanan ini membantu
              menentukan hubungan Setir Kanan dengan anda saat Anda berinteraksi dengan layanan kami.
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
