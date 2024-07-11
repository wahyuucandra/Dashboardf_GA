'use client'

import IconMinus from '@assets/icons/IconMinus'
import IconPlus from '@assets/icons/IconPlus'
import IconScheduleRoom from '@assets/icons/IconScheduleRoom'
import confirmationDanger from '@assets/images/ConfirmationDanger.png'
import Header from '@components/atoms/Header'
import { Modal } from '@components/atoms/ModalCustom'
import { ReasonInputArea } from '@components/atoms/ReasonInput'
import { Asset, AssetForm, Brand, DefaulAssetForm } from '@interfaces/asset'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { brandsData } from './data'
import './style.css'

export function OrderSummary() {
  const router = useRouter()

  const [brands] = useState<Brand[]>(brandsData)
  const [acceptTerm, setAcceptTerm] = useState<boolean>()
  const [isTermModalOpen, SetIsTermModalOpen] = useState<boolean>(true)
  const [isConfimationModalOpen, setIsConfimationModalOpen] = useState<boolean>(false)

  const { setValue, control } = useForm<AssetForm>({
    defaultValues: {
      ...DefaulAssetForm,
      brands: [
        { ...brandsData[0], qty: 1, isSelected: true },
        { ...brandsData[1], qty: 1, isSelected: true },
        { ...brandsData[3], qty: 1, isSelected: true },
        { ...brandsData[4], qty: 1, isSelected: true },
        { ...brandsData[5], qty: 1, isSelected: true },
      ],
    },
  })

  const brandsForm = useWatch({
    control,
    name: 'brands',
  })

  const reason = useWatch({
    control,
    name: 'reason',
  })

  const handleFindBrand = (brand: Brand) => {
    return brandsForm?.find(val => val?.id == brand?.id)
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

  const handleBindBrandItems = (brandItems: Brand[]) => {
    if (!brandItems?.length) return ''
    return brandItems?.map(brandItem => {
      return (
        <div key={brandItem.id} className={`flex items-center space-x-6 mb-6`}>
          <div className="flex-1 flex items-center text-paragraph regular-14">
            <span
              className={`${brandItem.isAvailabel ? 'text-[#000000]' : 'text-[#D5D5D5]'} text-heading xs regular-16  mr-2`}
            >
              {brandItem.name}
            </span>
            <span
              className={`text-paragraph regular-14 ${brandItem.isAvailabel ? 'text-[#000000]' : 'text-[#D5D5D5]'} `}
            >
              ({brandItem.qty} pcs)
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              disabled={!handleCanSubtract(brandItem)}
              onClick={() => handleSubtractItem(brandItem)}
              className={`${!handleCanSubtract(brandItem) ? 'border-[#D5D5D5] text-[#D5D5D5]' : 'border-[#0089CF] text-[#0089CF]'} h-6 w-6 border  text-3xl rounded-full flex items-center justify-center`}
            >
              <IconMinus color={!handleCanSubtract(brandItem) ? '#D5D5D5' : '#0089CF'}></IconMinus>
            </button>
            <div className={`text-[#252525]`}>{handleFindBrand(brandItem)?.qty ?? 0}</div>
            <button
              disabled={!handleCanAdd(brandItem)}
              onClick={() => handleAddItem(brandItem)}
              className={`${!handleCanAdd(brandItem) ? 'border-[#D5D5D5] text-[#D5D5D5]' : 'border-[#0089CF] text-[#0089CF]'} h-6 w-6 border  text-3xl rounded-full flex items-center justify-center`}
            >
              <IconPlus color={!handleCanAdd(brandItem) ? '#D5D5D5' : '#0089CF'}></IconPlus>
            </button>
          </div>
        </div>
      )
    })
  }

  const handleMappingData = () => {
    const data: { [key: string]: Brand[] } = {}

    let element
    if (brands?.length) {
      brands.map(val => {
        if (val.isAvailabel) {
          if (val.asset.name in data) {
            data[`${val.asset.name}`].push(val)
          } else {
            data[`${val.asset.name}`] = [val]
          }
        }
      })

      if (data) {
        const dataArr = Object.keys(data).map(key => [key, data[key]])

        return dataArr.map((assetArray, index) => {
          return (
            <>
              <div
                key={!Array.isArray(assetArray[0]) ? assetArray[0] : index}
                className={`text-heading xs semibold-16 mb-6`}
              >
                {!Array.isArray(assetArray[0]) ? assetArray[0] : ''}
              </div>
              {Array.isArray(assetArray[1]) && handleBindBrandItems(assetArray[1])}
              <hr className="border-b border-[#EDEDED] my-6" />
            </>
          )
        })
      }
    }

    return element
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
      <div className="px-4 pt-16 pb-32 h-[86vh] overflow-y-auto">
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
        <div className="text-heading xs semibold-16 ">Order Summary</div>

        <hr className="border-b border-[#EDEDED] my-6" />

        {handleMappingData()}

        <div className="mb-6">
          <div className="text-heading xs semibold-16 mb-6">Notes</div>
          <ReasonInputArea
            value={reason}
            showCounter={false}
            max={200}
            placeholder="Contoh: Tolong merek proyektor sesuai karena laptop saya hanya bisa brand ini saja"
            onChangeInput={val => {
              setValue('reason', val)
            }}
          ></ReasonInputArea>
          <div className="flex justify-end text-paragraph regular-14 mt-2">{reason?.length ?? 0}/200</div>
        </div>

        <div>
          <label className="flex items-center custom-checkbox text-paragraph regular-14">
            <span className="text-[#252525]">
              Saya sudah membaca dan menyetujui <span className="text-[#0089CF]">syarat dan ketentuan</span>
            </span>
            <input
              type="checkbox"
              onChange={e => setAcceptTerm(e?.target?.checked)}
              defaultChecked={acceptTerm}
              name="checkmark"
            />
            <span className="mt-1 checkmark"></span>
          </label>
        </div>
      </div>

      <div className="fixed bottom-0 z-[101] bg-white pb-10 pt-4 w-full px-4">
        {handleTotalQty() > 0 && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-heading xs regular-16">Total</span>
            <span className="text-heading s semibold-18">{handleTotalQty()} items</span>
          </div>
        )}

        <button
          disabled={handleTotalQty() == 0 || !reason || !acceptTerm}
          type="button"
          className={` ${
            handleTotalQty() == 0 || !reason || !acceptTerm ? 'bg-[#B1B1B1]' : 'save-button'
          } h-12 w-full text-[#ffffff] py-2.5 rounded-lg`}
        >
          {<span className="text-heading xs semibold-16">Pesan Sekarang</span>}
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
